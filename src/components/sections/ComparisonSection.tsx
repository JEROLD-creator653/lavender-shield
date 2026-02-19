import { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';

const rows = [
  { feature: 'Decision Timing', traditional: 'Post-Transaction', fdt: 'Real-Time (< 100ms)' },
  { feature: 'Threshold Type', traditional: 'Static / Fixed', fdt: 'Dynamic, Context-Aware' },
  { feature: 'Model Transparency', traditional: 'Black Box', fdt: 'Explainable AI (SHAP/LIME)' },
  { feature: 'Behavioral Profiling', traditional: 'Not Supported', fdt: 'Deep Behavioral Modeling' },
  { feature: 'Adaptability', traditional: 'Manual Rule Updates', fdt: 'Continuous ML Retraining' },
  { feature: 'False Positive Rate', traditional: 'High (5–10×)', fdt: 'Minimized via ML Ensemble' },
];

function AnimatedCheck({ show, delay }: { show: boolean; delay: number }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center mx-auto"
      style={{
        background: show ? '#dcfce7' : '#fee2e2',
        animation: `check-pop 0.5s ${delay}ms ease both`,
        opacity: 0,
      }}
    >
      {show ? (
        <Check size={16} color="#16a34a" />
      ) : (
        <X size={16} color="#ef4444" />
      )}
    </div>
  );
}

export default function ComparisonSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          section.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
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
      style={{ background: 'hsl(var(--fdt-bg))' }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 80%, hsl(var(--lavender-light) / 0.4) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--violet-deep))' }}
          >
            Why FDT?
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            Traditional Systems vs
            <br />
            <span className="gradient-text">FDT Intelligence</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            See exactly where rule-based fraud detection falls short — and how FDT closes every gap.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="reveal delay-300 glass-card rounded-3xl overflow-hidden">
          {/* Table header */}
          <div
            className="grid grid-cols-3 px-6 py-5 font-black text-sm uppercase tracking-widest"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--lavender-light) / 0.2))',
              color: 'hsl(var(--fdt-text))',
            }}
          >
            <div>Feature</div>
            <div className="text-center" style={{ color: '#ef4444' }}>Traditional</div>
            <div
              className="text-center"
              style={{ color: 'hsl(var(--violet-deep))' }}
            >
              FDT ✦
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ feature, traditional, fdt }, i) => (
            <div
              key={feature}
              className="grid grid-cols-3 px-6 py-5 items-center text-sm border-t"
              style={{
                borderColor: 'hsl(var(--border))',
                background: i % 2 === 0 ? 'transparent' : 'hsl(var(--lavender-light) / 0.04)',
              }}
            >
              {/* Feature name */}
              <div className="font-semibold" style={{ color: 'hsl(var(--fdt-text))' }}>
                {feature}
              </div>

              {/* Traditional value */}
              <div className="flex flex-col items-center gap-2">
                {visible && <AnimatedCheck show={false} delay={i * 100} />}
                <span className="text-center text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {traditional}
                </span>
              </div>

              {/* FDT value */}
              <div className="flex flex-col items-center gap-2">
                {visible && <AnimatedCheck show={true} delay={i * 100 + 200} />}
                <span
                  className="text-center text-xs font-semibold"
                  style={{ color: 'hsl(var(--fdt-text))' }}
                >
                  {fdt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
