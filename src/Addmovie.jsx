// import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  name: yup
    .string()
    .required("why notfill this name? 🙂")
    .min(12, "Need a bigger name")
    .max(20, "Too much name"),
  poster: yup.string().required("why notfill this poster? 🙂"),

  summary: yup
    .string()

    .required("why noyfill this summary? 🙂")
    .min(20, "Need a bigger summary")
    .max(30, "Too much summary"),

  rating: yup
    .string()

    .required("why noyfill this rating? 🙂")
    .min(1, "Need a bigger rating")
    .max(2, "Too much rating"),
});

export function Addmovie() {
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

  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        summary: "",
        rating: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("The form values: ", values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      {/* <div className="App"> */}
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        placeholder="name"
      />

      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        placeholder="poster"
      />
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        placeholder="name"
      />

      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        placeholder="rating"
      />

      {/* <Button
        // onClick={() => addMovie()}
        // <Button onClick={addMovie()} -> error
        // <Button onClick={() => addMovie} -> error
        // <Button onClick={addMovie}
        variant="contained"
      > */}
      {/* Add movie */}
      <Button type="submit"> Add movie</Button>

      {/* {addMovie} */}
    </form>
    // </div>
  );
}
