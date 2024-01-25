/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})


const { google } = require('googleapis')
const API_KEY = process.env.GOOGLE_API_KEY
const GOOD_PRACTICES_SIGNUP_SPREADSHEET_ID = process.env.GOOD_PRACTICES_SIGNUP_SPREADSHEET_ID
const ADD_PROFILE_SPREADSHEET_ID = process.env.ADD_PROFILE_SPREADSHEET_ID
const sheetsOpts = { version: 'v4', auth: API_KEY }
const driveOpts = { version: 'v3', auth: API_KEY }
const sheets = google.sheets(sheetsOpts)
const drive = google.drive(driveOpts);
const range = 'A:F'
const GOOGLE_DRIVE_IMAGE_URL = 'https://drive.google.com/uc?export=view&id='


exports.sourceNodes = async ({
    actions: { createNode },
    createContentDigest,
    createNodeId
}) => {
    const goodPracticesSignupResponse = await sheets.spreadsheets.values.get({ spreadsheetId: GOOD_PRACTICES_SIGNUP_SPREADSHEET_ID, range })
    const goodPracticesSignupValues = goodPracticesSignupResponse.data.values
    if (goodPracticesSignupValues.length <= 1) throw Error('no content in spreadsheet')
    goodPracticesSignupValues.shift() // remove header row

    const addProfileResponse = await sheets.spreadsheets.values.get({ spreadsheetId: ADD_PROFILE_SPREADSHEET_ID, range })
    const addProfileValues = addProfileResponse.data.values
    if (addProfileValues.length <= 1) throw Error('no content in spreadsheet')
    addProfileValues.shift() // remove header row

    const objs = []

    goodPracticesSignupValues.forEach(row => {

        const obj = {}

        switch (row[1]) {
            case "Department":
                obj.entity = "department"
                break;
            case "Journal":
                obj.entity = "journal"
                break;
            case "Learned Society":
                obj.entity = "society"
                break;
            case "Research Project Leader":
                obj.entity = "leader"
                break;
            default:
                throw Error("unknown entity type: " + row[1])
        }

        if (!row[2]) throw Error("no name given")
        obj.name = row[2]

        obj.link = row[3] ?? ''

        obj.exceptions = row[5] ?? ''

        obj.type = 'Signatory'

        objs.push(obj)
    })

    addProfileValues.forEach(row => {

        const obj = {}

        switch (row[1]) {
            case "Directors":
                obj.entity = "pi"
                break;
            case "Advisory Board":
                obj.entity = "advisor"
                break;
            case "Scientific Advisory Board":
                obj.entity = "scientific"
                break;
            case "Collaborators":
                obj.entity = "staff"
                break;
            default:
                throw Error("unknown entity type: " + row[1])
        }

        obj.image = '#'

        let image_id = row[2].split('id=')[1]

        drive.files.get({
            fileId: image_id,
            fields: 'webContentLink'
        }).then(function(success){
            obj.image = success.data.webContentLink

            obj.name = row[3] ?? ''

            obj.position = row[4] ?? ''

            obj.bio = row[5] ?? ''

            obj.type = 'Profile'

            objs.push(obj)
        }, function(fail){
            console.log(fail);
            console.log('Error '+ fail.result.error.message);

            obj.name = row[3] ?? ''

            obj.position = row[4] ?? ''

            obj.bio = row[5] ?? ''

            obj.type = 'Profile'

            objs.push(obj)
        })
    })

    const nodes = objs.map((obj, i) => ({
        id: createNodeId(i),
        parent: null,
        children: [],
        internal: {
            type: obj.type,
            contentDigest: createContentDigest(obj),
        },
        ...obj
    }))

    nodes.forEach(async node => {
        console.log('creating node ' + node.name)
        const ret = await createNode(node)
    })
}