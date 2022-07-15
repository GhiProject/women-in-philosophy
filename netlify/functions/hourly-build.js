import { schedule } from "@netlify/functions"
import fetch from "node-fetch";

const BUILD_HOOK = process.env.BUILD_HOOK

const handler = async function (event, context) {
    console.log("Received event:", event)

    return fetch(BUILD_HOOK, { method: 'POST' })
        .then(() => ({
            statusCode: 200,
        }))
        .catch(error => ({ statusCode: 422, body: String(error) }));
};

module.exports.handler = schedule("@hourly", handler);
