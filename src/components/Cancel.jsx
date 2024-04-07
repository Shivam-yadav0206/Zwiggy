import React from "react";
import { Link } from "react-router-dom";

const FailurePage = () => {
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
          <i
            className="failure-icon pi"
            style={{ fontSize: "3rem", color: "red" }}>
            ❌
          </i>{" "}
          {/* Adjusted icon size and color */}
        </div>
        <h1 className="pch" style={{ color: "red" }}>
          Failure
        </h1>{" "}
        {/* Updated heading to indicate failure */}
        <div style={{ width: "100%" }}>
          <p className="pcp" style={{ margin: 0 }}>
            Something went wrong with your purchase
            <br /> <span>Please try again later.</span>
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

export default FailurePage;
