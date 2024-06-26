import React from "react";
import { Link } from "react-router-dom";

const CORSWarn = ({ setIsModalOpen }) => {
  const handleCloseModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("displayCORSModal", "false");
  };

  return (
    <div className="modal-cont ">
      <article>
        <h1 style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>
          This project uses REAL world data from SWIGGY's API for which you have
          to enable CORS extension
        </h1>
        <p style={{ color: "black", fontSize: "17px", fontWeight: "bold" }}>
          CORS is a browser safety feature to prevent us from making
          cross-origin requests. Read more about it{" "}
          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
            target="_blank"
            rel="noopener noreferrer">
            here
          </Link>
        </p>
        <p style={{ color: "black", fontSize: "17px", fontWeight: "normal" }}>
          i.e from www.abc.com to www.xyz.com
        </p>
        <ol style={{ color: "black", fontSize: "17px", fontWeight: "normal" }}>
          <li>1️⃣ Visit the given link below.</li>
          <li>2️⃣ Add the Extension to your browser.</li>
          <li>3️⃣ Toggle it to ON, i.e. Enable CORS.</li>
          <li>4️⃣ Refresh this page and start surfing.</li>
        </ol>
        <p>If you already use it, you are Good to GO...</p>
        <div className="modal-div">
          <button onClick={handleCloseModal} className="modal-btn">
            Close
          </button>
          <Link
            to="https://chromewebstore.google.com/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino"
            target="_blank"
            rel="noopener noreferrer">
            <button className="modal-btn">Add Extension</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default CORSWarn;
