import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../@types/types";

import { useAuth } from "../hooks/useAuth";
import auth from "../services/auth";
import dialogs, { showSuccessDialog } from "../ui/dialogs";
import patterns from "../validation/patterns";
import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = (data: LoginUser) => {
    auth
      .login(data)
      .then((res) => {
        showSuccessDialog("Login", "Logged in").then(() => {
          login(res.data, data);
          // send the user to home page
          navigate("/");
        });
      })
      .catch((e) => {
        dialogs.error("Login Error", e.response.data);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>();

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleContinueAsGuest = () => {
    // Handle logic for continuing as guest
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="login-container">
      <form className="login-form" noValidate onSubmit={handleSubmit(onLogin)}>
        {/* email */}
        <section className="form-section">
          <input
            className="input-field"
            placeholder="Email"
            autoCapitalize="true"
            autoCorrect="false"
            autoComplete="email"
            type="email"
            {...register("email", {
              required: "This field is mandatory",
              pattern: patterns.email,
            })}
          />
          {errors.email && <p className="error-message">{errors.email?.message}</p>}
        </section>

        {/* password */}
        <section className="form-section">
          <div className="password-container">
            <input
              className="input-field"
              autoComplete="current-password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "This field is mandatory",
                pattern: patterns.password,
              })}
            />
            <button
              className="toggle-password-button"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password?.message}</p>}
        </section>

        <button className="login-button">Login</button>

        <div className="login-buttons">
          <button className="signup-button" onClick={handleSignUp}>
            Don't have an account? Sign up here
          </button>
          <button className="guest-button" onClick={handleContinueAsGuest}>
            Continue as a guest
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
