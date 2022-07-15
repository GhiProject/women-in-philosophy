import React from "react";
import { graphql, StaticQuery, withPrefix } from "gatsby";
import { Nav, Navbar } from "react-bootstrap";
import Img from "gatsby-image";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import Metadata from "./metadata";

import "./bootstrap.min.css";
import "./layout.css";

export default ({ active, className, children }) => (
  <StaticQuery
    query={graphql`
      {
        logoImage: file(relativePath: { eq: "womenlogo_light.jpg" }) {
          childImageSharp {
            fixed(width: 60) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }

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
        <Metadata />
        <Navbar
          className="navbar-light sticky-top"
          expand="sm"
          style={{ backgroundColor: "#fff" }}
        >
          <Navbar.Brand href={withPrefix("/")}>
            <Img
              className="logo"
              fixed={data.logoImage.childImageSharp.fixed}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href={withPrefix("/")} className={active === "home" ? "active" : ""}>
                Home
              </Nav.Link>
              <Nav.Link
                href={withPrefix("/practices")}
                className={active === "practices" ? "active" : ""}
              >
                Good Practices{" "}
              </Nav.Link>
              <Nav.Link
                href={withPrefix("/data")}
                className={active === "explore" ? "active" : ""}
              >
                Data on Women{" "}
              </Nav.Link>
              <Nav.Link
                href={withPrefix("/resources")}
                className={active === "resources" ? "active" : ""}
              >
                Resources{" "}
              </Nav.Link>
              <Nav.Link
                href={withPrefix("/about")}
                className={active === "about" ? "active" : ""}
              >
                {" "}
                About Us{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container">
          <div id="content" className={className}>
            {children}
          </div>
        </div>
        <Navbar className="navbar-dark footer" expand="sm">
          <Nav>
            <Nav.Link href="https://www.facebook.com/PhilosophyData/">
              <FaFacebookSquare color="#ffffff" size={25} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/PhilosophyData">
              <FaTwitterSquare color="#ffffff" size={25} />{" "}
            </Nav.Link>
          </Nav>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Navbar.Brand
              href="https://www.global-health-impact.org/"
              className="ghi-footer"
            >
              Affiliate of Global Health Impact
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      </>
    )}
  />
);
