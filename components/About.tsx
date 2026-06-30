interface AboutProps {
  paragraphs: string[];
}

export default function About({ paragraphs }: AboutProps) {
  if (!paragraphs.length) return null;
  return (
    <section className="w-full px-20 pt-4 pb-12">
      <div className="max-w-[844px] flex flex-col gap-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base font-normal text-black/75 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
