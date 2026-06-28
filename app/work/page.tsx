import Hero from "@/components/Hero";
import WorkBlock from "@/components/WorkBlock";
import TypewriterOnce from "@/components/TypewriterOnce";

const sections = [
  {
    category: "STARTUPS.",
    items: [
      "thirdlayer — ai agents for enterprise built off persistent memory. seo optimization & 100k+ views in one day.",
      "buddy design — 20+ outbound pipelines in top-of-funnel gtm for consumer & wellness hardware. featured in nyt.",
      "cluely — 5m+ views, 3+ content sprints iterated. series a backed by a16z.",
    ],
  },
  {
    category: "RESEARCH.",
    items: [
      "kireev lab — 2d biosensor development & iontophoresis frameworks for biomolecules. built internal tool to reduce data processing time.",
      "umass ours — consulted undergrads 1:1 & led outbound strategy to place them into research labs. 60 undergrads.",
      "hocky group via gstem, nyu — molecular dynamic simulations to assess kinetic bond rates. conducted @ 16.",
    ],
  },
  {
    category: "CONTENT & COMMUNITY.",
    items: [
      "personal brand — 10k+ across platforms. 1m+ views. partnered with microsoft, olehenriksen, beauty of joseon, etc.",
      "fomo group — 5+ hackathons organized across 3 cities. partnered with columbia, phia (+1 successful ml hire), oura, etc.",
      "umass tek — built & scaled a community of 45 ambitious builders in tech @ umass amherst. 200k+ impressions, 20+ events, 30+ company pipelines.",
    ],
  },
];

export default function Work() {
  return (
    <>
      <Hero
        title="work."
        subtitle={<TypewriterOnce text="where passion lies at the intersection of tech & creativity." />}
      />
      <section className="px-20 pb-16">
        <div className="space-y-8">
          {sections.map((s) => (
            <WorkBlock key={s.category} category={s.category} items={s.items} />
          ))}
        </div>
      </section>
    </>
  );
}
