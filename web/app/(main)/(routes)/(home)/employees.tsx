"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTableDemo } from "./data-table";

import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState<Payment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://172.26.0.1:4001/api/statistic/employees-project"
        );
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return <DataTableDemo columns={columns} data={employees} />;
};

export default Employees;
