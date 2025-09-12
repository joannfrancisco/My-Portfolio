import React, { useState, useEffect } from "react";
import "./LinkTooltip.css";

export default function LinkTooltip() {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const selector = ".show-link-tooltip"; // ✅ only apply to these links

    const handleMouseOver = (e) => {
      if (e.target.closest(selector)) {
        setVisible(true);
      }
    };

    const handleMouseOut = (e) => {
      if (!e.relatedTarget || !e.relatedTarget.closest(selector)) {
        setVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      if (visible) {
        setPos({ x: e.clientX, y: e.clientY });
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [visible]);

  return (
    <div
      className={`link-tooltip ${visible ? "show" : ""}`}
      style={{ left: pos.x, top: pos.y - 18 }}
    >
      view live site
    </div>
  );
}
