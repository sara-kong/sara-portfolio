import Hero from "@/components/Hero";

const articles = [
  "on building things that matter",
  "what startups taught me about speed",
  "the intersection of tech and culture",
];

export default function Writings() {
  return (
    <>
      <Hero
        title="writings."
        subtitle="letting the thoughts linger."
      />
      <section className="px-20 py-16">
        <div className="space-y-0">
          {articles.map((title, i) => (
            <div
              key={i}
              className="border-t border-black py-8 flex items-center justify-between group cursor-pointer"
            >
              <p className="text-2xl font-normal text-black group-hover:opacity-60 transition-opacity">
                {title}
              </p>
              <span className="text-2xl text-black/40">→</span>
            </div>
          ))}
          <div className="border-t border-black" />
        </div>
      </section>
    </>
  );
}
