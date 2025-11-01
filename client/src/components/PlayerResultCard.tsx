import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";
// @ts-ignore - QRCode types may not be available
import QRCode from "qrcode";

interface PlayerResultCardProps {
  playerNumber: 1 | 2;
  playerEmail: string;
  tzfScore: number;
  dashboardUrl: string;
}

export function PlayerResultCard({ playerNumber, playerEmail, tzfScore, dashboardUrl }: PlayerResultCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const borderColor = playerNumber === 1 ? "border-t-[#38bdf8]" : "border-t-[#f43f82]";
  const scorePercent = (tzfScore * 100).toFixed(1);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, dashboardUrl, {
        width: 200,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    }
  }, [dashboardUrl]);

  return (
    <Card className={`border-t-4 ${borderColor} text-center`} data-testid={`card-player-${playerNumber}`}>
      <CardHeader>
        <CardTitle className="text-2xl">Jogador {playerNumber}</CardTitle>
        <p className="text-sm text-muted-foreground" data-testid={`text-email-${playerNumber}`}>
          {playerEmail}
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Score Final (TZF)</p>
          <p className="text-4xl font-bold text-[#38bdf8]" data-testid={`text-score-${playerNumber}`}>
            {scorePercent}%
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg inline-block">
          <canvas ref={canvasRef} data-testid={`qrcode-${playerNumber}`} />
        </div>
        <p className="text-xs text-muted-foreground">
          Escaneie para ver sua análise completa
        </p>
      </CardContent>
    </Card>
  );
}
