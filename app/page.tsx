import Hero from "@/components/Hero";
import Typewriter from "@/components/Typewriter";
import About from "@/components/About";
import { getAboutContent } from "@/lib/content";

export default function Home() {
  const aboutParagraphs = getAboutContent();
  return (
    <>
      <Hero
        title="hi, i'm sara kong."
        subtitle={<Typewriter />}
      />
      <About paragraphs={aboutParagraphs} />
    </>
  );
}
