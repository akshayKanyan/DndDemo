import React from "react";
import MailList from "../components/MailList";
import { ItemTypes } from "../constants/itemTypes";

export default function InboxReal({ data = [], rowName }) {
  return (
    <div className="page">
      <h2>Inbox</h2>

      <MailList
        rowName={rowName}
        ItemType={ItemTypes.Type1}
        items={data}
      />
    </div>
  );
}
