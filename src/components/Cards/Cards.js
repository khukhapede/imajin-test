import React, { useState } from "react";

import Styles from "./Cards.module.css";

import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  let navigate = useNavigate();

  const { id, name, telp, photo } = props;

  function booksNav() {
    navigate("/books/" + id);
  }
  return (
    <div className={Styles.mainBody}>
      <div className={Styles.authorPic}>
        <img src={photo} alt="profile" />
      </div>
      <div className={Styles.authorName}>{name}</div>
      <div className={Styles.authorPhone}>{telp}</div>
      <div className={Styles.btnDetail}>
        <button className={Styles.btnDet} onClick={booksNav}>details</button>
      </div>
    </div>
  );
}
