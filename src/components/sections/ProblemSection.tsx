import { useEffect, useRef, useState } from 'react';
import { TrendingUp, AlertTriangle, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: 40,
    suffix: '%',
    label: 'YoY Increase in UPI Fraud',
    sub: 'Reported by RBI in 2023-24',
    side: 'left',
  },
  {
    icon: AlertTriangle,
    value: 1477,
    suffix: 'Cr',
    label: 'Annual UPI Fraud Losses',
    sub: '₹ losses documented in India',
    side: 'up',
  },
  {
    icon: Clock,
    value: 72,
    suffix: 'hrs',
    label: 'Average Detection Delay',
    sub: 'In traditional rule-based systems',
    side: 'right',
  },
];

function CountUp({ target, suffix, start }: { target: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, target]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          // Trigger reveals
          section.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            el.classList.add('visible');
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
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(var(--lavender-light)) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--destructive))' }}>
            <AlertTriangle size={14} />
            The Problem
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            The Growing Risk in
            <br />
            <span className="gradient-text">Digital Payments</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            As UPI adoption skyrockets across India, so does the sophistication of fraud.
            Traditional systems simply can't keep pace with real-time attackers.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, sub, side }) => {
            const revealClass =
              side === 'left' ? 'reveal-left' : side === 'right' ? 'reveal-right' : 'reveal';
            return (
              <div
                key={label}
                className={`${revealClass} glass-card rounded-3xl p-8 lavender-glow group cursor-default`}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--lavender-light) / 0.3), hsl(var(--lavender-mid) / 0.3))' }}
                >
                  <Icon size={24} style={{ color: 'hsl(var(--violet-deep))' }} />
                </div>

                {/* Count */}
                <div
                  className="text-5xl font-black mb-3 gradient-text"
                >
                  <CountUp target={value} suffix={suffix} start={started} />
                </div>

                {/* Labels */}
                <p className="text-lg font-bold mb-1" style={{ color: 'hsl(var(--fdt-text))' }}>
                  {label}
                </p>
                <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="reveal delay-300 mt-16 glass-card rounded-3xl p-8 md:p-12 text-center"
          style={{ borderLeft: '4px solid hsl(var(--violet-deep))' }}>
          <p className="text-xl md:text-2xl font-semibold leading-relaxed" style={{ color: 'hsl(var(--fdt-text))' }}>
            "Rule-based fraud systems generate{' '}
            <span className="gradient-text font-black">5-10x more false positives</span>{' '}
            than ML-based approaches, while missing 30% of novel fraud patterns."
          </p>
          <p className="mt-4 text-sm font-medium" style={{ color: 'hsl(var(--muted-foreground))' }}>
            — Industry Analysis, 2024
          </p>
        </div>
      </div>
    </section>
  );
}
