import { Link } from "react-router-dom";

const CORSWarn = ({ setIsModalOpen }) => {
  return (
    <div className="modal-cont">
      <article>
        <h1>
          This project uses REAL world data from SWIGGY's API for which you have
          to enable CORS extension
        </h1>
        <p>
          CORS is browser safety feature to prevent us from making cross-origin
          request. Read more about it{" "}
          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
            target="_blank"
            rel="noopener noreferrer">
            here
                  </Link>
                  
        </p>
        <p>i.e from www.abc.com to www.xyz.com</p>
        <ol>
          <li>Visit below given link.</li>
          <li>Add Extension to your BROWSER</li>
          <li>Toggle it to ON, i.e Enable CORS</li>
          <li>Refresh this page and start surfing</li>
              </ol>
              <p>If you already use it, you are Good to GO...</p>
        <div className="modal-div">
          <button onClick={() => setIsModalOpen(false)} className="modal-btn">
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
