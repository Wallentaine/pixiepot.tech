"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export type Payment = {
  id_epmloyee: number;
  burnout: number;
  date: string;
  project: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "project",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Проект
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("project")}</div>
    ),
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Дата записи
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = row.getValue("date");
      if (typeof date === "string") {
        return <div className="capitalize">{date.slice(0, 10)}</div>;
      } else {
        return <div className="capitalize">Unknown date</div>;
      }
    },
  },
  {
    accessorKey: "burnout",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Уровень выгорания
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize flex justify-center items-center">
        <Progress
          value={row.getValue("burnout")}
          className="bg-black dark:bg-white mr-4 max-w-[90%]"
        />
        {row.getValue("burnout") + "%"}
      </div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex gap-2 justify-start items-center">
          <Link href={`/${payment.id_epmloyee}`}>
            <Button
              variant="classic"
              size="sm"
              className="flex text-center rounded-3xl"
            >
              <p className="text-xs text-white font-bold">Подробнее</p>
            </Button>
          </Link>

          <Link href={`crud/categories/${payment.id_epmloyee}`}>
            <Button
              variant="classic"
              size="sm"
              className="flex text-center rounded-3xl bg-[#263238] hover:bg-[#1c262a]"
            >
              <MessageSquare className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      );
    },
  },
];
