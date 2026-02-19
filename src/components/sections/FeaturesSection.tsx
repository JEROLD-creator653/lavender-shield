import { useEffect, useRef, useState } from 'react';
import { User, Network, Sliders, Shield, BrainCircuit, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: User,
    title: 'Behavioral Profiling',
    short: 'Builds a unique behavioral baseline per user.',
    long: 'Analyzes typing rhythm, transaction timing patterns, device usage, and spending velocity to construct a dynamic behavioral fingerprint. Deviations trigger elevated risk scores automatically.',
  },
  {
    icon: Network,
    title: 'Graph Signal Detection',
    short: 'Uncovers hidden fraud rings via network analysis.',
    long: 'Uses graph neural networks and community detection algorithms to identify abnormal clusters of accounts. Detects money mule networks, coordinated attacks, and circular transfer patterns.',
  },
  {
    icon: Sliders,
    title: 'Dynamic Risk Threshold Engine',
    short: 'Adapts thresholds based on context.',
    long: 'Risk thresholds adjust dynamically based on user history, time of day, transaction size, and merchant category. Eliminates one-size-fits-all static rules that cause false positives.',
  },
  {
    icon: Shield,
    title: 'Risk Buffer Mechanism',
    short: 'Soft-blocks suspicious transactions temporarily.',
    long: 'Introduces a time-delay buffer for borderline transactions, allowing for manual review or additional authentication without outright rejection — reducing friction for legitimate users.',
  },
  {
    icon: BrainCircuit,
    title: 'Explainable AI Reasoning',
    short: 'Every decision comes with a human-readable explanation.',
    long: 'SHAP values and LIME explanations surface the top contributing factors for each fraud decision. Auditors, compliance teams, and users can understand exactly why a transaction was flagged.',
  },
  {
    icon: Fingerprint,
    title: 'WebAuthn Biometric Auth',
    short: 'Passkey-based authentication for high-risk actions.',
    long: 'Integrates the WebAuthn standard for biometric re-authentication (Face ID, fingerprint) before processing suspicious or high-value transactions — zero password required.',
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.reveal, .feat-card').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--fdt-bg)) 100%)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] blob opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--lavender-mid)) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--violet-deep))' }}
          >
            Advanced Capabilities
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            Six Pillars of
            <br />
            <span className="gradient-text">Intelligent Protection</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            Each capability is engineered for precision, speed, and trust — working in concert
            to provide layered, adaptive fraud defense.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, short, long }, i) => {
            const isOpen = expanded === i;
            return (
              <div
                key={title}
                className="feat-card reveal glass-card rounded-3xl p-7 cursor-pointer group"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  transform: isOpen ? 'translateY(-6px)' : undefined,
                  boxShadow: isOpen
                    ? `0 20px 60px -10px hsl(var(--lavender-mid) / 0.4)`
                    : undefined,
                  transition: 'opacity 0.8s ease, transform 0.3s ease, box-shadow 0.3s ease, filter 0.8s ease',
                }}
                onClick={() => setExpanded(isOpen ? null : i)}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    background: isOpen
                      ? 'linear-gradient(135deg, hsl(var(--lavender-light)), hsl(var(--lavender-mid)))'
                      : 'linear-gradient(135deg, hsl(var(--lavender-light) / 0.3), hsl(var(--lavender-mid) / 0.3))',
                  }}
                >
                  <Icon size={24} style={{ color: 'hsl(var(--violet-deep))' }} />
                </div>

                <h3 className="text-lg font-black mb-2" style={{ color: 'hsl(var(--fdt-text))' }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {short}
                </p>

                {/* Expanded content */}
                <div
                  className="overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isOpen ? '200px' : '0', opacity: isOpen ? 1 : 0 }}
                >
                  <div
                    className="pt-4 text-sm leading-relaxed border-t"
                    style={{
                      color: 'hsl(var(--fdt-text))',
                      borderColor: 'hsl(var(--lavender-light) / 0.4)',
                    }}
                  >
                    {long}
                  </div>
                </div>

                {/* Expand hint */}
                <div
                  className="flex items-center gap-1 text-xs font-semibold mt-3"
                  style={{ color: 'hsl(var(--violet-deep))' }}
                >
                  <span>{isOpen ? 'Show less' : 'Learn more'}</span>
                  <span
                    className="transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(180deg)' : undefined }}
                  >
                    ↓
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
