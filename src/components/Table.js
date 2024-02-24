import React, { useState } from 'react';


const Table = ({ coinsData }) => {
    // nombre de ligne qu'on va afficher
    const [rangeNumber, SetRangeNumber] = useState(100)
    return (
        <div className="table-container">
            <div className="">
                <div className="range-container">
                    <span>Top
                        {/* connexion de l'input avec le range avec la value={rangeNumber} */}
                    <input type='text'
                    value={rangeNumber} onChange={(e) => SetRangeNumber(e.target.value)} />
                    </span>
                    <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => SetRangeNumber(e.target.value)}/>
                </div>
            </div>
        </div>
    );
};

export default Table;