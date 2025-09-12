import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.svg";

export default function Intro() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/chooseprofile"); // 👈
    }, 5000);

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, [navigate]);

  return (
    <div className="intro-container">
      <img src={logo} alt="Growing" className="growing-image" />
    </div>
  );
}
