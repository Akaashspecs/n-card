import { useState } from "react";

import "./App.css";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import Khat from "./khat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/khat" element={<Khat />} />
      </Routes>
    </>
  );
}

export default App;
