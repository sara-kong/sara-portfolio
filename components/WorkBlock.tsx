interface WorkBlockProps {
  category: string;
  items: string[];
}

export default function WorkBlock({ category, items }: WorkBlockProps) {
  return (
    <div>
      <h2 className="text-2xl font-normal text-black mb-4">{category}</h2>
      <div className="space-y-3">
        {items.map((item, i) => (
          <p key={i} className="text-base font-normal leading-relaxed text-black/80">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
