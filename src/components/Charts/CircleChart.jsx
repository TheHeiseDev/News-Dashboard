import React, { useEffect, useRef } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function bgColorRandom(num) {
  const bgColor = [
    "rgba(255, 99, 132, 0.9)",
    "rgba(215, 120, 112, 0.9)",
    "rgba(54, 162, 235, 0.9)",
    "rgba(94, 172, 215, 0.9)",
    "rgba(255, 206, 86, 0.9)",
    "rgba(155, 206, 86, 0.9)",
    "rgba(25, 206, 86, 0.9)",
    "rgba(75, 192, 192, 0.9)",
    "rgb(107 255 255 / 90%)",
    "rgba(153, 102, 255, 0.9)",
    "rgb(184 160 234 / 90%)",
    "rgba(255, 159, 64, 0.9)",
    "rgb(64 255 181 / 90%)",
    "rgb(69 242 251 / 90%)",
    "rgb(251 69 107 / 90%)",
    "rgb(251 69 202 / 90%)",
    "rgb(99 69 251 / 90%)",
    "rgb(69 154 251 / 90%)",
    "rgb(187 212 56 / 90%)",
    "rgb(247 178 11 / 90%)",
    "rgb(11 247 88 / 71%)",
    "rgb(11 179 247 / 71%)",
    "rgb(247 11 237 / 71%)",
    "rgb(247 11 118 / 71%)",
    "rgb(247 11 11 / 71%)",
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
        display: false,
        position: "left",

        labels: {
          display: false,
          color: "white",
          boxWidth: 10,
          boxHeight: 10,
          pointStyle: "circle",
          align: "center",
        },
      },
    },
  };
  return <Doughnut options={charts} data={data} />;
}
