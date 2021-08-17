import React from "react";
import { LinkIcon, DownIcon, UpIcon } from "../assets/icons";
function CoinWelcome({ coin, currencyFormat }) {
  return (
    <div className="coin" key={coin.id}>
      <div className="coin-header">
        <div className="coin-header-left">
          <div className="header">
            <img
              src={coin.image.small}
              alt={coin.image.name}
              className="logo"
            />
            <h1 className="title">{coin.name}</h1>{" "}
          </div>
          <div className="sub-header">
            <div className="tag">Rank #{coin.market_cap_rank}</div>
            <div className="tag">{coin.categories[0]}</div>
          </div>
          <div className="social">
            <div className="link">
              <a href={coin.links.homepage[0]} target="_blank" rel="noreferrer">
                <LinkIcon />
                Website
              </a>
            </div>
            <div className="link">
              <a
                href={`https://twitter.com/${coin.links.twitter_screen_name}`}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon />
                Twitter
              </a>
            </div>
            <div className="link">
              <a
                href={`https://facebook.com/${coin.links.facebook_username}`}
                target="_blank"
                rel="noreferrer"
              >
                <LinkIcon />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="coin-header-right">
          <div className="prices">
            <div className="price">
              ${currencyFormat(coin.market_data.current_price.usd)}
            </div>
            <div className="percentage">
              {coin.market_data.price_change_percentage_24h > 0 ? (
                <div className="coin-up">
                  <UpIcon />
                  <span>
                    {Number(
                      coin.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              ) : (
                <div className="coin-down">
                  <DownIcon />
                  <span>
                    {Number(
                      coin.market_data.price_change_percentage_24h
                    ).toFixed(2)}
                    %
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="progress">
            <div className="low">
              Low:
              <span className="price">${coin.market_data.low_24h.usd}</span>
            </div>

            <div className="w3-light-grey">
              <div
                className="w3-green"
                style={{
                  height: "5px",
                  width:
                    Number(
                      ((coin.market_data.current_price.usd -
                        coin.market_data.low_24h.usd) *
                        100) /
                        (coin.market_data.high_24h.usd -
                          coin.market_data.low_24h.usd)
                    ) >= 100
                      ? "100%"
                      : Number(
                          ((coin.market_data.current_price.usd -
                            coin.market_data.low_24h.usd) *
                            100) /
                            (coin.market_data.high_24h.usd -
                              coin.market_data.low_24h.usd)
                        ) + "%",
                }}
              >
                <div className="progress-circle"></div>
              </div>
            </div>
            <div className="high">
              High:
              <span className="price">${coin.market_data.high_24h.usd}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="side">
        <div className="card">
          <h3 className="title">Market Cap</h3>
          <div className="price">
            ${currencyFormat(Number(coin.market_data.market_cap.usd))}
          </div>
        </div>
        <div className="card">
          <h3 className="title">Fully Diluted Market Cap</h3>
          <div className="price">
            $
            {currencyFormat(
              Number(coin.market_data.fully_diluted_valuation.usd)
            )}
          </div>
        </div>
        <div className="card">
          <h3 className="title">Circulating Supply</h3>
          <div className="price">
            {currencyFormat(Number(coin.market_data.circulating_supply))}{" "}
            {String(coin.symbol).toUpperCase()}
          </div>
        </div>
        <div className="card">
          <h3 className="title">Total Volume</h3>
          <div className="price">
            ${currencyFormat(Number(coin.market_data.total_volume.usd))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinWelcome;
