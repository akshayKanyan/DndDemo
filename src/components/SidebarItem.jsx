import React from "react";
import { useDrop } from "react-dnd";

export default function SidebarItem({ name, ItemType, children }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemType,
    drop: () => ({ name }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  let backgroundColor = "";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "#a6eb9a";
  }

  return (
    <div ref={drop} style={{ backgroundColor }} className="sidebar-item">
      {children}
    </div>
  );
}
