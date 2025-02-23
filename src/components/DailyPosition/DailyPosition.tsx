"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PositionCard } from "../PositionCard";
import { positions } from "@/data/positions";

export function DailyPosition() {
  const dailyPosition = useMemo(() => {
    const today = new Date();
    const seed =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();
    const index = seed % positions.length;
    return positions[index];
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PositionCard position={dailyPosition} />
    </motion.div>
  );
}
