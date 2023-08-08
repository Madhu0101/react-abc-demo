import { useParams } from "react-router-dom";
// import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useEffect } from "react";
export function Moviedetails() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [movie, setmvlist] = useState([]);
  useEffect(() => {
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies/" + id)
      .then((res) => res.json())
      .then((data) => setmvlist(data));
  }, []);

  // console.log(mvlist);
  // const movie = mvlist[id];

  return (
    <div className="moviecard">
      <iframe
        width="702"
        height="395"
        src={movie.trailer}
        title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="head">
        <h2>{movie.name}</h2>
        <h2>❤️{movie.rating}</h2>
      </div>

      <p>{movie.summary}</p>
      <Button onClick={() => navigate(-1)}>Last Screen</Button>
    </div>
  );
}
