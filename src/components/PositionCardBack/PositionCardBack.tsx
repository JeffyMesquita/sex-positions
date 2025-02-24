import { Card, CardContent } from "@/components/ui/card";

export function PositionCardBack() {
  return (
    <Card className="w-full h-full max-h-96 flex items-center justify-center bg-secondary">
      <CardContent>
        <div className="text-4xl font-bold text-secondary-foreground">?</div>
      </CardContent>
    </Card>
  );
}
