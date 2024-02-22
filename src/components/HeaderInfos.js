import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderInfos = () => {

    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios
            // 𝗼𝗻 𝗮 𝗹𝗲 𝗿𝗲𝗻𝗱𝘂 𝗱𝗮𝗻𝘀 𝗹𝗮 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 > 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 > 𝗦𝘁𝗮𝘁𝗲
            .get('https://api.coingecko.com/api/v3/global')
            // aller directement aux données de la base de données
            .then((res) => setHeaderData(res.data.data));
    }, []);

    return (
        <div className='header-container'>
            <ul className='title'>
                <li>
                    <h1>
                        {/* logo Watch tower */}
                        <img src='./assets/logo.png' alt='logo' /> Watch Tower
                    </h1>
                </li>
              
                <li>
                    {/* on demande si header.data.active_cryptocurrencies existe sinon il affiche rien */}
                    Crypto-monnaies : {" "} {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className='infos-mkt'>
                <li className='global-mkt'>Global Market cap :
             
                    <PercentChange percent={headerData.market_cap_change_percentage_24h_usd} />
                </li>
                <li>BTC dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}
                </li>
                <li>BTC dominance : {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%" }
                </li>
              
            </ul>
        </div>
    );
};

export default HeaderInfos;