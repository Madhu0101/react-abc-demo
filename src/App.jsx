// import "./App.css";

// export default function App() {
//   const profiles = [
// {
//   Name: "sid",
//   image:
// "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// },
// {
//   Name: "satya",
//   image:
// "https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
// },
// {
//   Name: "madhu",
//   image:
// "https://xyzshayari.com/wp-content/uploads/2022/05/cute-girl-dp.png"
// }
//   ];
//   return (
// <div className="App">
//   {profiles.map((profile) => (
// <Profile Name={profile.Name} image={profile.image} />
//   ))}
// </div>
//   );
// }
// function Profile({ Name, image }) {
//   return (
// <div className="profile">
//   <img className="pic" src={image} />
//   <h2>hello {Name}</h2>
// </div>
//   );
// }
//profile with click like
// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   const profiles = [
// {
//   Name: "sid",
//   image:
// "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
// },
// {
//   Name: "satya",
//   image:
// "https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
// },
// {
//   Name: "madhu",
//   image:
// "https://xyzshayari.com/wp-content/uploads/2022/05/cute-girl-dp.png"
// }
//   ];
//   return (
// <div className="App">
//   {profiles.map((profile) => (
// <Profile Name={profile.Name} image={profile.image} />
//   ))}
// </div>
//   );
// }
// function Profile({ Name, image }) {
//   return (
// <div className="profile">
//   <img className="pic" src={image} />
//   <h2>hello {Name}</h2>
//   <Counter />
// </div>
//   );
// }

// function Counter() {
//   // let like =10;
//   const [like, setLike] =useState(0);
//   const [unlike, setDislike] =useState(0);

//   return (
// <div>
//   <button
//   onClick={() =>{
// setLike(like+1)
//   }}
//   >
// 👍{like}
//   </button>
// <button
// onClick={() =>{
//   setDislike(unlike+1)
// }}
// >
// 👎{unlike}
// </button>
//  {like-unlike>=10?<strong>awesome</strong> : <p></p>}

//  <progress id="file" max="100" value="70"> 70% </progress>

// </div>
//   )
// }

//color text
// import { useState } from "react";
// import "./App.css";

// export default function App() {
//   return (
// <div className="App">
//  <ColorGame />
// </div>
//   );
// }
// function ColorGame () {
//   const [bg,setbg] =useState("pink");
//   // const [styles] =useState(0);
//   const styles = {
// background: bg,
//   };
//   const colorList=["pink", "yellow","black"]
// return (
//   <div>
// <input
// style={styles}
// onChange={(event) => setbg(event.target.value)}
// type="text"
// placeholder="please a color"
// value={bg}
// />
// <button>{bg}</button>
// {/* <button>add color</button> */}
// </div>
//  )
// }

//colorgame with fullscript
// import { useState } from "react";
// import "./App.css";

// export default function App() {

//   return (
// <div className="App">
//  <ColorGame />
//  <Colorbox />
// </div>
//   );
// }

// function ColorGame () {
//   const [bg,setbg] =useState("pink");
//   // const [styles] =useState(0);
//   const styles = {
// background: bg,
//   };
//   const colorList=["pink", "yellow","black"];
// return (
//   <div>
// <input
// style={styles}
// onChange={(event) => setbg(event.target.value)}
// type="text"
// placeholder="please a color"
// value={bg}
// />
// <button>{bg}</button>
// {ColorList.map((color) => (
//   <Colorbar clr ={color} />
// ))}
// </div>
//  );
// }
//  function Colorbox({clr}) {
//   const styles = {
// hieght:"25px",
// width:"250px",
// background: clr
//   }
//  }

//movie list
// import "./App.css";
// import { Moviecard } from "./Moviecard";

