import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import faker from "faker";
import { useTheme } from "next-themes";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
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
