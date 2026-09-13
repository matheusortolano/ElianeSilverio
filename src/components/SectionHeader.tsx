export function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}
