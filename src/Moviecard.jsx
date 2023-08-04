import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export function Moviecard({ name, poster, summary, rating, id }) {
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="moviecard">
      <img className="pic" src={poster} />
      <div className="head">
        <h2>
          {name}-{id}
        </h2>
        <h2>❤️{rating}</h2>
      </div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Details
      </button>
      <IconButton
        onClick={() => {
          navigate("/moviedetials/" + id);
        }}
        color="primary"
        aria-label="add to shopping cart"
      >
        <InfoIcon />
      </IconButton>

      {show ? (
        <strong>
          <p>{summary}</p>
        </strong>
      ) : (
        <p></p>
      )}
    </div>
  );
}
