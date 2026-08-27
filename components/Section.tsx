import { Reveal } from "./Reveal";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border/60 py-16">
      <Reveal>
        <h2 className="mb-8 font-mono text-sm uppercase tracking-widest text-muted">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
