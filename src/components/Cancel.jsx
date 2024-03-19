import React from "react";
import { Link } from "react-router-dom";

const FailurePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
              alignItems: "center",
        margin: "40px"
      }}>
      <div style={{ textAlign: "center" }} className="payment-card">
        <div
          style={{
            borderRadius: "200px",
            height: "200px",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}>
          <i className="failure-icon">❌</i> {/* Changed to failure icon */}
        </div>
        <h1 className="pch" style={{ color: "red" }}>Failure</h1>{" "}
        {/* Updated heading to indicate failure */}
        <div style={{ width: "100%" }}>
          <p className="pcp" style={{ margin: 0 }}>
            Something went wrong with your purchase
            <br /> <span>Please try again later.</span>
          </p>
        </div>
        <Link to={"/"}>
          <button className="btn">Back to Homepage</button>
        </Link>
      </div>
    </div>
  );
};

export default FailurePage;
