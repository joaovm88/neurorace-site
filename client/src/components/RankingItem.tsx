import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface RankingItemProps {
  position: number;
  playerEmail: string;
  tzfScore: number;
}

export function RankingItem({ position, playerEmail, tzfScore }: RankingItemProps) {
  const isFirstPlace = position === 1;
  const scorePercent = (tzfScore * 100).toFixed(1);

  return (
    <Card
      className={`p-4 md:p-6 hover-elevate transition-all ${
        isFirstPlace ? "border-2 border-accent shadow-lg shadow-accent/20" : ""
      }`}
      data-testid={`ranking-item-${position}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
          <div className="flex flex-col items-center min-w-[60px]">
            {isFirstPlace && (
              <Trophy className="w-6 h-6 text-accent mb-1" data-testid="icon-crown" />
            )}
            <span className="text-2xl md:text-3xl font-bold text-muted-foreground" data-testid={`text-position-${position}`}>
              #{position}
            </span>
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold break-all" data-testid={`text-player-${position}`}>
              {playerEmail}
            </h3>
            <p className="text-sm text-muted-foreground">
              Recorde de Foco: {scorePercent}%
            </p>
          </div>
        </div>
        <div className="text-3xl font-bold text-primary self-end sm:self-auto" data-testid={`text-score-${position}`}>
          {scorePercent}%
        </div>
      </div>
    </Card>
  );
}
