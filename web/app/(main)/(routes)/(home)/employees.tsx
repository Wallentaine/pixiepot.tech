"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTableDemo } from "./data-table";

const Employees = () => {
  const [employees, setEmployees] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = [
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
        {
          id: "1",
          fullname: "Балашев Артур Вадимович",
          position: "Frontend разработчик",
          burnout_rate: 100,
        },
        {
          id: "2",
          fullname: "Artyco",
          position: "JAVA разработчик",
          burnout_rate: 40,
        },
        {
          id: "3",
          fullname: "QWE",
          position: "PHP разработчик",
          burnout_rate: 80,
        },
      ];
      setEmployees(response);
    };

    fetchData();
  }, [setEmployees]);
  return <DataTableDemo columns={columns} data={employees} />;
};

export default Employees;
