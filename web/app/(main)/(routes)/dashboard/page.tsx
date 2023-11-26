"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";

type Inputs = {
  countMessage: number;
  countCharInMessage: number;
  countCommits: number;
  countChangedCode: number;
  countHoursInApps: number;
  countTasks: number;
  countDaysOnTask: number;
  lastUpGradeDate: string;
  countWorkYearInCompany: number;
  countCall: number;
  callDuration: number;
  countWorkHours: number;
  countWorkHoursOver: number;
  countDaysSickTime: number;
  countMissDeadline: number;
  countOutstandingTask: number;
  telegramToken: string;
};

const Dashboard = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const response = axios.post(
      "http://172.26.0.1:4001/api/statistic/weight-data",
      data
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="max-w-7xl mx-auto h-full"
    >
      <div className="space-y-2 dark:text-black text-white mb-2 ">
        <h1 className="text-xl font-bold">Панель управления</h1>
        <p className="text-md dark:text-secondary text-secondary/50 font-semibold">
          Корректирование максимально возможного значения критериев выгорания
        </p>
      </div>
      <div>
        <Separator className="text-primary/10 dark:text-black rounded-full" />
      </div>
      <div className="w-full ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 w-full justify-start items-center gap-4 text-white placeholder:text-white py-8"
        >
          <Input
            {...register("telegramToken", { required: true })}
            type="number"
            placeholder="Количество сообщений"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countMessage", { required: true })}
            type="number"
            placeholder="Количество сообщений"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countCharInMessage", { required: true })}
            type="number"
            placeholder="Средняя длина сообщений"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countCommits", { required: true })}
            type="number"
            placeholder="Количество коммитов"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countChangedCode", { required: true })}
            type="number"
            placeholder="Количество строк измененного кода"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countHoursInApps", { required: true })}
            type="number"
            placeholder="Время активности в приложениях (минуты)"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countTasks", { required: true })}
            type="number"
            placeholder="Количество задач"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countDaysOnTask", { required: true })}
            type="number"
            placeholder="Самый большой срок на задаче (минуты)"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("lastUpGradeDate", { required: true })}
            type="date"
            placeholder="Дата последнего повышения "
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countWorkYearInCompany", { required: true })}
            type="number"
            placeholder="Стаж работы в компании (дни)"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countCall", { required: true })}
            type="number"
            placeholder="Количество звонков"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("callDuration", { required: true })}
            type="number"
            placeholder="Средняя продолжительность звонков (минуты)"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countWorkHours", { required: true })}
            type="number"
            placeholder="Количество рабочих часов"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countWorkHoursOver", { required: true })}
            type="number"
            placeholder="Количество часов переработки"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countDaysSickTime", { required: true })}
            type="number"
            placeholder="Количество отгулов и больничных"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countMissDeadline", { required: true })}
            type="number"
            placeholder="Количество сдвинутых сроков"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 focus:border-white p-4 py-6 border-2"
          />

          <Input
            {...register("countOutstandingTask", { required: true })}
            type="number"
            placeholder="Невыполненые задачи"
            className="col-span-1 bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50  focus:border-white p-4 py-6 border-2"
          />

          <input
            type="submit"
            className="col-span-2 w-1/5 rounded-3xl m-auto bg-transparent dark:bg-transparent text-white dark:text-black dark:placeholder:text-black placeholder:text-white/50 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white darK:focus:border-black focus:border-white px-3 py-2 border-2"
          />
        </form>
      </div>
    </motion.div>
  );
};

export default Dashboard;
