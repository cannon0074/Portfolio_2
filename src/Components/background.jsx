import React, { useState, useEffect } from "react";
import "../css/background.css"; // CSSファイルの読み込み
import "../img/イラスト2_2.png";
import "../img/イラスト2.png";

const Main = () => {
  return (
    <div class="container">
      <div class="sky">
        <div class="text"></div>
        <div class="stars"></div>
        <div class="stars1"></div>
        <div class="stars2"></div>
        <div class="shooting-stars"></div>
      </div>
    </div>
  );
};

export default Main;
