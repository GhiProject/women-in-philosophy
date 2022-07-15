import React from "react";
import { graphql, StaticQuery, Link, withPrefix } from "gatsby";
import Img from "gatsby-image";
import YouTube from "react-youtube";
import Layout from "../components/layout";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        bannerImage: file(relativePath: { eq: "demographicsbanner.png" }) {
          childImageSharp {
            fluid(maxWidth: 1100) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Layout>
          <div className="banner">
            {" "}
            <Img fluid={data.bannerImage.childImageSharp.fluid} />{" "}
          </div>
          <h1>Welcome to the Demographics in Philosophy Project!</h1>
          <p>
            For the past decade or so, the lack of diversity in philosophy has received considerable attention. Though a number of studies have shown that there has been some progress made in the demographics of philosophy in the past decade, the progress is slow and disparities persist. (See for example, <a href="https://www.journals.uchicago.edu/doi/full/10.1086/718075">Hassoun, Conklin, Nekrasov, and West 2022</a>; <a href="https://www.philosophersmag.com/essays/244-the-diversity-of-philosophy-students-and-faculty-in-the-united-states">Schwitzgebel, Bright, Jennings, Thompson, and Winsberg 2021</a>; and other <Link to="resources">resources on the resources page</Link>.)
          </p>
          <p>
            A culture change is needed in philosophy. To foster this change we, the Demographics in Philosophy project, have done a few things. First, we have collected existing data on the representation of women in philosophy and put together a list of data based resources that may help us see more clearly what has gone wrong, how things have been changing over time, and to understand representation within different journals, professorial types, and ranks at different kinds of departments. On this site you can explore data on disparities between the proportion of those who are, and those who are not, under-represented in faculty hiring and publishing. You find resources for increasing diversity in philosophy and bibliographical information on surveys and large-scale empirical studies on the problem of underrepresentation in philosophy.
          </p>
          <p>
            We have also held a series of listening sessions with journals and department heads on best practices and reviewed the literature to create a set of Good Practice Guidelines that departments, journals, and societies can <Link to="practices">sign up to</Link> – also available as a <a href={withPrefix("/GoodPractices.pdf")}>downloadable document</a>. The aim of this guide is to address factors that affect inclusion of underrepresented groups in philosophy - such as the methods of practicing philosophy, how it is taught, the content of philosophy and the workings of philosophy programs and their practices. The Good Practice Guidelines draw, and expand, on the APA’s Good Practices Guide and Blog on Diversity and Equity in Recruitment, the BPA/SWIP Good Practice Scheme, the Oxford University faculty of law Good Practices Guide, and the Canadian Society for Women in Philosophy Guidelines for Conference Hosting.
          </p>


          <div className="video">
            {" "}
            <YouTube videoId="zndDhO6Mo68" opts={opts} />{" "}
          </div>
        </Layout>
      </>
    )}
  />
);

export default IndexPage;
