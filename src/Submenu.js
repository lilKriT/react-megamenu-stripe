import React, { useState, useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext();
  return (
    <aside className={`submenu ${isSubmenuOpen && "show"}`}>Submenu</aside>
  );
};

export default Submenu;
