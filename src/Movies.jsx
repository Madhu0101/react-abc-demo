import { useEffect, useState } from "react";
import { Moviecard } from "./Moviecard";

export function Movies() {
  const [mvlist, setmvlist] = useState([]);
  useEffect(() => {
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setmvlist(data));
  }, []);

  const getMovie = () => {
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setmvlist(data));
  };
  useEffect(() => getMovie(), []);
  const deleteMovie = (id) => {
    console.log("Deleting...", id);
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => getMovie());
  };

  const editMovie = (id) => {
    fetch("https://64cc7dce2eafdcdc8519e155.mockapi.io/movies/" + id, {
      method: "PUT",
      body: JSON.stringify({
        newName,
        newPoster,
        newSummary,
        newTrailer,
        newRating,
      }),
    })
      .then((res) => res.json())
      // .then((data) => setmovie(data))
      .then(() => navigate("/movies/" + id))
      .then(() => getMovie());
  };
  return (
    <div>
      {mvlist.map((x, index) => (
        <Moviecard
          // clr
          name={x.name}
          poster={x.poster}
          summary={x.summary}
          rating={x.rating}
          key={index}
          id={x.id}
          deleteButton={
            <button onClick={() => deleteMovie(x.id)}>Delete</button>
          }
          editButton={
            <button onClick={() => editMovie(movie.id)}> Edit Movie </button>
          }
        />
      ))}
    </div>
  );
}
