import { useParams } from "react-router-dom";

export function Moviedetails({ mvlist }) {
  const { id } = useParams();
  // console.log(mvlist);
  const movie = mvlist[id];

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
    </div>
  );
}
