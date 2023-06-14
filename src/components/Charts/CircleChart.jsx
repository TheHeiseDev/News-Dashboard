import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Chart, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function bgColorRandom(num) {
  const bgColor = [
    "rgba(255, 99, 132, 0.9)",
    "rgba(54, 162, 235, 0.9)",
    "rgba(255, 206, 86, 0.9)",
    "rgba(75, 192, 192, 0.9)",
    "rgba(153, 102, 255, 0.9)",
    "rgba(255, 159, 64, 0.9)",
  ];
  const randomIndexes = [];
  const result = [];

  // генерируем num случайных индексов
  while (randomIndexes.length < num) {
    const randomIndex = Math.floor(Math.random() * bgColor.length);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }

  // выбираем элементы с соответствующими индексами
  randomIndexes.forEach((index) => {
    result.push(bgColor[index]);
  });

  return result;
}

export function CircleChart({ data }) {
  const chartRef = useRef(null);
  const chart = chartRef.current;
  const charts = {
    plugins: {
      tooltip: {
        usePointStyle: true,
        callbacks: {
          labelPointStyle: function (context) {
            return {
              pointStyle: "circle",
              rotation: 0,
            };
          },
        },
      },
      legend: {
        displayColors: true,
        display: false,
        labels: {
          color: "rgb(255, 99, 132)",
        },
      },
      title: {
        display: false,
        labels: ["sdsd", "sdsds"],
        text: "Custom Chart Title",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
  };
  return <Doughnut options={charts} data={data} />;
}
