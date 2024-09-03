import React, { useState, useEffect } from "react";
import "../css/main.css"; // CSSファイルの読み込み
import Background from "./background.jsx";
import title1 from "../img/title3.png";
import title2 from "../img/title2.png";
import title3 from "../img/title.png";

const Main = () => {
  return (
    <>
      <Background />
      <div className="Main">
        <div>
          <h1>ポートフォリオ置き場（工事中）</h1>
          <div className="port">
            <div className="item-content">
              <a href="https://cannon0074.github.io/verbose-garbanzo/">
                <img className="port-item" src={title1} alt="" />
              </a>
              <div>
                記念すべき第1作目。
                <br />
                デザインをごまかすためにいらすとやさんの素材を使用しています。
              </div>
            </div>
            <div className="item-content">
              <a href="https://nostargia98.vercel.app">
                <img className="port-item" src={title2} alt="" />
              </a>
              <div>
                第2作目。
                <br />
                プログラミングスクールの卒業制作で作成しました。
                <br />
                Windows98風のデスクトップとIE5風のブラウザを再現しています。（未完成）
              </div>
            </div>

            <div className="item-content">
              <a href="https://high-and-low-v2.vercel.app">
                <img className="port-item" src={title3} alt="" />
              </a>
              <div>
                第3作目。
                <br />
                1作目のリメイク。
                <br />
                デザインとゲーム内の動きを凝ったものにして、背景画像はコードペンから持ってきました。
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
