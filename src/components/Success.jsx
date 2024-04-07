import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
      <div
        style={{ textAlign: "center", maxWidth: "550px" }}
        className="payment-card">
        <div
          style={{
            borderRadius: "50%",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto 20px", // Added margin-bottom for spacing
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Center the icon vertically
          }}>
          <i className="checkmark pi" style={{ fontSize: "3rem", color: "green" }}>
            ✓
          </i>{" "}
          {/* Adjusted icon size and color */}
        </div>
        <h1 className="pch" style={{ color: "green" }}>
          Success
        </h1>{" "}
        {/* Updated heading to indicate success */}
        <div style={{ width: "100%" }}>
          <p className="pcp" style={{ margin: 0 }}>
            We received your purchase request
            <br /> <span>We'll be in touch shortly!</span>
          </p>
        </div>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          {" "}
          {/* Changed to Link for navigation */}
          <button className="btn">
            {" "}
            {/* Changed button to Link */}
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
