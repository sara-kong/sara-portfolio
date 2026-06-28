import Hero from "@/components/Hero";
import Typewriter from "@/components/Typewriter";

export default function Home() {
  return (
    <Hero
      title="hi, i'm sara kong."
      subtitle={<Typewriter />}
      blurb="i build at the intersection of technology and creativity — from ai agents to content platforms to biosensors. i care about ambitious things and the people who make them."
    />
  );
}
