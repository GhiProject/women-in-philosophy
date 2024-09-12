import React, { useState } from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import Img from "gatsby-image";

// import { useInView } from "react-intersection-observer";
import Layout from "../components/layout";
import under_construction from '../images/under_construction.jpg'

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
        {/* <div className="center_align_container">
          <img src={under_construction} alt={"Under Construction"}/>
        </div> */}
         <h1>Good Practices for Improving Representation</h1>
        <p>
          In line with the APA Strategic Plan's Objective to make the discipline “more inclusive, welcoming, and accessible" and supporting their effort to regularly “review, update, promote, and add to existing guidance and best practices to support diversity, equity, and inclusion throughout the discipline" the Demographics in Philosophy project proposes the following guidelines. 
        </p>
        <p>
          Click <a href="#goodpractices">here</a> to go straight to a document or click on the guidelines on the right and click <a href="#adoptionprocedure">here</a> for the adoption procedure
        </p>

        <div>
          <h2 id="adoptionprocedure">How the Good Practices Scheme Works</h2>
          <a href="AdoptionProcedure.pdf" download>Download as one document</a>
          <p>Consider whether and how to implement Good Practices recommendations.</p>
          <ol>
            <li>If you choose to implement the recommendations, inform the Good Practices Secretariat that you will establish a plan to implement the recommendations within a year.</li>
            <li>Then inform the Good Practices Secretariat when your plan is in place with a concrete timeline for implementation to move from “commitment” to “adoption” status.</li>
            <li>We encourage you to advertise your commitment and use our GPS logo and we will link back to websites which display your commitment to these Good Practices.</li>
          </ol>
        </div>

        <h2>List of Signatories</h2>

        <h3>Departments</h3>
        <ul>
    
          <li>departmentElems</li>
        </ul>

        <h3>Journals</h3>
        <ul>
          
          <li>journalElems</li>
        </ul>

        <h3>Learned Societies</h3>
        <ul>

          <li>societyElems</li>
        </ul>

        <h3>Project Leaders</h3>
        <ul>
          
          <li>leaderElems</li>
        </ul>

        <p>
          Click <a href="https://docs.google.com/forms/d/e/1FAIpQLScBBOQgMKe5FhD_9lF4c6GRPgO1zx3_173_A9dmk5ddrGsNJQ/viewform?usp=sf_link" target="_blank">here</a> to sign on.
        </p>

        <h2 id="goodpractices">The Good Practices</h2>
        <a href="GoodPractices.pdf" download>Download as one document</a>
        <ul>
          <li><a href="HiringRetentionPromotion.pdf" download>Hiring, Retention, and Promotion</a></li>
          <li><a href="Teaching.pdf" download>Teaching</a></li>
          <li><a href="HarrassmentStaffStudentRelationships.pdf" download>Harrassment and Staff-Student Relationships</a></li>
          <li><a href="Caregivers.pdf" download>Caregivers</a></li>
          <li><a href="ConferencesEvents.pdf" download>Conferences and Events</a></li>
          <li><a href="ResearchProjects.pdf" download>Research Projects</a></li>
          <li><a href="LearnedSocieties.pdf" download>Learned Societies</a></li>
          <li><a href="Journals.pdf" download>Journals</a></li>
        </ul>
      </Layout>
    </>
  )
};

export default PracticesPage;
