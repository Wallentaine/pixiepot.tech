"use client";

import axios from "axios";
import type { ChartArea, ChartData } from "chart.js";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Payment = {
  id_epmloyee: number;
  burnout: number;
  date: string;
  project: string;
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Уровень выгорания сотрудников",
      data: labels.map(() => getRandomNumber(-1000, 1000)),
    },
  ],
};

function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = getRandomElement(colors);
  const colorMid = getRandomElement(
    colors.filter((color) => color !== colorStart)
  );
  const colorEnd = getRandomElement(
    colors.filter((color) => color !== colorStart && color !== colorMid)
  );

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

export function GradientChart() {
  const [employees, setEmployees] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://172.26.0.0:4001/api/statistic/employees-project"
        );
        setEmployees(response.data);
        console.log(employees);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const { theme } = useTheme();
  let color;
  {
    theme === "light" ? (color = "white") : (color = "black");
  }

  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,

      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
        backgroundColor: "transparent",
      })),
    };

    setChartData(chartData);
  }, []);

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
    <Chart
      ref={chartRef}
      type="line"
      data={chartData}
      options={options}
      className="py-10"
    />
  );
}
