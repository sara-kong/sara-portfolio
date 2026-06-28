import Hero from "@/components/Hero";
import TypewriterOnce from "@/components/TypewriterOnce";

export default function Writings() {
  return (
    <Hero
      title="writings."
      subtitle={<TypewriterOnce text="letting the thoughts linger." />}
    />
  );
}
