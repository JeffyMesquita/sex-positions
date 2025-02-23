"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DailyPosition } from "@/components/DailyPosition";
import { RandomPosition } from "@/components/RandomPosition";
import { AllPositions } from "@/components/AllPositions";

export default function Home() {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-8">
        Este é o <span className="text-red-600">Posições de Sexo!</span>
      </h1>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 text-center gap-2">
          <TabsTrigger value="daily" className="text-xs">
            Posição do Dia
          </TabsTrigger>
          <TabsTrigger value="random" className="text-xs">
            Posição Aleatória
          </TabsTrigger>
          <TabsTrigger value="all" className="text-xs">
            Todas as Posições
          </TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <DailyPosition />
        </TabsContent>
        <TabsContent value="random">
          <RandomPosition />
        </TabsContent>
        <TabsContent value="all">
          <AllPositions />
        </TabsContent>
      </Tabs>
    </main>
  );
}
