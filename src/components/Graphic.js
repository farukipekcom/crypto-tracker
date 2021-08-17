import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { fetchGraphic } from "../redux/graphicSlice";

function Graphic({ id }) {
  const status = useSelector((state) => state.graphic.status);
  const graphic = useSelector((state) => state.graphic.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGraphic(id));
  }, [id, dispatch]);
  const dates = [];
  const prices = [];
  if (status === "succeeded") {
    graphic[0].prices.map((item) => prices.push(item[1]));
    graphic[0].prices.map((item) => {
      var date = new Date(item[0]).toLocaleDateString("en-US");
      return dates.push(date);
    });
  }
  const data = {
    labels: dates,
    datasets: [
      {
        label: "Graphic",
        data: prices,
        fill: false,
        backgroundColor: "#fff",
        borderColor: "#29D97F",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [],
    },
  };
  return (
    <div className="grafik">
      <Line data={data} options={options} />
    </div>
  );
}
export default Graphic;