// export default function App() {
//   const Movies = [
// {
//   name: "Vikram",
//   poster:
// "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
//   rating: 8.4,
//   summary:
// "Members of a black ops team must track and eliminate a gang of masked murderers.",
// },
// {
//   name: "RRR",
//   poster:
// "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
//   rating: 8.8,
//   summary:
// "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
// },
// {
//   name: "Iron man 2",
//   poster:
// "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//   rating: 7,
//   summary:
// "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
// },
// {
//   name: "No Country for Old Men",
//   poster:
// "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//   rating: 8.1,
//   summary:
// "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
// },
// {
//   name: "Jai Bhim",
//   poster:
// "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//   summary:
// "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//   rating: 8.8,
// },
// {
//   name: "The Avengers",
//   rating: 8,
//   summary:
// "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//   poster:
// "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
// },
// {
//   name: "Interstellar",
//   poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//   rating: 8.6,
//   summary:
// "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
// },
// {
//   name: "Baahubali",
//   poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//   rating: 8,
//   summary:
// "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
// },
// {
//   name: "Ratatouille",
//   poster:
// "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//   rating: 8,
//   summary:
// "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
// },
// {
//   name: "PS2",
//   poster:
// "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
//   summary:
// "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
//   rating: 8,
// },
// {
//   name: "Thor: Ragnarok",
//   poster:
// "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
//   summary:
// "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
//   rating: 8.8,
// },
//   ];
//   return (
// <div className="App">
//   {Movies.map((x) => (
// <Moviecard
//   name={x.name}
//   poster={x.poster}
//   summary={x.summary}
//   rating={x.rating}
// />
//   ))}
// </div>
//   );
// }

//colorgame without the colorbox and color game

// import { useState } from "react";
// import "./App.css";
// import { ColorGame } from "./ColorGame";

// export default function App(){
//   return (
// <div className="App">
//  <ColorGame />
// </div>
//   );
// }

//to set the router

// import "./App.css";
// import { ColorGame } from "./ColorGame";

// export default function App() {

//   return (
// <div className="App">

// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="Color-game" element={<ColorGame/>} />
//   </Routes>
//  {/* <ColorGame /> */}
// </div>
//   );
// }
// function Home() {
//   return (
// <div>
//   <h1>Home</h1>
// </div>
//   )
// }

//movie with add tag

import "./App.css";
import { useState } from "react";
import { Moviecard } from "./Moviecard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { Routes, Route, Link, useParams } from "react-router-dom";
import { ColorGame } from "./ColorGame";

export function Movies() {
  const [name, setname] = useState("name");
  const [poster, setposter] = useState("poster");
  const [summary, setsummary] = useState("summary");
  const [rating, setrating] = useState("rating");
  const Initial_movie_list = [
    {
      name: "Vikram",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
        "Members of a black ops team must track and eliminate a gang of masked murderers.",
    },
    {
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    },
    {
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
    },
    {
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    },
    {
      name: "PS2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      summary:
        "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      rating: 8,
    },
    {
      name: "Thor: Ragnarok",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      rating: 8.8,
    },
  ];
  const [mvlist, setmvlist] = useState(Initial_movie_list);
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

      <Button
        variant="contained"
        onClick={(event) =>
          setmvlist([
            ...mvlist,
            {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            },
          ])
        }
      >
        Add movie
      </Button>
      <div className="Movies"></div>
      {mvlist.map((x, index) => (
        <Moviecard
          // clr
          name={x.name}
          poster={x.poster}
          summary={x.summary}
          rating={x.rating}
          key={index}
          id={index}
        />
      ))}
    </div>
  );
}

export default function App() {

 

    
    <div className="appdetial">
      <h1>Welcome to React Router!</h1>
      <nav>
        <Link to="/movies">Movies</Link>
      </nav>
      <nav>
        <Link to="/colorgame">ColorGame</Link>
      </nav>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
        <Route path="/colorgame" element={<ColorGame />} />
        <Route path="/moviedetials/:id" element={<Moviedetails />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/movies/id" element={<Movies />} /> */}
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>hello MADHU</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you're looking for does not exist.</p>
    </div>
  );
}

function Moviedetails() {
  const { id } = useParams();
  return <h1>movie details - {id}</h1>;
}
