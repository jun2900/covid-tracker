import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";

import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, [setDailyData]);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Positif", "Sembuh", "Meninggal"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["rgb(255,165,0)", "rgb(0,128,0)", "rgb(255,0,0)"],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Keadaan sekarang di ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: "Positif",
            borderColor: "#ffa500",
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: "Meninggal",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
      options={{
        title: { display: true, text: `Data harian global` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      <center>{barChart}</center>
      <center>{lineChart}</center>
    </div>
  );
};

export default Chart;
