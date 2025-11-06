import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Timestamp } from "firebase/firestore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Session {
  id: string;
  playerUid?: string;
  startedAt?: Timestamp;
  tzf?: number;
  cvfLabel?: string;
  ircLabel?: string;
  lfoMean?: number;
  badges?: {
    isTZFPB?: boolean;
  };
}

interface PerformanceChartProps {
  allSessions: Session[];
}

export function PerformanceChart({ allSessions }: PerformanceChartProps) {
  const formatTimestamp = (timestamp?: Timestamp) => {
    if (!timestamp) return "Data indisponível";
    const date = timestamp.toDate();
    return date.toLocaleString('pt-BR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
  };

  const data = {
    labels: allSessions.map((session) => formatTimestamp(session.startedAt)),
    datasets: [
      {
        label: "TZF (%)",
        data: allSessions.map(session => (session.tzf || 0) * 100),
        borderColor: "#00CED1",
        backgroundColor: "rgba(0, 206, 209, 0.1)",
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: "#FF5C8D",
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#161b22",
        titleColor: "#f0f6fc",
        bodyColor: "#c9d1d9",
        borderColor: "#30363d",
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        callbacks: {
          title: (context: any) => formatTimestamp(allSessions[context[0].dataIndex].startedAt),
          label: (context: any) => `TZF: ${context.parsed.y.toFixed(1)}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#8b949e",
          callback: (value: any) => `${value}%`,
        },
        grid: {
          color: "#30363d",
        },
      },
      x: {
        ticks: {
          color: "#8b949e",
        },
        grid: {
          color: "#30363d",
        },
      },
    },
  };

  return (
    <Card data-testid="card-performance-chart">
      <CardHeader>
        <CardTitle>Evolução do Foco (TZF)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <Line data={data} options={options} />
        </div>
      </CardContent>
    </Card>
  );
}
