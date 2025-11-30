import React, { useState, useEffect } from "react";
import "../css/main.css"; // CSSファイルの読み込み
import Background from "./background.jsx";
import title1 from "../img/title3.png";
import title2 from "../img/title2.png";
import title3 from "../img/title.png";
import title4 from "../img/サムネイル4.png";
import neko from "../img/profile.jpg";

const Main = () => {
  return (
    <>
      <Background />
      <div className="Main">
        <div>
          <h1>★ポートフォリオ置き場（工事中）★</h1>
          <div className="about">
            <h1 id="about">自己紹介</h1>
            <div className="about-wrap">
              <div className="img-box">
                <img className="neko" src={neko} alt="" />
              </div>
              はじめまして。CNoです
              <br />
              ようやく開発案件に入ってpythonをお仕事で使えるようになりました。
              <br />
              SQLもお仕事で使ってます。サブクエリ使ってデータの取得くらいならできます。
              <br />
              <br />
              最近はセキュリティの勉強をTryHackMeで実施してます。
              <br />
              <br />
              自分の制作したものをここに置いておきます。
              <br />
              このサイトも格好良くしていきたいです。
              <br />
              <br />
              使えるもの
              <br />
              python,SQL,HTML/CSS,JavaScript,React
              <br />
              勉強中 <br />
              Linux,TypeScript,Node.js,AWS,Java,セキュリティ知識
            </div>
          </div>
          <div className="port-contain">
            <h1 id="port">制作物</h1>
            <div className="title">-アプリ-</div>
            <div className="port">
              <div className="item-content">
                <a href="https://cannon0074.github.io/verbose-garbanzo/">
                  <img className="port-item" src={title1} alt="" />
                </a>
                <div>
                  <h4>【High&Low】</h4>
                  <p>
                    記念すべき第1作目。
                    <br />
                    JavaScriptのDOM操作を理解するために作りました。
                    <br />
                    簡素な見た目とは裏腹にカードの定義、デッキの作成、カードを引いた時の挙動を全部書いているので大変でした。
                    <br />
                    HTML/CSS,JavaScriptで作成。音は出ません。
                  </p>
                </div>
              </div>
              <div className="item-content">
                <a href="https://nostargia98.vercel.app">
                  <img className="port-item" src={title2} alt="" />
                </a>
                <div>
                  <h4>【MIDI再生プレイヤー（仮）】</h4>
                  <p>
                    2作目。スクールの卒業制作で作成しました。（未完成）
                    <br />
                    Windows98風のデスクトップとIE5風のブラウザのデザインがこだわりです。
                    <br />
                    その他、ねこAPIと狐APIを使用したちょっとしたアプリあり。
                    <br />
                    刺さる人には刺さると思います。だから細かいところも実装したい。
                    <br />
                    HTML/CSS,Reactで作成。音が出ます。
                  </p>
                </div>
              </div>
              <div className="item-content">
                <a href="https://high-and-low-v2.vercel.app">
                  <img className="port-item" src={title3} alt="" />
                </a>
                <div>
                  <h4>【High&Low V2】</h4>
                  <p>
                    3作目。1作目のリメイク。
                    <br />
                    トランプAPIを使ってみたかったこと、ReactのUseState,UseEffect,UseRefの理解を深めたくて作りました。
                    <br />
                    デザインとゲーム内の動きを凝ったものにして、
                    <br />
                    背景の流れ星のCSSアニメーションはコードペンから持ってきました。
                    <br />
                    HTML/CSS,Reactで作成。音が出ます。
                  </p>
                </div>
              </div>
              <div className="item-content">
                <a href="https://music-play-wine.vercel.app">
                  <img className="port-item" src={title4} alt="" />
                </a>
                <div>
                  <h4>【音楽プレイヤー】</h4>
                  <p>
                    4作目。
                    <br />
                    UseRefを使って音楽プレイヤーが作れると聞いて作ってみました。趣味全開。
                    <br />
                    イラストと音楽は自作（耳コピ）です。
                    <br />
                    曲はぼっち・ざ・ろっくの「星座になれたら」。これ好きなんですよ！
                    <br />
                    ボーカル：No.7（NEUTRINO）
                    <br />
                    使用DAW：CakewalkByBandlab
                    <br />
                    midi打ち込み：Domino
                    <br />
                    HTML/CSS,Reactで作成。当然音が出ます。
                  </p>
                </div>
              </div>
            </div>
            <div className="title">-記事-</div>
            <div className="port">
              <div className="item-content">
                <h4>
                  <a
                    className="port-zenn"
                    href="https://zenn.dev/reasemi/articles/1abfa311e6633d"
                  >
                    【fetch,promise,useEffect編】
                  </a>
                </h4>
                <p>
                  JavaScriptのfetch,promiseと、
                  <br />
                  ReactのuseEffectについて初心者向け兼備忘録な記事です。
                  <br />
                  生徒間の勉強会用に作成しました。
                  <br />
                  これを見ればReactでfetchが使えるようになるはず…？
                  <br />
                  https://zenn.dev/p/reasemiに当時の皆で書いた他の回の記事もあるのでぜひ見てくださいね！
                  <br />
                </p>
              </div>
              <div className="item-content item-content-link">
                <a
                  href="https://zenn.dev/1010"
                  className="zenn-profile-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zennで他の記事も見る
                </a>
                <p>
                  最近はセキュリティの勉強のアウトプット記事を書いてます。
                  <br />
                  上記のボタンから私のzennプロフィールに飛べます。
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
