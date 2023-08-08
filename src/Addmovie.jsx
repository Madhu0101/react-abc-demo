// import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// const formValidationSchema = yup.object({
//   name: yup
//     .string()
//     .required("why notfill this name? 🙂")
//     .min(12, "Need a bigger name")
//     .max(20, "Too much name"),
//   poster: yup.string().required("why notfill this poster? 🙂"),

//   summary: yup
//     .string()

//     .required("why noyfill this summary? 🙂")
//     .min(20, "Need a bigger summary")
//     .max(30, "Too much summary"),

//   rating: yup
//     .string()

//     .required("why noyfill this rating? 🙂")
//     .min(1, "Need a bigger rating")
//     .max(2, "Too much rating"),
// });

export function Addmovie() {
  const navigate = useNavigate();
  const formValidationSchema = Yup.object().shape({
    Name: Yup.string().min(10),
    Poster: Yup.string().min(20),
    Summary: Yup.string().min(10),
    Rating: Yup.number().min(1).max(10),
    Trailer: Yup.string().min(20),
  });
  // const addMovie = () => {
  //   const newMovie = { name, poster, summary, rating };

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
        fetch("https://64c3962067cfdca3b65fef80.mockapi.io/movies/", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(() => navigate("/movies"));
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        type="text"
        placeholder="Movie name"
        required
      />
      {touched.name && errors.name ? errors.name : null}
      <TextField
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.poster}
        type="text"
        placeholder="Poster URL"
        required
      />
      {touched.poster && errors.poster ? errors.poster : null}
      <TextField
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.summary}
        type="text"
        placeholder="Movie summary"
        required
      />
      {touched.summary && errors.summary ? errors.summary : null}
      <TextField
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.rating}
        type="text"
        placeholder="Movie rating"
        required
      />
      {touched.rating && errors.rating ? errors.rating : null}
      <TextField
        name="trailer"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.trailer}
        type="text"
        placeholder="Movie trailer"
        required
      />
      {touched.trailer && errors.trailer ? errors.trailer : null}

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
