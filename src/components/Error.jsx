import { useRouteError } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Err from "../assets/Err.png";
import { Link } from "react-router-dom";

function Error() {
  const {status, statusText} = useRouteError();
  console.log(status, statusText);

  return (
    <div className="error-page">
      <img src={Err} alt="error" />
      <h2>Please try again later.</h2>
      <h4>
        Error Code: {status}, {statusText}
      </h4>
      <button>
        <Link to="/">Back To Home</Link>
      </button>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
}

export default Error;
