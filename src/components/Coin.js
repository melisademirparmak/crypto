import React from "react";
import "../css/style.css";

const Coin = ({
  name,
  price,
  symbol,

  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <div className="img">
        <img src={image} alt={`${name}`} className="CoinLogo" />
      </div>
      <div className="coinNameWrap">
        <div className="b-left">
          <h1 className="coinName">{name}</h1>
          <p className="coinSymbol">{symbol}</p>
          <p className="coinPrice">${price.toLocaleString()}</p>
        </div>
        <div>
          {priceChange < 0 ? (
            <div className="priceContainerDown flex-direction">
              <p className="priceChange">{priceChange.toFixed(2)}%</p>
              <i className="fas fa-angle-down fa-2x"></i>
            </div>
          ) : (
            <div className="priceContainerUP flex-direction">
              <i className="fas fa-angle-up fa-2x"></i>
              <p className="priceChange">{priceChange.toFixed(2)}%</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coin;
