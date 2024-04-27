import logo from "../Images/logo.png";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const lightTheme = useSelector((state) => state.themeKey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const nav = useNavigate();

  useEffect(() => {
    if (!userData) {
      // User not authenticated, redirect to login
      console.log("User not Authenticated");
      nav("/");
    }
  }, [userData, nav]);

  if (!userData) {
    // Return loading spinner or message while waiting for authentication check
    return <div>Loading...</div>;
  }

  return (
    <div className={"welcome-container" + (lightTheme ? "" : " dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="Logo"
        className="welcome-logo"
      />
      <b>Hi , {userData.data.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms.</p>
    </div>
  );
}
