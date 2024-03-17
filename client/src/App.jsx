import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { display } from "@mui/system";

import "./index.css";

import Login from "./pages/Login";
import Signup from "./pages/Register";
import Home from "./pages/Home";
import WelcomeUser from "./pages/WelcomeUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/auth" element={<WelcomeUser />}>
          {" "}
        </Route>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
