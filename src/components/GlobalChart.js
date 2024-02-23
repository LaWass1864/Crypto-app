import React, { useState, useEffect } from "react";
const GlobalChart = ({ coinsData }) => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    let chartData = [];

    if (coinsData.length > 0) {
      for (let i = 0; i < 45; i++) {
        chartData.push({
          name:
            coinsData[1].symbol.toUpperCase() +
            " " +
            coinsData[i].market_cap_change_percentage_24h.toFixed(1) +
            "%",
          size: coinsData[i].market_cap,
          fill: null,
        });
      }
    }
    console.log(chartData);
  }, [coinsData]);

  return (
    <div className="global-chart">
      <h1> Test </h1>
    </div>
  );
};

export default GlobalChart;
