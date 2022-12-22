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
        <div className="banner">
          <img src={'../images/under_construction.jpg'} alt={"Under Construction"}/>
        </div>
      </Layout>
    </>
  )
};

export default PracticesPage;
