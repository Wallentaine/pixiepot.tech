import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useTheme } from "next-themes";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Выгоревшие", "Невыгоревшие"],
  datasets: [
    {
      label: "%",
      data: [22, 78],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  const { theme } = useTheme();
  let color;
  {
    theme === "light" ? (color = "white") : (color = "black");
  }
  const options = {
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
    <Pie
      data={data}
      className="w-screen h-screen p-20 block m-auto"
      options={options}
    />
  );
}
