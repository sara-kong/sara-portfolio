import Hero from "@/components/Hero";
import WorkBlock from "@/components/WorkBlock";

const sections = [
  {
    category: "FULL-STACK.",
    items: [
      "find my bathroom — crowdsourced platform to find public bathrooms in new york city.",
      "dubai chocolate chewy cookie map — agentically-seeded map platform to find the nearest dubai chocolate chewy cookies in the us. 100+ users in 2 weeks.",
      "sidequest — an agent that plans out end-to-end travel itineraries and parses travel information from short-form content with a singular command. for nexhacks 2026 @ cmu.",
    ],
  },
  {
    category: "PROTOTYPES.",
    items: [
      "ushower — prototype concept to optimize shower wait times at prev. university's dorms.",
    ],
  },
];

export default function Play() {
  return (
    <>
      <Hero
        title="play."
        subtitle="some by design, some by necessity, all by passion."
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
