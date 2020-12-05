import React from "react";
import { NavLink } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SidebarLabels from "./SidebarLabels";
import { ItemTypes } from "../constants/itemTypes";

export default function Sidebar({ data = {} }) {
  let {
    inboxData = [],
    forensicsData = [],
    homicideData = [],
    caseFilesData = [],
    starredData = [],
    sentData = [],
    draftsData = [],
  } = data;
  return (
    <div className="sidebar">
      <NavLink to="/inbox">
        <SidebarItem name="inboxData" ItemType={ItemTypes.Type1}>
          <span role="img" aria-label="inbox">
            📥
          </span>{" "}
          INBOX {inboxData.length ? `(${inboxData.length})` : null}
        </SidebarItem>
      </NavLink>

      <SidebarLabels>
        <NavLink to="/inbox/forensics">
          <SidebarItem name="forensicsData" ItemType={ItemTypes.Type1}>
            FORENSICS{" "}
            {forensicsData.length ? `(${forensicsData.length})` : null}
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/homicide">
          <SidebarItem name="homicideData" ItemType={ItemTypes.Type1}>
            HOMICIDE {homicideData.length ? `(${homicideData.length})` : null}
          </SidebarItem>
        </NavLink>
        <NavLink to="/inbox/case-files">
          <SidebarItem name="caseFilesData" ItemType={ItemTypes.Type1}>
            CASE FILES{" "}
            {caseFilesData.length ? `(${caseFilesData.length})` : null}
          </SidebarItem>
        </NavLink>
      </SidebarLabels>

      <NavLink to="/starred">
        <SidebarItem name="starredData" ItemType={ItemTypes.Type1}>
          <span role="img" aria-label="inbox">
            ⭐️
          </span>{" "}
          STARRED {starredData.length ? `(${starredData.length})` : null}
        </SidebarItem>
      </NavLink>

      <NavLink to="/sent">
        <SidebarItem name="sentData" ItemType={ItemTypes.Type2}>
          <span role="img" aria-label="inbox">
            ✉️
          </span>{" "}
          SENT {sentData.length ? `(${sentData.length})` : null}
        </SidebarItem>
      </NavLink>

      <NavLink to="/drafts">
        <SidebarItem name="draftsData" ItemType={ItemTypes.Type2}>
          <span role="img" aria-label="inbox">
            📨
          </span>{" "}
          DRAFTS {draftsData.length ? `(${draftsData.length})` : null}
        </SidebarItem>
      </NavLink>
    </div>
  );
}
