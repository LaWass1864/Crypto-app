import React, { useState } from "react";

const Table = ({ coinsData }) => {
  // nombre de ligne qu'on va afficher
  const [rangeNumber, SetRangeNumber] = useState(100);

  const [orderBy, setOrderBy] = useState("");
  //  element  tete du tableau
  const tableHeader = [
    "Prix",
    "MarketCap",
    "Volume",
    "1h",
    "1j",
    "1m",
    "6m",
    "1a",
    "ATH",
  ];

  return (
    <div className="table-container">
      <ul className="table-header">
        <div className="range-container">
          <span>
            Top{" "}
            {/* connexion de l'input avec le range avec la value={rangeNumber} */}
            <input
              type="text"
              value={rangeNumber}
              onChange={(e) => SetRangeNumber(e.target.value)}
            />
          </span>
          <input
            type="range"
            min="1"
            max="250"
            value={rangeNumber}
            onChange={(e) => SetRangeNumber(e.target.value)}
          />
        </div>
        {/* mapper les boutons de type radio*/}
        {tableHeader.map((el) => (
          <li key={el}>
            <input
              type="radio"
              value={el}
              name="header-el"
              id={el}
              defaultChecked={
                // pour trier dans l'autre sens c'est "reverse"
                el === orderBy || el === orderBy + "reverse" ? true : false
              }
              onClick={() => {
                if (orderBy === el) {
                  setOrderBy( el + "reverse")
                } else {
                setOrderBy(el) 
              }
              }}
            />
            {/*  on met les el */}
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {coinsData && coinsData.map((coin) => 
        <h1>{coin.symbol}</h1>)}
    </div>
  );
};

export default Table;
