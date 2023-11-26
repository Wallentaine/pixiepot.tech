"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTableDemo } from "./data-table";

import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState<Payment[]>([]);
  setEmployees([
    {
      id_epmloyee: 1,
      burnout: 20,
      date: "2022-01-01",
      project: "Web Development",
    },
    {
      id_epmloyee: 2,
      burnout: 30,
      date: "2022-01-02",
      project: "Mobile App Development",
    },
    {
      id_epmloyee: 3,
      burnout: 40,
      date: "2022-01-03",
      project: "Data Analysis",
    },
    {
      id_epmloyee: 4,
      burnout: 50,
      date: "2022-01-04",
      project: "Machine Learning",
    },
    {
      id_epmloyee: 5,
      burnout: 60,
      date: "2022-01-05",
      project: "Cybersecurity",
    },
    {
      id_epmloyee: 6,
      burnout: 70,
      date: "2022-01-06",
      project: "Database Management",
    },
    {
      id_epmloyee: 7,
      burnout: 80,
      date: "2022-01-07",
      project: "Artificial Intelligence",
    },
    {
      id_epmloyee: 8,
      burnout: 90,
      date: "2022-01-08",
      project: "Cloud Computing",
    },
    { id_epmloyee: 9, burnout: 100, date: "2022-01-09", project: "DevOps" },
    {
      id_epmloyee: 10,
      burnout: 15,
      date: "2022-01-10",
      project: "Quality Assurance",
    },
    {
      id_epmloyee: 11,
      burnout: 25,
      date: "2022-01-11",
      project: "Software Testing",
    },
    {
      id_epmloyee: 12,
      burnout: 35,
      date: "2022-01-12",
      project: "UI/UX Design",
    },
    {
      id_epmloyee: 13,
      burnout: 45,
      date: "2022-01-13",
      project: "Game Development",
    },
    {
      id_epmloyee: 14,
      burnout: 55,
      date: "2022-01-14",
      project: "Embedded Systems",
    },
    {
      id_epmloyee: 15,
      burnout: 65,
      date: "2022-01-15",
      project: "Blockchain Development",
    },
    {
      id_epmloyee: 16,
      burnout: 75,
      date: "2022-01-16",
      project: "IoT Development",
    },
    {
      id_epmloyee: 17,
      burnout: 85,
      date: "2022-01-17",
      project: "AR/VR Development",
    },
    { id_epmloyee: 18, burnout: 95, date: "2022-01-18", project: "Big Data" },
    {
      id_epmloyee: 19,
      burnout: 10,
      date: "2022-01-19",
      project: "Real-Time Systems",
    },
    {
      id_epmloyee: 20,
      burnout: 2,
      date: "2022-01-20",
      project: "Embedded Systems",
    },
  ]);
  console.log(employees);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4001/api/statistic/employees-project"
  //       );
  //       setEmployees(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return <DataTableDemo columns={columns} data={employees} />;
};

export default Employees;
