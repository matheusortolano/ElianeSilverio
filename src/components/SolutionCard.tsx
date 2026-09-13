import type { TextBlock } from '../types';
export function SolutionCard({ item, index }: { item: TextBlock; index: number }) {
  return <li className="solution"><span className="solution-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>;
}
