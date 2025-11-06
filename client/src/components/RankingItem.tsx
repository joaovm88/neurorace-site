import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface RankingItemProps {
  position: number;
  playerEmail: string;
  tzfScore: number;
}

export function RankingItem({ position, playerEmail, tzfScore }: RankingItemProps) {
  const scorePercent = (tzfScore * 100).toFixed(1);

  const getCardClassName = () => {
    switch (position) {
      case 1:
        return "border-2 border-amber-400 bg-gradient-to-br from-amber-50 via-white to-amber-50 shadow-lg shadow-amber-400/20";
      case 2:
        return "border-2 border-slate-400 bg-gradient-to-br from-slate-50 via-white to-slate-50 shadow-lg shadow-slate-400/20";
      case 3:
        return "border-2 border-orange-400 bg-gradient-to-br from-orange-50 via-white to-orange-50 shadow-lg shadow-orange-400/20";
      default:
        return "";
    }
  };

  return (
    <Card
      className={`p-4 md:p-6 hover-elevate transition-all ${getCardClassName()}`}
      data-testid={`ranking-item-${position}`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto">
          <div className="flex flex-col items-center min-w-[60px]">
            {position === 1 && (
              <Trophy className="w-6 h-6 text-amber-400 mb-1" data-testid="icon-crown" />
            )}
            {position === 2 && (
              <Trophy className="w-6 h-6 text-slate-400 mb-1" data-testid="icon-crown" />
            )}
            {position === 3 && (
              <Trophy className="w-6 h-6 text-orange-400 mb-1" data-testid="icon-crown" />
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
