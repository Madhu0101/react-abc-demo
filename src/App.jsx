import "./App.css";

export default function App() {
  const profiles = [
    {
      Name: "sid",
      image:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      Name: "satya",
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
    },
    {
      Name: "madhu",
      image:
        "https://xyzshayari.com/wp-content/uploads/2022/05/cute-girl-dp.png"
    }
  ];
  return (
    <div className="App">
      {profiles.map((profile) => (
        <Profile Name={profile.Name} image={profile.image} />
      ))}
    </div>
  );
}
function Profile({ Name, image }) {
  return (
    <div className="profile">
      <img className="pic" src={image} />
      <h2>hello {Name}</h2>
    </div>
  );
}
