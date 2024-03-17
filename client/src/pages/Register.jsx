import React, { useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirm_password") {
      setConfirmPassword(value);
    }
  };
  return (
    // for Desktop
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
            <label>Password:</label>
            <div className="relative w-90%">
              <input
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                className="w-full"
                value={password}
                onChange={handleInputChange}
                placeholder="must be 8 characters"
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
          </div>
          <div className="input-divs">
            <label>Confirm password</label>
            <div className="relative w-90%">
              <input
                type={`${showConfirmPassword ? "text" : "password"}`}
                name="confirm_password"
                className="w-full"
                value={confirmPassword}
                onChange={handleInputChange}
                placeholder="repeat password"
              />
              <div
                className="absolute right-0 top-0 h-full flex items-center mr-2"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {confirmPassword ? (
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
            // onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
