import React, { useState } from "react";
import TableLine from "./TableLine";
import ToTop from "./ToTop";

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
    "1s",
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
          <ToTop />
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
                  setOrderBy(el + "reverse");
                } else {
                  setOrderBy(el);
                }
              }}
            />
            {/*  on met les el */}
            <label htmlFor={el}>{el}</label>
          </li>
        ))}
      </ul>
      {/* est-ce que coinsData existe */}
      {coinsData &&
        coinsData
          .slice(0, rangeNumber)
          .sort((a, b) => {
            switch (orderBy) {
              case "Prix":
                return b.current_price - a.current_price;
              case "Prixreverse":
                return a.current_price - b.current_price;
                case "MarketCap":
                return b.current_price - a.current_price;
              case "MarketCapreverse":
                return a.current_price - b.current_price;
                case "Volume":
                return b.current_price - a.current_price;
              case "Volumereverse":
                return a.current_price - b.current_price;
                case "1h":
                return b.current_price - a.current_price;
              case "1hreverse":
                return a.current_price - b.current_price;
                case "1j":
                return b.current_price - a.current_price;
              case "1jreverse":
                return a.current_price - b.current_price;
                case "1s":
                return b.current_price - a.current_price;
              case "1sreverse":
                return a.current_price - b.current_price;
                case "1m":
                return b.current_price - a.current_price;
              case "1mreverse":
                return a.current_price - b.current_price;
                case "6m":
                return b.current_price - a.current_price;
              case "6mreverse":
                return a.current_price - b.current_price;
                case "1a":
                return b.current_price - a.current_price;
              case "1areverse":
                return a.current_price - b.current_price;
                case "ATH":
                return b.current_price - a.current_price;
              case "ATHreverse":
                return a.current_price - b.current_price;
                default: 
                null;
            }
          })
          .map((coin, index) => <TableLine coin={coin} index={index} />)}
    </div>
  );
};

export default Table;
