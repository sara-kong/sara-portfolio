import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle: ReactNode;
  blurb?: string;
}

export default function Hero({ title, subtitle, blurb }: HeroProps) {
  return (
    <section className="w-full px-20 pt-12 pb-8">
      <div className="max-w-[844px]">
        <h1 className="text-[64px] font-bold leading-[1.21] tracking-[-0.02em] text-black">
          {title}
        </h1>
        <div className="text-base font-normal text-black/75 mt-6">{subtitle}</div>
        {blurb && (
          <p className="text-base font-normal text-black/75 mt-4 leading-relaxed">
            {blurb}
          </p>
        )}
      </div>
    </section>
  );
}
