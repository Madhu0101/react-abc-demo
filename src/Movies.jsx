import { useEffect, useState } from "react";
import { Moviecard } from "./Moviecard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Movies({}) {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [summary, setsummary] = useState("summary");
  const [rating, setrating] = useState("rating");
  const [mvlist, setmvlist] = useState([]);
  useEffect(() => {
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setmvlist(data));
  }, []);

  return (
    <div className="App">
      <TextField
        label="name"
        variant="outlined"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />
      {name}

      <TextField
        label="poster"
        variant="outlined"
        onChange={(event) => {
          setposter(event.target.value);
        }}
      />
      {poster}
      <TextField
        label="summary"
        variant="outlined"
        onChange={(event) => {
          setsummary(event.target.value);
        }}
      />
      {summary}

      <TextField
        label="rating"
        variant="outlined"
        onChange={(event) => {
          setrating(event.target.value);
        }}
      />
      {rating}

      <Button variant="contained">Add movie</Button>
      <div className="Movies"></div>
      {mvlist.map((x, index) => (
        <Moviecard
          // clr
          name={x.name}
          poster={x.poster}
          summary={x.summary}
          rating={x.rating}
          key={index}
          id={x.id}
        />
      ))}
    </div>
  );
}
