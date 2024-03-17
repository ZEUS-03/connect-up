import React, { useState } from "react";
import { TbSparkles } from "react-icons/tb";

import Login from "./Login";
import Register from "./Register";

function WelcomeUser() {
  const [authStatus, setAuthStatus] = useState("signup");
  return (
    <div className="app image-container font-custom">
      <div className="login-container">
        <div className="m-2">
          <TbSparkles size={32} />
        </div>

        <h1 className="font-heading font-extrabold text-center text-3xl mt-6 mb-10">
          Connect up!
        </h1>
        <div
          className={`flex w-full mb-7 mt-5 font-semibold text-sm bg-[#edeeef] rounded-lg p-1 `}
        >
          <button
            className={`w-full ${
              authStatus == "signup" ? "bg-white" : "bg-[#edeeef]"
            } rounded-lg p-1`}
            onClick={() => {
              setAuthStatus("signup");
            }}
          >
            Sign up
          </button>
          <button
            className={`w-full ${
              authStatus == "register" ? "bg-white" : "bg-[#edeeef]"
            } rounded-lg p-1`}
            onClick={() => {
              setAuthStatus("register");
            }}
          >
            Register
          </button>
        </div>
        {authStatus == "signup" ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default WelcomeUser;
