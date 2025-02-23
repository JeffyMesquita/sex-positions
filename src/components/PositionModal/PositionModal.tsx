"use client";

import type { Position } from "@/types/position";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  positionTypeTranslations,
  complexityTranslations,
  dangerousnessTranslations,
  activityTranslations,
} from "@/types/position";

interface PositionModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: Position;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function PositionModal({
  isOpen,
  onClose,
  position,
  onPrevious,
  onNext,
}: PositionModalProps) {
  const positionType = position.positionType.map(
    (type) => positionTypeTranslations[type]
  );

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
    }[position.dangerousness] || "bg-stone-400 text-stone-800 border-stone-600";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="text-center">
          <DialogTitle className="text-balance">{position.name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 relative">
          <Image
            src={position.image || "/placeholder.svg"}
            alt={position.name}
            className="w-full h-64 object-cover rounded-md"
            width={400}
            height={400}
            loading="eager"
          />
          {onPrevious && (
            <Button
              onClick={onPrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full p-2"
              size="icon"
              variant="secondary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}
          {onNext && (
            <Button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2"
              size="icon"
              variant="secondary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-xs text-stone-600 font-bold">
            Tipo:
            <span className="ml-2 flex flex-wrap gap-2">
              {positionType.map((type) => (
                <Badge key={type} className="mr-2" variant="secondary">
                  {type}
                </Badge>
              ))}
            </span>
          </p>
          <p className="text-xs text-stone-600 font-bold">
            Atividade:
            <span className="ml-2 flex flex-wrap gap-2">
              {position.activity.map((activity) => (
                <Badge key={activity} className="mr-2" variant="secondary">
                  {activityTranslations[activity]}
                </Badge>
              ))}
            </span>
          </p>
          <p className="text-xs text-stone-600 font-bold">
            Complexidade:
            <Badge className={`ml-2 ${complexityColor}`} variant="secondary">
              {complexityTranslations[position.complexity].toUpperCase()}
            </Badge>
          </p>

          <p className="text-xs text-stone-600 font-bold">
            Perigo:
            <Badge className={`ml-2 ${dangerousnessColor}`} variant="secondary">
              {dangerousnessTranslations[position.dangerousness].toUpperCase()}
            </Badge>
          </p>
        </div>
        <div className="mt-4 border-t pt-4">
          <h3 className="font-semibold text-lg">Descrição:</h3>
          <p className="mt-2 text-xs text-stone-600 font-bold">
            {position.description}
          </p>
        </div>

        <DialogFooter className="text-xs text-muted-foreground">
          Créditos: &nbsp;
          <a
            href={position.credits.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {position.credits.source}
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
