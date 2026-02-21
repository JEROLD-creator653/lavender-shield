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
      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto shadow-lg"
      style={{
        background: show 
          ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' 
          : 'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
        animation: `check-pop 0.5s ${delay}ms ease both`,
        opacity: 0,
        transform: 'scale(0.5)',
      }}
    >
      {show ? (
        <Check size={18} color="#ffffff" strokeWidth={3} />
      ) : (
        <X size={18} color="#ffffff" strokeWidth={3} />
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

      <div className="max-w-4xl mx-auto relative z-10">
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
        <div 
          className="reveal delay-300 rounded-3xl overflow-hidden"
          style={{
            background: 'hsl(var(--card))',
            boxShadow: '0 25px 50px -12px hsl(var(--lavender-deep) / 0.25), 0 0 0 1px hsl(var(--border))',
          }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-3 px-8 py-6 font-bold text-sm uppercase tracking-wider"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--violet-deep)) 0%, hsl(var(--lavender-deep)) 100%)',
              color: '#ffffff',
            }}
          >
            <div>Feature</div>
            <div className="text-center text-red-200">Traditional</div>
            <div className="text-center text-emerald-200 font-black">
              FDT ✦
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ feature, traditional, fdt }, i) => (
            <div
              key={feature}
              className="grid grid-cols-3 px-8 py-5 items-center text-sm text-center border-t group transition-all duration-300 hover:bg-muted/20"
              style={{
                borderColor: 'hsl(var(--border))',
              }}
            >
              {/* Feature name */}
              <div className="font-bold text-left" style={{ color: 'hsl(var(--fdt-text))' }}>
                {feature}
              </div>

              {/* Traditional value */}
              <div className="flex flex-col items-center gap-3">
                {visible && <AnimatedCheck show={false} delay={i * 100} />}
                <span className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {traditional}
                </span>
              </div>

              {/* FDT value */}
              <div className="flex flex-col items-center gap-3">
                {visible && <AnimatedCheck show={true} delay={i * 100 + 200} />}
                <span
                  className="text-sm font-bold"
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
