"use client";

import { ModeToggle } from "@/components/toogle-theme";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Home, LineChart, SlidersHorizontal } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
    title: "/dashboard",
    href: "/dashboard",
    icon: SlidersHorizontal,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="absolute md:flex flex md:flex-col justify-between items-center h-screen w-32 py-8  dark:bg-[#2b2b2b] bg-white"
    >
      <div className="flex flex-col justify-center items-center space-y-16">
        {theme === "light" ? (
          <Image src={"/logo-dark.svg"} alt="logo" width={100} height={100} />
        ) : (
          <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
        )}

        {routes.map((route, index) => (
          <Link
            prefetch={true}
            href={route.href}
            key={index}
            className={
              (cn(),
              pathname === route.href
                ? "text-orange-500"
                : "text-black dark:text-white")
            }
          >
            <route.icon width={40} height={40} />
          </Link>
        ))}
      </div>
      <div className="space-y-8 flex flex-col">
        <ModeToggle />
        <Button size="md" className="bg-transparent hover:bg-transparent">
          <UserButton afterSignOutUrl="/" />
        </Button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
