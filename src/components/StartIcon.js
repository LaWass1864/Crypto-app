import React, { useState, useEffect } from "react";

const StartIcon = ({ coinId }) => {
  // on le fait dans le local storage
  const [like, setLike] = useState(false);

  useEffect(() => {
    // on vérifie si on a un like dans le local storage
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  });

  const idChecker = (id) => {
    // List de favoris dans le local storage
    let favList = null;
//  si le local storage existe
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }
    //  si on met des choses dedans mais que le otken n'est pas dans les favoris on doit l'ajouter dans le local storage
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId]
        setLike(true);
      }
      } else {
        window.localStorage.coinList = coinId;
        setLike(true);
      }
  };


  // Faire une ternaire si like ou met une start full sinon on laisse la star rempli
  return (
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );

  }
export default StartIcon;
