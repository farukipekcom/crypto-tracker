import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCrypto } from "../redux/cryptoSlice";
import ListItem from "./ListItem";
import Loading from "./Loading";
function List() {
  const crypto = useSelector((state) => state.crypto.items);
  const status = useSelector((state) => state.crypto.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrypto());
    }
  }, [dispatch, status]);

  return (
    <>
      <div className="card-container">
        {status === "succeeded" ? <ListItem crypto={crypto} /> : <Loading />}
      </div>
    </>
  );
}

export default List;
