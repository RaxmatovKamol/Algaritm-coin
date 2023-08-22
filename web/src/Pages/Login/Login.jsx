import React from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import "./Login.css";

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const value = Object.fromEntries(formData);

    const config = {
      method: "POST",
      url: "http://localhost:8080/login",

      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(value),
    };

    axios(config)
      .then((res) => {
        const { message, variant, token } = res?.data;
        enqueueSnackbar(message, { variant });
        localStorage.setItem("token", token);
        window.location.reload();
        window.location.href = "/";
        e.target.reset();
      })
      .catch((err) => {
        const { message, variant } = err?.response?.data;
        enqueueSnackbar(message, { variant });
        e.target.reset();
      });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Username</span>
          <input
            type="text"
            name="username"
            required
            autoComplete="off"
            autoFocus
            placeholder="Username"
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
          />
        </label>
        <label>
          <input type="submit" value="Login" />
        </label>
      </form>
    </div>
  );
};
