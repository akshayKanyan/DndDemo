import React from "react";
import MailItem from "./MailItem";

export default function MailList({ items, ItemType, rowName }) {
  if (items.length) {
    return (
      <ul className="mail-list">
        {items.map((item, index) => {
          return (
            <MailItem
              ItemType={ItemType}
              rowName={rowName}
              key={item.id}
              item={item}
              itemIndex={index}
            />
          );
        })}
      </ul>
    );
  }

  return <div className="no-items">No items in this filter</div>;
}
