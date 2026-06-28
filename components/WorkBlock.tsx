export interface WorkItem {
  title: string;
  blurb?: string;
  link?: string;
}

interface WorkBlockProps {
  category: string;
  items: WorkItem[];
}

export default function WorkBlock({ category, items }: WorkBlockProps) {
  return (
    <div>
      <h2 className="text-2xl font-normal text-black mb-4">{category}</h2>
      <div className="space-y-3">
        {items.map((item, i) => {
          const text = item.blurb ? `${item.title} — ${item.blurb}` : item.title;
          return item.link ? (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-normal leading-relaxed text-black/80 hover:text-black transition-colors"
            >
              {text}
            </a>
          ) : (
            <p key={i} className="text-base font-normal leading-relaxed text-black/80">
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}
