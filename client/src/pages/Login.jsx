import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const validateInputs = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating that the inputs are valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      // Perform login logic here (e.g., API call)
      console.log("Login successful!");

      const userData = await fetch("http://localhost:5000/api/v1/user/login", {
        method: "POST",
        headers: {
          // 'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (userData) {
        console.log("userData");
      } else {
        console.log("error!");
      }
      // notify("Login successful!", "success");
    } else {
      // notify("Login failed. Please fix the errors.", "error");
      console.log("Login failed. Please fix the errors.");
    }
  };

  // for Desktop

  return (
    <>
      <div className=" ">
        <div className="">
          <div className="input-divs">
            <label>Email address </label>
            <input
              type="text"
              name="email"
              className="w-full"
              value={email}
              onChange={handleInputChange}
              placeholder="Your email"
            />
            <div>
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          <div className="input-divs">
            <label>Password</label>
            <div className="relative w-90%">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                className="w-full"
                value={password}
                onChange={handleInputChange}
                placeholder="Password"
              />
              <div
                className="absolute right-0 top-0 h-full flex items-center mr-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={20} />
                ) : (
                  <AiFillEye size={20} />
                )}
              </div>
            </div>
            <div>
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
          </div>

          <button
            className="mt-5 w-full bg-black text-white p-3 mb-5 rounded-lg hover:bg-gray-800"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
