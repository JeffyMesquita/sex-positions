"use client";

import { useState } from "react";
import { PositionCard } from "../PositionCard";
import { PositionModal } from "../PositionModal";
import { positions } from "@/data/positions";
import { Button } from "@/components/ui/button";
import type { Position } from "@/types/position";

const filterTypes = ["Yoga", "Strength", "Cardio"];

export function AllPositions() {
  const [filteredPositions, setFilteredPositions] = useState(positions);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);

  const handleFilter = (positionType: string) => {
    if (activeFilter === positionType) {
      setActiveFilter(null);
      setFilteredPositions(positions);
    } else {
      setActiveFilter(positionType);
      // setFilteredPositions();
      // positions.filter((p) => p.positionType === positionType)
    }
  };

  const openModal = (position: Position) => {
    setSelectedPosition(position);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const navigatePosition = (direction: "next" | "previous") => {
    if (!selectedPosition) return;

    const currentIndex = filteredPositions.findIndex(
      (p) => p.id === selectedPosition.id
    );
    let newIndex: number;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredPositions.length;
    } else {
      newIndex =
        (currentIndex - 1 + filteredPositions.length) %
        filteredPositions.length;
    }

    setSelectedPosition(filteredPositions[newIndex]);
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {filterTypes.map((type) => (
          <Button
            key={type}
            onClick={() => handleFilter(type)}
            variant={activeFilter === type ? "default" : "outline"}
            className={`rounded-full transition-colors ${
              activeFilter === type
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {type}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPositions.map((position) => (
          <PositionCard
            key={position.id}
            position={position}
            onClick={() => openModal(position)}
          />
        ))}
      </div>
      {selectedPosition && (
        <PositionModal
          isOpen={modalOpen}
          onClose={closeModal}
          position={selectedPosition}
          onPrevious={() => navigatePosition("previous")}
          onNext={() => navigatePosition("next")}
        />
      )}
    </div>
  );
}
