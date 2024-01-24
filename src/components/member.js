import React from "react";
import Img from "gatsby-image";

import "./member.css";

export default function Member({ entity, image, name, position, bio }) {
  return (
    <div className="member">
      <div className={`box ${entity}`}>
        <Img className="photo" fixed={image} />
        <h3>
          {name} <br />
          {'(' + position + ')'}
        </h3>

        <div className="about">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
