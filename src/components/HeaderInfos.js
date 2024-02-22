import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PercentChange from './PercentChange';

const HeaderInfos = () => {
    // 𝗰𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝗱𝗲 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲 𝗱𝗮𝗻𝘀 𝗹𝗮𝗾𝘂𝗲𝗹𝗹𝗲 𝗼𝗻 𝘃𝗮 𝗺𝗲𝘁𝘁𝗿𝗲 𝘁𝗼𝘂𝘁𝗲𝘀 𝗻𝗼𝘀 𝗱𝗮𝘁𝗮𝘀
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        axios
            // 𝗼𝗻 𝗮 𝗹𝗲 𝗿𝗲𝗻𝗱𝘂 𝗱𝗮𝗻𝘀 𝗹𝗮 𝗰𝗼𝗻𝘀𝗼𝗹𝗲 > 𝗰𝗼𝗺𝗽𝗼𝗻𝗲𝗻𝘁𝘀 > 𝗦𝘁𝗮𝘁𝗲
            .get('https://api.coingecko.com/api/v3/global')
            .then((res) => setHeaderData(res.data.data));
    }, []);

    return (
        <div className='header-container'>
            <ul className='title'>
                <li>
                    <h1>
                        <img src='./assets/logo.png' alt='logo' /> Watch Tower
                    </h1>
                </li>
                {/*  𝗼𝗻 𝗹𝘂𝗶 𝗱𝗲𝗺𝗮𝗻𝗱𝗲 𝘀'𝗶𝗹 𝘆 𝗮 𝗱𝗲 𝗹𝗮 𝗱𝗮𝘁𝗮𝘀, 𝗰𝗮𝗿 𝗹𝗮 𝗱𝗮𝘁𝗮 𝗾𝘂𝗶 𝗽𝗿𝗼𝘃𝗶𝗲𝗻𝘁 𝗱𝗲 𝗰𝗲𝘁𝘁𝗲 𝗔𝗽𝗶 𝗺𝗲𝘁 𝗱𝘂 𝘁𝗲𝗺𝗽𝘀 𝗽𝗼𝘂𝗿 𝗰𝗵𝗮𝗿𝗴𝗲𝗿 */}
                <li>
                    {/* on demande si header.data.active_cryptocurrencies existe sinon il affiche  */}
                    Crypto-monnaies : {" "} {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className='infos-mkt'>
                <li className='global-mkt'>Global Market cap :
                    {/* 𝗢𝗻 𝘃𝗮 𝗰𝗼𝗻𝗱𝗶𝘁𝗶𝗼𝗻𝗻𝗲𝗿 𝗹𝗲 𝗰𝗵𝗶𝗳𝗳𝗿𝗲 𝗮𝗳𝗶𝗻 𝗾𝘂'𝗶𝗹 𝘀𝗼𝗶𝘁 𝘃𝗲𝗿𝘁 𝘀𝗼𝗶𝘁 𝗿𝗼𝘂𝗴𝗲 > 𝗼𝗻 𝘃𝗮 𝘀𝗲 𝗰𝗿𝗲𝗲𝗿 𝘂𝗻 𝗰𝗼𝗺𝗽𝗼𝘀𝗮𝗻𝘁 */}
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