"use client";

import { useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { PositionCard } from "../PositionCard";
import { positions } from "@/data/positions";
import { Button } from "@/components/ui/button";

export function RandomPosition() {
  const [randomPosition, setRandomPosition] = useState(() => {
    const randomIndex = Math.floor(Math.random() * positions.length);
    return positions[randomIndex];
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const controls = useAnimation();

  const generateNewRandomPosition = useCallback(async () => {
    if (isGenerating) return;

    setIsGenerating(true);

    // Start the rotation animation
    await controls.start({
      rotateY: 1800, // 5 full rotations
      transition: {
        duration: 3,
        ease: [0.64, 0.57, 0.67, 1.53], // Custom easing function for deceleration
      },
    });

    // Generate new position
    const randomIndex = Math.floor(Math.random() * positions.length);
    setRandomPosition(positions[randomIndex]);

    // Reset rotation
    controls.set({ rotateY: 0 });

    setIsGenerating(false);
  }, [controls, isGenerating]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={controls}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div style={{ backfaceVisibility: "hidden" }}>
            <PositionCard position={randomPosition} />
          </div>
        </motion.div>
      </motion.div>
      <Button
        onClick={generateNewRandomPosition}
        className="mt-4 w-full"
        disabled={isGenerating}
      >
        {isGenerating ? "Gerando..." : "Gerar nova posição"}
      </Button>
    </div>
  );
}
