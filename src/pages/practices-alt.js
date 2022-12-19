import React from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
// import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";

// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/


import "./practices.css";
import Signatory from "../components/signatory";

const PracticesPage = () => {
  // const { ref, inView, entry } = useInView({});

  const data = useStaticQuery(graphql`
    {
      allSignatory {
        edges {
          node {
            name
            link
            exceptions
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
        <h1>Good Practices for Improving Representation</h1>
        <p>
          In line with the APA Strategic Plan's Objective to make the discipline “more inclusive, welcoming, and accessible" and supporting their effort to regularly “review, update, promote, and add to existing guidance and best practices to support diversity, equity, and inclusion throughout the discipline" the Demographics in Philosophy project proposes the following guidelines. We believe these practices will, if adopted, create a more welcoming and inclusive environment for all - including women, people of color, disabled people, non-native English speakers, first generation college students, those with serious economic needs or from developing countries, LBGTQ+ people, and people with political or religious views that are under-represented in the discipline, amongst others. We hope these suggestions will act as a starting point for improving the conditions for everyone in our discipline. The following guidelines promote equal opportunities for under-represented groups in philosophy and support and encourage  academic excellence of all kinds.
        </p>
        <p>
          Click <a href="#goodpractices">here</a> to go straight to a document or click on the guidelines on the right and click <a href="#adoptionprocedure">here</a> for the adoption procedure
        </p>
        <div>
          <h2 id="adoptionprocedure">How the Good Practices Scheme Works</h2>
          <a href={withPrefix("/AdoptionProcedure.pdf")}>Download as one document</a>
          <p>Consider whether and how to implement Good Practices recommendations.</p>
          <ol>
            <li>If you choose to implement the recommendations, inform the Good Practices Secretariat that you will establish a plan to implement the recommendations within a year. To facilitate planning we provide this template that you can use [link to template]. Note that for departments, journals, and learned societies, there are different sets of recommendations that are applicable.</li>
            <li>Then inform the Good Practices Secretariat when your plan is in place with a concrete timeline for implementation to move from “commitment” to “adoption” status. </li>
            <li>
              We also encourage you to advertise your commitment and use our GPS logo and we will link back to websites which display your commitment to these Good Practices.
            </li>
          </ol>
        </div>
        <h2>List of Signatories</h2>
        <h3>Departments</h3>
        <ul>
          {departmentElems}
        </ul>
        <h3>Journals</h3>
        <ul>
          {journalElems}
        </ul>
        <h3>Learned Societies</h3>
        <ul>
          {societyElems}
        </ul>
        <h3>Project Leaders</h3>
        <ul>
          {leaderElems}
        </ul>
        <p>
          Click <a href="https://docs.google.com/forms/d/e/1FAIpQLScBBOQgMKe5FhD_9lF4c6GRPgO1zx3_173_A9dmk5ddrGsNJQ/viewform?usp=sf_link">here</a> to sign on.
        </p>
        <h2 id="goodpractices">The Good Practices</h2>
        <a href={withPrefix("/GoodPractices.pdf")}>Download as one document</a>
        <ul>
          <li><a href={withPrefix("/HiringRetentionPromotion.pdf")}>Hiring, Retention, and Promotion</a></li>
          <li><a href={withPrefix("/Teaching.pdf")}>Teaching</a></li>
          <li><a href={withPrefix("/HarrassmentStaffStudentRelationships.pdf")}>Harrassment and Staff-Student Relationships</a></li>
          <li><a href={withPrefix("/Caregivers.pdf")}>Caregivers</a></li>
          <li><a href={withPrefix("/ConferencesEvents.pdf")}>Conferences and Events</a></li>
          <li><a href={withPrefix("/ResearchProjects.pdf")}>Research Projects</a></li>
          <li><a href={withPrefix("/LearnedSocieties.pdf")}>Learned Societies</a></li>
          <li><a href={withPrefix("/Journals.pdf")}>Journals</a></li>
        </ul>
      </Layout>
    </>
  )
};

export default PracticesPage;
