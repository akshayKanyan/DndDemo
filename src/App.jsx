import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Drafts from "./pages/Drafts";
import randomId from "random-id";
import Inbox from "./pages/Inbox";
import Sent from "./pages/Sent";
import Starred from "./pages/Starred";
import "./styles.css";

//temp setting data  -aksahy
const data = {
  inboxData: [
    {
      id: randomId(),
      title: "Lunch with detective",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
    },
    {
      id: randomId(),
      title: "New case files",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
    },
    {
      id: randomId(),
      title: "Forensics report from Ella",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
    },
    {
      id: randomId(),
      title: "Pierce murder history files",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: true,
    },
  ],
  forensicsData: [
    {
      id: randomId(),
      title: "Blood report from Ohio crime scene",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
      isRead: false,
    },
  ],
  homicideData: [],
  caseFilesData: [],
  starredData: [],
  sentData: [],
  draftsData: [
    {
      id: randomId(),
      title: "Procurement of new devices",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      id: randomId(),
      title: "Party in office",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
  ],
};

export const UpdateDataContext = React.createContext();

export default function App() {
  let [appData, setAppData] = useState(data);
  const updateData = (index, current, to) => {
    if (current === to) {
      return;
    }
    const newAppData = { ...appData };
    const data = newAppData[current][index];
    newAppData[current].splice(index, 1);
    newAppData[to].push(data);
    setAppData(newAppData);
  };

  return (
    <BrowserRouter>
      <h1 className="header">
        <span role="img" aria-label="lapd">
          🚔
        </span>{" "}
        LAPD, Mail
      </h1>
      <UpdateDataContext.Provider value={updateData}>
        <div className="container">
          <Sidebar data={appData} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/inbox" />
            </Route>
            <Route
              path="/inbox"
              component={() => (
                <Inbox
                  data={{
                    inboxData: appData.inboxData,
                    forensicsData: appData.forensicsData,
                    homicideData: appData.homicideData,
                    caseFilesData: appData.caseFilesData,
                  }}
                />
              )}
            />
            <Route
              path="/starred"
              component={() => (
                <Starred rowName={"starredData"} data={appData.starredData} />
              )}
            />
            <Route
              path="/sent"
              component={() => (
                <Sent rowName={"sentData"} data={appData.sentData} />
              )}
            />
            <Route
              path="/drafts"
              component={() => (
                <Drafts rowName={"draftsData"} data={appData.draftsData} />
              )}
            />
          </Switch>
        </div>
      </UpdateDataContext.Provider>
    </BrowserRouter>
  );
}
