import React from "react";

import "./memberwrapper.css";

export default function MembersWrapper({ heading, members }) {
  return (
    <div className="members-wrapper">
      <h1 className="heading">{heading}</h1>
      <div className="members">
        {members.map((Member, i) => (
          <React.Fragment key={i}>
            <Member />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
