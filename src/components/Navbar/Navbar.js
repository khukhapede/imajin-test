import React, { useState, useEffect } from "react";

import Styles from "./Navbar.module.css";

import { API } from "../../config/api";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let navigate = useNavigate();

  function homeNav() {
    navigate("/");
  }
  return (
    <div className={Styles.main}>
      <div className={Styles.logo} onClick={homeNav}>
        <img src="/imajin.png" alt="logo" className={Styles.brand} />
      </div>
    </div>
  );
}
