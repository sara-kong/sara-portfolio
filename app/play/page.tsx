import Hero from "@/components/Hero";
import WorkBlock from "@/components/WorkBlock";
import TypewriterOnce from "@/components/TypewriterOnce";
import { getPlayItems } from "@/lib/content";

export default function Play() {
  const sections = getPlayItems();

  return (
    <>
      <Hero
        title="play."
        subtitle={
          <TypewriterOnce text="some by design, some by necessity, all by passion." />
        }
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
