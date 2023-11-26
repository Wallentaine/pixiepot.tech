import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";

import { useTheme } from "next-themes";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function getRandomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const data = {
  datasets: [
    {
      label: "Серис для проведения собеседоаний",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomNumber(-100, 100),
        y: getRandomNumber(-100, 100),
        r: getRandomNumber(5, 20),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Банковское веб-приложение",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomNumber(-100, 100),
        y: getRandomNumber(-100, 100),
        r: getRandomNumber(5, 20),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Нейронная сеть для генерации фейковых данных",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomNumber(-100, 100),
        y: getRandomNumber(-100, 100),
        r: getRandomNumber(5, 20),
      })),
      backgroundColor: "rgba(11, 156, 146, 0.5)",
    },
    {
      label: "Мобильное приложение 'Ясно'",
      data: Array.from({ length: 50 }, () => ({
        x: getRandomNumber(-100, 100),
        y: getRandomNumber(-100, 100),
        r: getRandomNumber(5, 20),
      })),
      backgroundColor: "rgba(100, 11, 90, 0.5)",
    },
  ],
};

export function BubbleChart() {
  const { theme } = useTheme();
  let color;
  {
    theme === "light" ? (color = "white") : (color = "black");
  }
  const options = {
    scales: {
      x: {
        ticks: {
          color, // this will style the color of the x axis values
        },
      },
      y: {
        ticks: {
          color, // this will style the color of the y axis values
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // this will style the color of the legend
          color,
        },
      },
    },
  };

  return (
    <Bubble
      options={options}
      data={data}
      className="w-screen h-screen p-20 block m-auto"
    />
  );
}
