import React, { useState } from "react";
import { graphql, useStaticQuery, withPrefix } from "gatsby";
import GoodPractisespdf from "../static/GoodPractices.pdf";


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
          Click <a href={GoodPractisespdf}>here</a> 
        </p>


      </Layout>
    </>
  )
};

export default PracticesPage;
