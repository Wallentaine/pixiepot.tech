"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  date: string;
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
};

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch());

  return (
    <div className="max-w-7xl mx-auto h-full">
      <div className="space-y-2 dark:text-black text-white mb-2 ">
        <h1 className="text-xl font-bold">Settings</h1>
        <p className="text-md dark:text-secondary text-secondary/50 font-semibold">
          Information
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
            type="date"
            {...register("date")}
            className="col-span-1 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countMessage", { required: true })}
            placeholder="countMessage"
            className="col-span-1 bg-white dark:bg-[#2b2b2b] text-black dark:text-white dark:placeholder:text-white placeholder:text-black focus:border-white"
          />

          <Input
            {...register("countCharInMessage", { required: true })}
            placeholder="countMessage"
            className="w-1/4 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countCommits", { required: true })}
            placeholder="countMessage"
            className="w-1/3 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countChangedCode", { required: true })}
            placeholder="countMessage"
            className="w-1/3 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countHoursInApps", { required: true })}
            placeholder="countMessage"
            className="w-1/3 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countTasks", { required: true })}
            placeholder="countMessage"
            className="w-1/3 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input
            {...register("countDaysOnTask", { required: true })}
            placeholder="countMessage"
            className="w-1/4 bg-white dark:bg-black text-black dark:text-white"
          />

          <Input {...register("lastUpGradeDate", { required: true })} />

          <Input {...register("countWorkYearInCompany", { required: true })} />

          <Input {...register("countCall", { required: true })} />

          <Input {...register("callDuration", { required: true })} />

          <Input {...register("countWorkHours", { required: true })} />

          <Input {...register("countWorkHoursOver", { required: true })} />

          <Input {...register("countDaysSickTime", { required: true })} />

          <Input {...register("countMissDeadline", { required: true })} />

          <Input {...register("countOutstandingTask", { required: true })} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
