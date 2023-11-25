"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export type Payment = {
  id: string;
  fullname: string;
  position: string;
  burnout_rate: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "fullname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ФИО
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("fullname")}</div>
    ),
  },
  {
    accessorKey: "position",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Должность
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("position")}</div>
    ),
  },
  {
    accessorKey: "burnout_rate",
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
          value={row.getValue("burnout_rate")}
          className="bg-white mr-4 max-w-[90%]"
        />
        {row.getValue("burnout_rate") + "%"}
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
          <Link href={`crud/categories/${payment.id}`}>
            <Button
              variant="classic"
              size="sm"
              className="flex text-center rounded-3xl"
            >
              <p className="text-xs">Подробнее</p>
            </Button>
          </Link>

          <Link href={`crud/categories/${payment.id}`}>
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
