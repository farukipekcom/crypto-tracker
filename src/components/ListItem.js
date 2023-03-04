import React from "react";
import { Link } from "react-router-dom";
import { UpIcon, DownIcon } from "../assets/icons";
function ListItem({ crypto }) {
  return (
    <>
      {
        crypto.map((coin) =>
          coin.price_change_percentage_24h > 0 ? (
            <Link to={`/crypto/${coin.id}`} key={coin.id}>
              <div className="card up-shadow">
                <div className="header">
                  <img src={coin.image} alt={coin.image.name} />
                  <span className="up">
                    <UpIcon />
                    <span className="price">
                      {Number(
                        coin.price_change_percentage_24h
                      ).toFixed(2)}
                      %
                    </span>
                  </span>
                </div>
                <h1 className="coin-title">{coin.name}</h1>
                <p className="price">${coin.current_price}</p>
              </div>
            </Link>
          ) : (
            <Link to={`/crypto/${coin.id}`} key={coin.id}>
              <div className="card down-shadow" key={coin.id}>
                <div className="header">
                  <img src={coin.image} alt={coin.image.name} />
                  <span className="down">
                    <DownIcon />
                    <span className="price">
                      {Number(
                        coin.price_change_percentage_24h
                      ).toFixed(2)}
                      %
                    </span>
                  </span>
                </div>
                <h1 className="coin-title">{coin.name}</h1>
                <p className="price">${coin.current_price}</p>
              </div>
            </Link>
          )
        )
      }
    </>
  );
}

export default ListItem;
