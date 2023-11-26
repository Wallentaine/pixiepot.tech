"use client";
import React, { useEffect, useState } from "react";
import { GradientChart } from "./gradientChart";
import { motion } from "framer-motion";
import axios from "axios";

type Payment = {
  id_epmloyee: number;
  burnout: number;
  date: string;
  project: string;
  employee: {};
};

const Page = ({ params }: { params: { employeeCard: number } }) => {
  const [employees, setEmployees] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.240.1:4001/api/statistic/employees-project"
        );
        setEmployees(response.data);
        console.log(employees);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  const employee = {
    fullname: "Балашев Артур Вадимович",
    position: "Руководитель",
    phone: 8888888888,
    project: "PHP site",
    email: "bVJ8b@example.com",
    date: "2022-01-01",
    lastUpGradeDate: "2022-01-01",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="h-screen"
    >
      <div className="ml-12">
        <h1 className="text-3xl text-orange-500 font-bold mb-4">
          {employee.fullname}
        </h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              Должность
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.position}
            </p>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              Телефон
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.phone}
            </p>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              Проект
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.project}
            </p>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              Почта
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.email}
            </p>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              В компании с
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.date}
            </p>
          </div>
          <div className="flex items-center">
            <h1 className="text-lg text-white dark:text-black font-bold mr-4">
              Дата последнего повышения
            </h1>
            <p className="text-md font-normal bg-secondary/50 dark:bg-secondary/20 rounded-3xl text-black px-4 py-1">
              {employee.lastUpGradeDate}
            </p>
          </div>
        </div>
      </div>
      <GradientChart />
    </motion.div>
  );
};

export default Page;
