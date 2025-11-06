import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import QRCode from "qrcode";

interface PlayerResultCardProps {
  playerNumber: 1 | 2;
  playerEmail: string;
  tzfScore: number;
  dashboardUrl: string;
}

export function PlayerResultCard({ playerNumber, playerEmail, tzfScore, dashboardUrl }: PlayerResultCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isPlayer1 = playerNumber === 1;
  const scoreColor = isPlayer1 ? "text-[#38bdf8]" : "text-[#f43f82]";
  const cardClassName = isPlayer1 
    ? "bg-gradient-to-br from-cyan-50 via-white to-cyan-50 border-t-4 border-t-[#38bdf8]"
    : "bg-gradient-to-br from-pink-50 via-white to-pink-50 border-t-4 border-t-[#f43f82]";

  const scorePercent = (tzfScore * 100).toFixed(1);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, dashboardUrl, {
        width: 200,
        margin: 1,
        color: {
          dark: isPlayer1 ? "#0891b2" : "#be185d", // Cor do QR Code
          light: "#00000000" // Fundo transparente
        }
      });
    }
  }, [dashboardUrl, isPlayer1]);

  return (
    <Card className={`${cardClassName} text-center`} data-testid={`card-player-${playerNumber}`}>
      <CardHeader>
        <CardTitle className="text-2xl">Jogador {playerNumber}</CardTitle>
        <p className="text-sm text-muted-foreground" data-testid={`text-email-${playerNumber}`}>
          {playerEmail}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Score Final (TZF)</p>
          <p className={`text-4xl font-bold ${scoreColor}`} data-testid={`text-score-${playerNumber}`}>
            {scorePercent}%
          </p>
        </div>
        <div className="p-4 rounded-lg inline-block bg-white/50">
          <canvas ref={canvasRef} data-testid={`qrcode-${playerNumber}`} />
        </div>
        <p className="text-xs text-muted-foreground">
          Escaneie para ver sua análise completa
        </p>
      </CardContent>
    </Card>
  );
}
