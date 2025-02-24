"use client";

import { useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { PositionCard } from "../PositionCard";
import { PositionCardBack } from "../PositionCardBack";
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
      rotateY: 900, // 2.5 full rotations
      transition: {
        duration: 3,
        ease: [0.64, 0.57, 0.67, 1.53], // Custom easing function for deceleration
      },
    });

    // Generate new position
    const randomIndex = Math.floor(Math.random() * positions.length);
    setRandomPosition(positions[randomIndex]);

    // Complete the rotation
    await controls.start({
      rotateY: 1800, // 5 full rotations
      transition: {
        duration: 1.5,
        ease: [0.64, 0.57, 0.67, 1.53],
      },
    });

    // Reset rotation
    controls.set({ rotateY: 0 });

    setIsGenerating(false);
  }, [controls, isGenerating]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-sm aspect-[3/4] mb-20">
        <div
          className="relative w-full h-full"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            animate={controls}
            style={{
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <PositionCard position={randomPosition} />
            </div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <PositionCardBack />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-full max-w-sm flex justify-center">
        <Button
          onClick={generateNewRandomPosition}
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? "Gerando" : "Gerar nova posição"}
        </Button>
      </div>
    </div>
  );
}
