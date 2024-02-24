import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
import GlobalChart from "./components/GlobalChart";
import { data as dbData } from "./db.js"; // Importer les données du fichier db.js
import axios from "axios";
import Table from "./components/Table.js";

const App = () => {
  const [coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    // Vérifier si les données du fichier db.js existent
    if (dbData && dbData.length > 0) {
      // Utiliser les données du fichier db.js
      setCoinsData(dbData);
    } else {
      // Si les données du fichier db.js n'existent pas, faire une requête à l'API Coingecko
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        )
        .then((res) => setCoinsData(res.data))
        .catch((error) =>
          console.error("Error fetching data from Coingecko API:", error)
        );
    }
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
    </div>
  );
};

export default App;
