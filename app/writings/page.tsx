import Link from "next/link";
import Hero from "@/components/Hero";
import TypewriterOnce from "@/components/TypewriterOnce";
import { getWritings } from "@/lib/content";

export default function Writings() {
  const writings = getWritings();

  return (
    <>
      <Hero
        title="writings."
        subtitle={<TypewriterOnce text="letting the thoughts linger." />}
      />
      {writings.length > 0 && (
        <section className="px-20 pb-16">
          <div>
            {writings.map((w) => (
              <div
                key={w.slug}
                className="border-t border-black/10 py-6 flex items-baseline justify-between gap-8"
              >
                <div>
                  {w.link ? (
                    <a
                      href={w.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-normal text-black/80 hover:text-black transition-colors"
                    >
                      {w.title}
                    </a>
                  ) : (
                    <Link
                      href={`/writings/${w.slug}`}
                      className="text-base font-normal text-black/80 hover:text-black transition-colors"
                    >
                      {w.title}
                    </Link>
                  )}
                  {w.blurb && (
                    <p className="text-sm text-black/45 mt-1 leading-relaxed">{w.blurb}</p>
                  )}
                </div>
                {w.date && (
                  <span className="text-sm text-black/35 shrink-0">{w.date}</span>
                )}
              </div>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </section>
      )}
    </>
  );
}
