import React from "react";

import "./memberwrapper.css";

export default function MembersWrapper({ heading, members }) {
  return (
    <div className="members-wrapper">
      <h1 className="heading">{heading}</h1>
      <div className="members">
        {members.map((memberComponent, i) => (
          <div key={i}>{memberComponent}</div>
        ))}
      </div>
    </div>
  );
}
