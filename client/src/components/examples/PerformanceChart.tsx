import { PerformanceChart } from '../PerformanceChart';

export default function PerformanceChartExample() {
  const mockData = [0.60, 0.68, 0.75, 0.82, 0.85, 0.78, 0.88];
  
  return (
    <div className="p-6">
      <PerformanceChart tzfSeries={mockData} />
    </div>
  );
}
