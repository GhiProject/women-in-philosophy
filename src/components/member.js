import React from "react";
import Img from "gatsby-image";

import "./member.css";

export default function Member({ className, photo, name, position, children }) {
  return (
    <div className="member">
      <div className={`box ${className}`}>
        <Img className="photo" fixed={photo} />
        <h3>
          {name} <br />
          {position}
        </h3>

        <div className="about">
          <p>{children.slice(0,200)}</p>
        </div>
      </div>
    </div>
  );
}
