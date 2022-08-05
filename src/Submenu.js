import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen, location } = useGlobalContext();
  const container = useRef();
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`} ref={container}>
      Submenu
    </aside>
  );
};

export default Submenu;
