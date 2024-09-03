import React, { useState, useEffect } from "react";
import "../css/main.css"; // CSSファイルの読み込み

const Main = () => {
  const [bgColor, setBgColor] = useState("rgb(255, 165, 80)"); // 初期の背景色

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // スクロールのY座標を取得
      const windowHeight = window.innerHeight; // ウィンドウの高さを取得
      const docHeight = document.documentElement.scrollHeight; // ドキュメントの高さを取得

      const scrollFraction = scrollY / (docHeight - windowHeight); // スクロールの割合を計算

      // グラデーションの色を計算
      const red = Math.floor(255 - scrollFraction * 255);
      const green = Math.floor(165 - scrollFraction * 200);
      const blue = Math.floor(80 - scrollFraction * 10);

      setBgColor(`rgb(${red}, ${green}, ${blue})`); // 背景色を更新
    };

    window.addEventListener("scroll", handleScroll); // スクロールイベントのリスナーを設定

    return () => {
      window.removeEventListener("scroll", handleScroll); // クリーンアップ：イベントリスナーの解除
    };
  }, []);

  return (
    <div className="Main" style={{ backgroundColor: bgColor }}>
      <h1>スクロールすると背景が変わります！</h1>
      <p>スクロールしてみてください。</p>
      <div style={{ height: "200vh" }}>
        {" "}
        {/* スクロールできるように高さを設定 */}
        このテキストが表示されている間、背景が変わります。
      </div>
    </div>
  );
};

export default Main;
