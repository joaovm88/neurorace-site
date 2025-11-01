import { Card } from "@/components/ui/card";

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
      className={`p-6 hover-elevate ${isFirstPlace ? "border-yellow-500 shadow-lg shadow-yellow-500/20" : ""}`}
      data-testid={`ranking-item-${position}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center min-w-[60px]">
            {isFirstPlace && (
              <span className="text-2xl mb-1" data-testid="icon-crown">
                👑
              </span>
            )}
            <span className="text-3xl font-bold text-muted-foreground" data-testid={`text-position-${position}`}>
              #{position}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-bold" data-testid={`text-player-${position}`}>
              {playerEmail}
            </h3>
            <p className="text-sm text-muted-foreground">
              Recorde de Foco: {scorePercent}%
            </p>
          </div>
        </div>
        <div className="text-3xl font-bold text-[#38bdf8]" data-testid={`text-score-${position}`}>
          {scorePercent}%
        </div>
      </div>
    </Card>
  );
}
