"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Position } from "@/types/position";
import {
  complexityTranslations,
  dangerousnessTranslations,
} from "@/types/position";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PositionModal } from "../PositionModal";
import Image from "next/image";

interface PositionCardProps {
  position: Position;
  onClick?: () => void;
}

export function PositionCard({ position, onClick }: PositionCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // export type Complexity = "crazy" | "easy" | "hard" | "medium";
  const complexityColor =
    {
      easy: "bg-green-400 text-green-800 border-green-600 border",
      medium: "bg-yellow-400 text-yellow-800 border-yellow-600 border",
      hard: "bg-red-400 text-red-800 border-red-600 border",
      crazy: "bg-purple-400 text-purple-800 border-purple-600 border",
    }[position.complexity] || "bg-stone-400 text-stone-800 border-stone-600";

  const dangerousnessColor =
    {
      none: "bg-stone-400 text-stone-800 border-stone-600 border",
      safe: "bg-green-400 text-green-800 border-green-600 border",
      "be careful": "bg-yellow-400 text-yellow-800 border-yellow-600 border",
    }[position.dangerousness] || "bg-stone-400 text-stone-800 border-stone-600";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Card
          className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden"
          onClick={handleClick}
        >
          <CardContent className="p-0 relative">
            <Image
              src={position.image || "/placeholder.svg"}
              alt={position.name}
              className="w-full h-80 object-cover"
              width={400}
              height={400}
              loading="lazy"
            />
            <Badge className={`absolute top-2 right-2 ${complexityColor}`}>
              {complexityTranslations[position.complexity].toUpperCase()}
            </Badge>
            <Badge className={`absolute top-2 left-2 ${dangerousnessColor}`}>
              {dangerousnessTranslations[position.dangerousness].toUpperCase()}
            </Badge>
            <h3 className="font-semibold text-lg p-4">{position.name}</h3>
          </CardContent>
        </Card>
      </motion.div>
      {!onClick && (
        <PositionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          position={position}
        />
      )}
    </>
  );
}
