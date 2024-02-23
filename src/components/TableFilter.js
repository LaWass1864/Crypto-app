import React from "react";

const TableFilter = () => {
  return (
    // barre qui contient les filtres
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            name=""
            id="stableCoin"
            defaultChecked={true}
          />
          <label htmlFor="stableCoin" id=""> Avec stable coin                    
          </label>
        </div>
        <div className="no-list-btn">
          <p>Aucune liste</p>
        </div>
        <div className="fav-list">
          <p> Liste des favoris </p>

          <img src="./assets/star-full.svg" alt="icon start" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
