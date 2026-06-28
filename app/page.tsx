import Hero from "@/components/Hero";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <Hero
      title="hi, i'm sara kong."
      subtitle={<Typewriter />}
    />
  );
}
