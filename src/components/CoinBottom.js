import React from "react";

import Moment from "react-moment";
import UpIcon from "../assets/icons/UpIcon";
import DownIcon from "../assets/icons/DownIcon";
function CoinBottom({ coin, smallcurrenyFormat, currencyFormat }) {
  console.log(coin);
  return (
    <div className="bottom">
      <div className="title">{coin.name} About</div>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: `${coin.description.en}` }}
      ></div>
      <div />
      <div className="history">
        <div className="atl">
          <div className="title">All Time Low</div>
          <div className="date">
            <Moment format="MM/DD/YYYY mm:hh">
              {coin.market_data.atl_date.usd}
            </Moment>
          </div>
          <div className="price">
            {coin.market_data.atl.usd < 1 ? (
              <>${smallcurrenyFormat(coin.market_data.atl.usd)}</>
            ) : (
              <>${currencyFormat(coin.market_data.atl.usd)}</>
            )}
            <div className="coin-up">
              <UpIcon />
              <span>
                {Number(coin.market_data.atl_change_percentage.usd).toFixed(2)}%
              </span>
            </div>
            <div className="percentage-info">
              Ratio of All Time Low price to current price
            </div>
          </div>
        </div>
        <div className="ath">
          <div className="title">All Time High</div>
          <div className="date">
            <Moment format="MM/DD/YYYY hh:mm">
              {coin.market_data.ath_date.usd}
            </Moment>
          </div>
          <div className="price">
            {coin.market_data.ath.usd < 1 ? (
              <>${smallcurrenyFormat(coin.market_data.ath.usd)}</>
            ) : (
              <>${currencyFormat(coin.market_data.ath.usd)}</>
            )}
            <div className="coin-down">
              <DownIcon />
              <span>
                {Number(coin.market_data.ath_change_percentage.usd).toFixed(2)}%
              </span>
            </div>
            <div className="percentage-info">
              Ratio of All Time High price to current price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinBottom;
