import React from "react";
import MailList from "../components/MailList";
import { ItemTypes } from "../constants/itemTypes";

export default function Sent({ data = [], rowName }) {
  return (
    <div className="page">
      <h2>Sent</h2>
      <MailList rowName={rowName} ItemType={ItemTypes.Type2} items={data} />
    </div>
  );
}
