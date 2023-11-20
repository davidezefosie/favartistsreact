import "./App.css";
import { characters } from "./MarvelData";

function App() {
  return (
    <div className="mainBody">
      <div className="topHeader">
        <h1 className="header">FAVOURITE ARTISTS</h1>
        <input placeholder="Search an artist" className="topInput" />
      </div>
      <div className="cardBody">
        {characters.map((data, index) => (
          <div key={index} className="card">
            <div className="main">
              <img className="avatarImage" src={data.img1} alt={data.alias} />
              <h2>{data.alias}</h2>
              <p className="description">
                {data?.about}
              </p>
              <div className="avatarInfo">
                <div className="price">
                  <ins>Genre:</ins>
                  <p>{data.genre}</p>
                </div>
                <div className="duration">
                  <ins>Nationality:</ins>
                  <p>{data.nationality}</p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;