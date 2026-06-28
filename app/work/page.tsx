import Hero from "@/components/Hero";
import WorkBlock from "@/components/WorkBlock";
import TypewriterOnce from "@/components/TypewriterOnce";
import { getWorkItems } from "@/lib/content";

export default function Work() {
  const sections = getWorkItems();

  return (
    <>
      <Hero
        title="work."
        subtitle={
          <TypewriterOnce text="where passion lies at the intersection of tech & creativity." />
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
