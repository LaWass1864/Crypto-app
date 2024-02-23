import axios from 'axios';
import React, { useEffect, useState } from 'react';
// PercentChange est la fonction qui conditionne les couleurs des pourcentages des chiffres.
import PercentChange from './PercentChange';
import TableFilter from './TableFilter';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios
        //   ?on recupere les données de la base de données 
            .get('https://api.coingecko.com/api/v3/global')
            // aller directement aux données de la base de données avec le chemin 
            .then((res) => setHeaderData(res.data.data));
    }, []);

    return (
        // header de l'application
        <div className='header-container'>
            <ul className='title'>
                <li>
                    <h1>
                        {/* logo Watch tower */}
                        <img src='./assets/logo.png' alt='logo' /> Watch Tower
                    </h1>
                </li>
              {/*  Crypto-monnaies */}
                <li>
                    {/* on demande si header.data.active_cryptocurrencies existe sinon il affiche rien */}
                    Crypto-monnaies : {" "} {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                {/* Marchés */}
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className='infos-mkt'>
                <li className='global-mkt'>Global Market cap :
             {/* pour colorer les données j'ai crée un composant PercentChange qui va colorer les chiffres et on va te passer la props percent */}
                    <PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
                </li>
                {/* on teste si cela existe ensuite on affiche les données */}
                <li>BTC dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}
                </li>
                <li>BTC dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%" }
                </li>
         
            </ul>
            <TableFilter />
        </div>
    );
};

export default HeaderInfos;