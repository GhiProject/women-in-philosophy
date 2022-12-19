import React, { useState } from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import Img from "gatsby-image";

// import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";

// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/


import "./practices.css";
import Signatory from "../components/signatory";

const PracticesPage = () => {
  const [showProcedure, setShowProcedure] = useState(false);
  const [open, setOpen] = useState({
    departments: false,
    journals: false,
    societies: false,
    groups: false
  })
  const toggleShowProcedure = () => {
    setShowProcedure(!showProcedure)
  }


  const data = useStaticQuery(graphql`
    {
      allSignatory {
        edges {
          node {
            entity
            name
            link
            exceptions
          }
        }
      }
      sealImage: file(relativePath: { eq: "seal.png" }) {
          childImageSharp {
            fixed(width: 120) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
    }
  `)

  const signatories = data.allSignatory.edges.map(signatory => signatory.node);
  const departmentElems = signatories.filter(s => s.entity === "department").map(Signatory)
  const journalElems = signatories.filter(s => s.entity === "journal").map(Signatory)
  const societyElems = signatories.filter(s => s.entity === "society").map(Signatory)
  const leaderElems = signatories.filter(s => s.entity === "leader").map(Signatory)

  return (
    <>
      <Layout>

        <div className="row">
          <div className="col-sm-9">
            <h1>Good Practices for Improving Representation</h1>

            <p>
              In line with the APA Strategic Plan's Objective to make the discipline “more inclusive, welcoming, and accessible" and supporting their effort to regularly “review, update, promote, and add to existing guidance and best practices to support diversity, equity, and inclusion throughout the discipline" the Demographics in Philosophy project proposes the following guidelines. We believe these practices will, if adopted, create a more welcoming and inclusive environment for all - including women, people of color, disabled people, non-native English speakers, first generation college students, those with serious economic needs or from developing countries, LBGTQ+ people, and people with political or religious views that are under-represented in the discipline, amongst others. We hope these suggestions will act as a starting point for improving the conditions for everyone in our discipline. The following guidelines promote equal opportunities for under-represented groups in philosophy and support and encourage  academic excellence of all kinds.
            </p>
            <p>
              Click <a href="#" onClick={toggleShowProcedure}>here</a> for the adoption procedure
            </p>
            <div className={showProcedure ? '' : 'hidden'}>
              <h2>How the Good Practices Scheme Works</h2>

              <p>Consider whether and how to implement Good Practices recommendations. We suggest clicking through the links on the right that pertain to your organization but you can also click <a href={withPrefix("/GoodPractices.pdf")}>here</a> to go straight to a document containing all of them</p>
              <ol className="procedure">
                <li>If you choose to implement the recommendations, inform the Good Practices Secretariat that you will establish a plan to implement the recommendations within a year.
                  Use <a href="https://docs.google.com/forms/d/e/1FAIpQLScBBOQgMKe5FhD_9lF4c6GRPgO1zx3_173_A9dmk5ddrGsNJQ/viewform?usp=sf_link" target="_blank">this link</a> to sign on.
                  To facilitate planning we provide <a href={withPrefix("/ImplementationTemplate.pdf")}>this template</a> that you can use, but doing so is entirely optional . Note that for departments, journals, and learned societies, there are different sets of recommendations that are applicable.</li>
                <li>Then inform the Good Practices Secretariat when your plan is in place with a concrete timeline for implementation to move from “commitment” to “adoption” status.</li>
                <li><p>
                  We also encourage you to advertise your commitment and use our GPS logo and we will link back to websites which display your commitment to these Good Practices.</p>
                </li>
              </ol>
            </div>

          </div>
          <div className="col-sm-3">
            <a href={withPrefix("/good_practices_seal.png")} download>
              <Img
                className="seal"
                fixed={data.sealImage.childImageSharp.fixed}
              />
            </a>

            <h2>Good Practices Documents</h2>
            <h3 className="practices-section-header" onClick={() => setOpen({ ...open, departments: !open.departments })}>Departments</h3>
            <ul className={open.departments ? '' : 'hidden'}>
              <li><a href={withPrefix("/HiringRetentionPromotion.pdf")} target="_blank">Hiring, Retention, and Promotion</a></li>
              <li><a href={withPrefix("/Teaching.pdf")} target="_blank">Teaching</a></li>
              <li><a href={withPrefix("/HarrassmentStaffStudentRelationships.pdf")} target="_blank">Harrassment and Staff-Student Relationships</a></li>
              <li><a href={withPrefix("/Caregivers.pdf")} target="_blank">Caregivers</a></li>
            </ul>
            <h3 className="practices-section-header" onClick={() => setOpen({ ...open, journals: !open.journals })}>Journals</h3>
            <ul className={open.journals ? '' : 'hidden'}>
              <li><a href={withPrefix("/Journals.pdf")} target="_blank">Journals</a></li>
            </ul>
            <h3 className="practices-section-header" onClick={() => setOpen({ ...open, societies: !open.societies })}>Learned Societies</h3>
            <ul className={open.societies ? '' : 'hidden'}>
              <li><a href={withPrefix("/ConferencesEvents.pdf")} target="_blank">Conferences and Events</a></li>
              <li><a href={withPrefix("/LearnedSocieties.pdf")} target="_blank">Learned Societies</a></li>
            </ul>
            <h3 className="practices-section-header" onClick={() => setOpen({ ...open, groups: !open.groups })}>Research Groups</h3>
            <ul className={open.groups ? '' : 'hidden'}>
              <li><a href={withPrefix("/ResearchProjects.pdf")} target="_blank">Research Projects</a></li>
              <li><a href={withPrefix("/HiringRetentionPromotion.pdf")} target="_blank">Hiring, Retention, and Promotion</a></li>
              <li><a href={withPrefix("/Caregivers.pdf")} target="_blank">Caregivers</a></li>
            </ul>
          </div>
        </div>
        <h2>Signatories</h2>
        <table className="signatories">
          <thead>
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Link to GPS info</th>
              <th scope="col">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            {departmentElems}
          </tbody>
        </table>
        <table className="signatories">
          <thead>
            <tr>
              <th scope="col">Journal</th>
              <th scope="col">Link to GPS info</th>
              <th scope="col">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            {journalElems}
          </tbody>
        </table>
        <table className="signatories">
          <thead>
            <tr>
              <th scope="col">Learned Society</th>
              <th scope="col">Link to GPS info</th>
              <th scope="col">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            {societyElems}
          </tbody>
        </table>
        <table className="signatories">
          <thead>
            <tr>
              <th scope="col">Project Leader</th>
              <th scope="col">Link to GPS info</th>
              <th scope="col">Exceptions</th>
            </tr>
          </thead>
          <tbody>
            {leaderElems}
          </tbody>
        </table>

      </Layout>
    </>
  )
};

export default PracticesPage;
