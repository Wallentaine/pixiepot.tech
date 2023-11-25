"use client";

import { ModeToggle } from "@/components/toogle-theme";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Asterisk, Home, LineChart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const routes = [
  {
    title: "/home",
    href: "/",
    icon: Home,
  },
  {
    title: "/diagram",
    href: "/diagram",
    icon: LineChart,
  },
  {
    title: "/hitmap",
    href: "/hitmap",
    icon: Asterisk,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="absolute flex flex-col justify-between items-center h-screen w-32 py-8">
      <div className="flex flex-col justify-center items-center space-y-16">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        {routes.map((route, index) => (
          <Link
            prefetch={true}
            href={route.href}
            key={index}
            className={
              (cn(), pathname === route.href ? "text-orange-500" : "text-white")
            }
          >
            <route.icon width={40} height={40} />
          </Link>
        ))}
      </div>
      <div className="space-y-8 flex flex-col">
        <ModeToggle />
        <Button size="md" className="bg-transparent hover:bg-black">
          <UserButton afterSignOutUrl="/" />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
