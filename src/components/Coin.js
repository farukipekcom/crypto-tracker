import "../styles/Coin.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoin } from "../redux/coinSlice";
import Graphic from "./Graphic";
import Loading from "./Loading";
import CoinWelcome from "./CoinWelcome";
import CoinBottom from "./CoinBottom";
function Coin() {
  const { id } = useParams();
  const status = useSelector((state) => state.coin.status);
  const coin = useSelector((state) => state.coin.items);
  const dispatch = useDispatch();
  function currencyFormat(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  function smallcurrenyFormat(num) {
    return num.toFixed(8).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1");
  }
  useEffect(() => {
    dispatch(fetchCoin(id));
  }, [id, dispatch]);
  return (
    <div className="coin-container">
      {status === "succeeded" ? (
        <>
          <CoinWelcome coin={coin[0]} currencyFormat={currencyFormat} />
          <Graphic id={id} />
          <CoinBottom
            coin={coin[0]}
            currencyFormat={currencyFormat}
            smallcurrenyFormat={smallcurrenyFormat}
          />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Coin;
