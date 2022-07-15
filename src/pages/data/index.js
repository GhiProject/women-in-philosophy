import React from "react";
import YouTube from "react-youtube";

import Layout from "../../components/layout";
import DataSource from "../../components/datasource";
import { Summary as JstorSummary } from "./jstor";
import { Summary as FacultySummary } from "./faculty";
import { Summary as JournalSummary } from "./h_journal";
import "./data.css"

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

export default function Data() {
  return (
    <Layout>
      <DataSource source={FacultySummary} />
      <DataSource source={JstorSummary} />
      <DataSource source={JournalSummary} />
      <div className="video">
        <YouTube videoId="-8vP2nrdEfk" opts={opts} />{" "}
      </div>
    </Layout>
  );
}
