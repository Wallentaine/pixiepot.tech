"use client";
import Employees from "./employees";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      className="relative h-screen overflow-hidden"
    >
      <Employees />
    </motion.div>
  );
}
