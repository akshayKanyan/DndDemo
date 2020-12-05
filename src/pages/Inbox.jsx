import React from "react";
import { Switch, Route } from "react-router-dom";

import InboxReal from "./InboxReal";

import Forensics from "./Forensics";
import Homicide from "./Homicide";
import CaseFiles from "./CaseFiles";

export default function Inbox({ data = {} }) {
  const {
    inboxData = [],
    forensicsData = [],
    homicideData = [],
    caseFilesData = [],
  } = data;
  return (
    <Switch>
      <Route
        path="/inbox"
        exact
        component={() => <InboxReal rowName="inboxData" data={inboxData} />}
      />
      <Route
        path="/inbox/forensics"
        component={() => (
          <Forensics rowName="forensicsData" data={forensicsData} />
        )}
      />
      <Route
        path="/inbox/homicide"
        component={() => (
          <Homicide rowName="homicideData" data={homicideData} />
        )}
      />
      <Route
        path="/inbox/case-files"
        component={() => (
          <CaseFiles rowName="caseFilesData" data={caseFilesData} />
        )}
      />
    </Switch>
  );
}
