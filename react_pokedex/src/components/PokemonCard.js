import React, { useState } from "react";
import "./PokemonCard.css";
import pokeball from "../images/pokeball.png";
import Modal from "./Modal";
function PokemonCard({
  id,
  name,
  image,
  type,
  weight,
  height,
  stats,
  statsName,
}) {
  const [isShown, setIsShown] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function modalHandler() {
    setModalIsOpen(true);
  }
  function CloseModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="container">
      {isShown && (
        <div className="show">
          <button onClick={modalHandler} className="stat-container-title">
            <img src={image} alt={name} className="image-title" />
            <p style={{ width: "180px", color: "black" }}>No. {id}</p>
            <p>{name}</p>
            <img src={pokeball} alt="pokeball" className="pokeball-title" />
          </button>
          <img src={image} alt={name}></img>
          <div style={{ display: "flex", width: "100%" }}>
            <div
              style={{ background: "#dbdbd9", textAlign: "center" }}
              className="stats-left"
            >
              <p>Type</p>
              <p>Height</p>
              <p>Weight</p>
            </div>
            <div style={{ background: "#ffffff" }} className="stats-right">
              <p>{type}</p>
              <p>{height} m</p>
              <p>{weight} lbs</p>
            </div>
          </div>
          <div className="base-stats">
            <div>
              {statsName.map((stats) => {
                <p className="stats">{stats}</p>;
              })}
            </div>
            <div>
              {stats.map((stats) => {
                <p className="stats">{stats}</p>;
              })}
            </div>
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "70px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px" }}
        />
      </div>
      {modalIsOpen && (
        <Modal
          id={id}
          name={name}
          image={image}
          height={height}
          weight={weight}
          stats={stats}
          statsName={statsName}
          type={type}
          onClick={CloseModalHandler}
        />
      )}
    </div>
  );
}

export default PokemonCard;

// 43:41
