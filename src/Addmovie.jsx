import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function Addmovie() {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [summary, setsummary] = useState("summary");
  const [rating, setrating] = useState("rating");
  const navigate = useNavigate();
  const addMovie = () => {
    const newMovie = { name, poster, summary, rating };
    fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies/", {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => navigate("/movies"));
  };
  return (
    <div className="App">
      <TextField
        label="name"
        variant="outlined"
        onChange={(event) => {
          setname(event.target.value);
        }}
      />

      <TextField
        label="poster"
        variant="outlined"
        onChange={(event) => {
          setposter(event.target.value);
        }}
      />
      <TextField
        label="summary"
        variant="outlined"
        onChange={(event) => {
          setsummary(event.target.value);
        }}
      />

      <TextField
        label="rating"
        variant="outlined"
        onChange={(event) => {
          setrating(event.target.value);
        }}
      />
      <Button
        onClick={() => addMovie()}
        // <Button onClick={addMovie()} -> error
        // <Button onClick={() => addMovie} -> error
        // <Button onClick={addMovie}
        variant="contained"
      >
        Add movie
      </Button>

      {addMovie}
    </div>
  );
}
