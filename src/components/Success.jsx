import React from 'react'
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Success = () => {

const dispatch = useDispatch();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px",
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
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <div style={{ width: "100%" }}>
          <p style={{ margin: 0 }}>
            We received your purchase request
            <br /> <span>we'll be in touch shortly!</span>
          </p>
        </div>
        <Link to={"/"}>
          <button onClick={() => dispatch(clearCart())} className="btn">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Success