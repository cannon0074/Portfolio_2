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
          <div className="title">-アプリ-</div>
          <div className="port">
            <div className="item-content">
              <a href="https://cannon0074.github.io/verbose-garbanzo/">
                <img className="port-item" src={title1} alt="" />
              </a>
              <div>
                【High&Low】
                <br />
                記念すべき第1作目。
                <br />
                デザインをごまかすためにいらすとやさんの素材を使用しています。
                <br />
                HTML/CSS,JavaScriptで作成。
              </div>
            </div>
            <div className="item-content">
              <a href="https://nostargia98.vercel.app">
                <img className="port-item" src={title2} alt="" />
              </a>
              <div>
                【MIDI再生プレイヤー（仮）】
                <br />
                2作目。プログラミングスクールの卒業制作で作成しました。
                <br />
                Windows98風のデスクトップとIE5風のブラウザを再現しています。（未完成）
                <br />
                HTML/CSS,Reactで作成。音が出ます。
              </div>
            </div>
            <div className="item-content">
              <a href="https://high-and-low-v2.vercel.app">
                <img className="port-item" src={title3} alt="" />
              </a>
              <div>
                【High&Low V2】
                <br />
                3作目。
                <br />
                1作目のリメイク。
                <br />
                デザインとゲーム内の動きを凝ったものにして、背景画像はコードペンから持ってきました。
                <br />
                音が出ます。 <br />
                HTML/CSS,Reactで作成。
              </div>
            </div>
          </div>
          <div className="title">-記事-</div>
          <div className="port">
            <div className="item-content">
              <a
                className="port-zenn"
                href="https://zenn.dev/reasemi/articles/1abfa311e6633d"
              >
                ReaSemi(Vol.4) 【fetch,promise,useEffect編】
              </a>
              <div>
                JavaScriptのfetch,promiseと、
                <br />
                ReactのuseEffectについて初心者向けに書いた記事です
                <br />
                生徒間の勉強会用に作成しました。
                <br />
                これを見ればReactでfetchが使えるようになるはず…？
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
