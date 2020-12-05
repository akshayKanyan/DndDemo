import React, { useContext } from "react";
import { useDrag } from "react-dnd";
import { UpdateDataContext } from "../App";

export default function MailItem({ item, ItemType, rowName, itemIndex }) {
  const updateData = useContext(UpdateDataContext);
  const [{ isDragging }, drag] = useDrag({
    item: { name: item.id, type: ItemType },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        updateData && updateData(itemIndex, rowName, dropResult.name);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <li style={{ opacity }} ref={drag} className="mail-item">
      <span role="img" aria-label="mark star" style={{ marginRight: "8px" }}>
        ⭐️
      </span>
      <span>
        s
        {item.isRead || typeof item.isRead === "undefined" ? (
          item.title
        ) : (
          <strong>{item.title}</strong>
        )}
      </span>
    </li>
  );
}
