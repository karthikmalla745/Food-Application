import React from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{ background: "gray", padding: "30px", display: "flex" }}>
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "5px 10px",
          margin: "0px 40px"
        }}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        style={{
          background: "blue",
          color: "white",
          padding: "5px 10px",
          margin: "0px 40px"
        }}
        onClick={() => navigate("/list")}
      >
        Food List
      </button>
    </div>
  );
}

export default Navbar;
