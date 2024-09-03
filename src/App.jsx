import { useState } from "react";
import Header from "./Components/header.jsx";
import Main from "./Components/main.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
