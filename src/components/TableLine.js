import React from "react";
import PercentChange from './PercentChange';

const TableLine = ({ coin, index }) => {
    const priceFormater = (num) => {
        if (Math.round(num).toString().length < 4) {
          return new Intl.NumberFormat("us-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 7,
          }).format(num);
        } else {
          return num;
        }
      };
    //  retirer les 3 derniers chiffres 
      const mktCapFormater = (num) => {
        let newNum = String(num).split("").
        slice(0, -6);

        return Number(newNum.join(""));
      } 

  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} alt="logo" height="20" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name
                .toLowerCase()
                .replace(" ", "-")
                .replace(" ", "-")
                .replace("", "-")
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./assets/info-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap"> {mktCapFormater(coin.market_cap).toLocaleString()} Md$</p>
      {/* toLocaleString = separateur de millier */}
      <p className="volume">{coin.total_volume.toLocaleString()}  $ </p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
      <PercentChange percent={coin.market_cap_change_percentage_24h} />
      <PercentChange percent={coin.price_change_percentage_7d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_30d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_200d_in_currency} />
      <PercentChange percent={coin.price_change_percentage_1y_in_currency} />
      {/*  ATH percentage */}
      {coin.ath_change_percentage > -3 ? (
        <p> ATH !</p>
      ) : (
        <PercentChange percent={coin.ath_change_percentage} />
      )}
    </div>
  );
};

export default TableLine;
