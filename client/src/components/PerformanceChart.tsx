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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceChartProps {
  tzfSeries: number[];
}

export function PerformanceChart({ tzfSeries }: PerformanceChartProps) {
  const data = {
    labels: tzfSeries.map((_, i) => `Sessão ${i + 1}`),
    datasets: [
      {
        label: "TZF (%)",
        data: tzfSeries.map(v => v * 100),
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
          label: (context: any) => `${context.parsed.y.toFixed(1)}%`,
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
