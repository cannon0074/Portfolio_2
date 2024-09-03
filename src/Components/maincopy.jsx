import React, { useState, useEffect } from "react";
import "../css/main.css"; // CSSファイルの読み込み

const Main = () => {
  const [bgPosition, setBgPosition] = useState("0% 0%"); // 初期の背景位置

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // 縦スクロールの位置を取得
      const docHeight = document.documentElement.scrollHeight; // ドキュメントの高さを取得
      const windowHeight = window.innerHeight; // ウィンドウの高さを取得

      const scrollFraction = scrollY / (docHeight - windowHeight); // 縦スクロールの割合を計算

      const position = `${scrollFraction * 100}% 0%`; // 横方向の位置を計算
      setBgPosition(position); // 背景位置を更新
    };

    window.addEventListener("scroll", handleScroll); // スクロールイベントのリスナーを設定

    return () => {
      window.removeEventListener("scroll", handleScroll); // クリーンアップ：イベントリスナーの解除
    };
  }, []);

  return (
    <div className="main" style={{ backgroundPosition: bgPosition }}>
      <h1>縦スクロールで横に背景が動きます！</h1>
      <div style={{ height: "200vh" }}>
        {/* 縦にスクロール可能な高さ */}
        画面を縦にスクロールすると背景が横に動きます。
      </div>
    </div>
  );
};

export default Main;
