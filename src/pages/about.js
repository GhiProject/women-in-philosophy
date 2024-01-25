import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Member from "../components/member";
import Signatory from "../components/signatory";

const profileImage = {};

export default function About() {
    const data = useStaticQuery(graphql`
    {
      allProfile {
        edges {
          node {
            entity
            image
            name
            position
            bio
          }
        }
      }
      photos: allFile(filter: { relativeDirectory: { eq: "members" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 125) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

    // Map images into Map
    data.photos.edges.forEach((f) => {
        profileImage[f.node.name] = f.node.childImageSharp.fixed;
    });

    const profiles = data.allProfile.edges.map(profile => profile.node);
    const directorProfiles = profiles.filter(s => s.entity === "pi").map(Member)
    const advisorProfiles = profiles.filter(s => s.entity === "advisor").map(Member)
    const scientificProfiles = profiles.filter(s => s.entity === "scientific").map(Member)
    const staffProfiles = profiles.filter(s => s.entity === "staff").map(Member)

    return (
        <Layout>
            <strong>Contact us at:</strong>{" "}
            <a href="mailto:demphilproj@gmail.com">demphilproj@gmail.com</a>
            <br />
            <br />
            <h1>Directors</h1>
            {directorProfiles}
            <h1>Advisory Board</h1>
            {advisorProfiles}
            <br />
            <br />
            <h1>Scientific Advisory Board</h1>
            {scientificProfiles}
            <br />
            <br />
            <h1>Collaborators</h1>
            {staffProfiles}
        </Layout >
    );
}
