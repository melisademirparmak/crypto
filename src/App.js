import { useEffect, useState } from "react";
import axios from "axios";

import Coin from "./components/Coin";
import "./css/style.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <i className="fas fa-angle-double-left"></i>coinci
          <i className="fas fa-angle-double-right"></i>
        </div>
        <form>
          <input
            type="text"
            className="serachBar"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="coinsContainer">
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
