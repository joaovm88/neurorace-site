import { RankingItem } from '../RankingItem';

export default function RankingItemExample() {
  return (
    <div className="space-y-4 p-6">
      <RankingItem position={1} playerEmail="piloto.campeao@email.com" tzfScore={0.89} />
      <RankingItem position={2} playerEmail="segundo.lugar@email.com" tzfScore={0.85} />
      <RankingItem position={3} playerEmail="terceiro@email.com" tzfScore={0.78} />
    </div>
  );
}
