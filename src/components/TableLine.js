import React from 'react';

const TableLine = ({ coin, index }) => {
    console.log(coin.symbol, index);
    return (
<div className='table-line'>
    <div className="infos-container">
        <span>*</span>
        <p>{index +1}</p>
        <div className="img">
            <img src={coin.image} alt="logo" height="20"/>
        </div>
        <div className="infos">
            <div className="chart-img">
                <img src="./assets/chart-icon.svg" alt="chart-icon" />
            </div>
        <h4>{coin.name}</h4>
        <span>- {coin.symbol.toUpperCase()}</span>
        <a href={"https://www.coingecko.com/fr/pi%C3%A8ces/"} target="_blank" rel="noopener noreferrer">
            </a>
        </div>
    </div>
</div>
    );
};

export default TableLine;