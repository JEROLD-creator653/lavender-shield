import { useEffect, useRef } from 'react';
import { User, Cpu, BrainCircuit, ShieldCheck, Database, Bell } from 'lucide-react';

const nodes = [
  { icon: User, label: 'User', sub: 'UPI Transaction' },
  { icon: Cpu, label: 'Feature Engine', sub: '40+ signals' },
  { icon: BrainCircuit, label: 'ML Ensemble', sub: 'XGBoost · RF · IsoF' },
  { icon: ShieldCheck, label: 'Risk Engine', sub: 'Dynamic threshold' },
  { icon: Database, label: 'Database', sub: 'PostgreSQL · Redis' },
  { icon: Bell, label: 'Real-Time Alert', sub: 'ALLOW / DELAY / BLOCK' },
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const nodeEls = section.querySelectorAll('.wf-node');
    const lineEls = section.querySelectorAll('.wf-line');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          nodeEls.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 200);
          });
          lineEls.forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 200 + 300);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--fdt-bg)) 0%, hsl(var(--secondary)) 100%)' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 40% at 50% 50%, hsl(var(--lavender-light)) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--violet-deep))' }}
          >
            Transaction Lifecycle
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            End-to-End
            <br />
            <span className="gradient-text">Fraud Detection Pipeline</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            From the moment you tap "Pay" to the final decision — every step tracked, analyzed,
            and actioned in under 100ms.
          </p>
        </div>

        {/* Pipeline — horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {nodes.map(({ icon: Icon, label, sub }, i) => (
            <div key={label} className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              {/* Node */}
              <div
                className="wf-node reveal flex flex-col items-center gap-3"
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                {/* Circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center node-pulse shadow-lg"
                  style={{
                    background:
                      i === nodes.length - 1
                        ? 'linear-gradient(135deg, hsl(var(--lavender-light)), hsl(var(--violet-deep)))'
                        : 'white',
                    boxShadow: '0 8px 30px -8px hsl(var(--lavender-mid) / 0.4)',
                    border: '2px solid hsl(var(--lavender-light) / 0.5)',
                  }}
                >
                  <Icon
                    size={24}
                    style={{
                      color:
                        i === nodes.length - 1
                          ? 'white'
                          : 'hsl(var(--violet-deep))',
                    }}
                  />
                </div>

                {/* Label */}
                <div className="text-center">
                  <div className="text-sm font-black" style={{ color: 'hsl(var(--fdt-text))' }}>
                    {label}
                  </div>
                  <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {sub}
                  </div>
                </div>
              </div>

              {/* Connector line */}
              {i < nodes.length - 1 && (
                <div className="hidden md:block relative flex-1 mx-2">
                  <div
                    className="wf-line pipe-line h-0.5 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, hsl(var(--lavender-light)), hsl(var(--violet-deep)))',
                      minWidth: '40px',
                      transitionDelay: `${i * 200 + 200}ms`,
                    }}
                  />
                  {/* Arrow */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0"
                    style={{
                      borderLeft: '8px solid hsl(var(--violet-deep))',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent',
                    }}
                  />
                </div>
              )}

              {/* Mobile vertical connector */}
              {i < nodes.length - 1 && (
                <div
                  className="md:hidden w-0.5 h-8 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, hsl(var(--lavender-light)), hsl(var(--violet-deep)))',
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom metric strip */}
        <div className="reveal delay-400 mt-20 glass-card rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '< 100ms', label: 'Decision Latency' },
            { value: '40+', label: 'Features Extracted' },
            { value: '3', label: 'ML Models in Ensemble' },
            { value: '99.2%', label: 'Detection Accuracy' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl font-black gradient-text mb-1">{value}</div>
              <div className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
