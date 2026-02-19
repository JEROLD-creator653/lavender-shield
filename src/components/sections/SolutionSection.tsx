import { useEffect, useRef } from 'react';
import { Smartphone, Activity, BarChart2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Smartphone,
    title: 'User Initiates Transaction',
    desc: 'The moment a UPI payment is submitted, FDT captures over 40 behavioral and contextual signals in real time.',
    visual: 'phone',
  },
  {
    num: '02',
    icon: Activity,
    title: 'Behavioral Feature Extraction',
    desc: 'Device fingerprint, typing rhythm, geolocation velocity, and graph embeddings are extracted and vectorized.',
    visual: 'nodes',
  },
  {
    num: '03',
    icon: BarChart2,
    title: 'Ensemble ML Scoring',
    desc: 'XGBoost, Random Forest, and Isolation Forest models score the transaction. Their outputs are fused into a unified risk score.',
    visual: 'bars',
  },
  {
    num: '04',
    icon: CheckCircle2,
    title: 'Decision Engine',
    desc: 'The risk score triggers one of three outcomes — with full explainability and a user-facing audit trail.',
    visual: 'decision',
  },
];

function PhoneVisual() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="w-32 h-56 rounded-3xl relative overflow-hidden flex flex-col"
        style={{
          background: 'linear-gradient(180deg, hsl(var(--fdt-text)) 0%, hsl(245 80% 30%) 100%)',
          boxShadow: '0 20px 60px -10px hsl(var(--violet-deep) / 0.4)',
        }}
      >
        {/* Screen */}
        <div className="flex-1 m-2 rounded-2xl overflow-hidden" style={{ background: 'hsl(var(--fdt-bg))' }}>
          <div className="px-3 pt-3 pb-2">
            <div className="text-xs font-bold mb-2" style={{ color: 'hsl(var(--fdt-text))' }}>Send ₹ 2,500</div>
            <div className="h-1.5 rounded-full mb-1.5" style={{ background: 'hsl(var(--lavender-light) / 0.5)', width: '80%' }} />
            <div className="h-1.5 rounded-full mb-3" style={{ background: 'hsl(var(--lavender-light) / 0.3)', width: '50%' }} />
            <div
              className="text-center py-1.5 rounded-xl text-xs font-bold text-white"
              style={{ background: 'linear-gradient(135deg, hsl(var(--lavender-light)), hsl(var(--violet-deep)))' }}
            >
              PAY NOW
            </div>
          </div>
          {/* Animated scanning line */}
          <div
            className="mx-2 h-0.5 rounded"
            style={{
              background: 'hsl(var(--lavender-mid))',
              animation: 'float 1.5s ease-in-out infinite',
              marginTop: '4px',
            }}
          />
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-8 h-1 rounded-full" style={{ background: 'hsl(0 0% 40%)' }} />
        </div>
      </div>
    </div>
  );
}

function NodesVisual() {
  const nodes = [
    { x: 20, y: 50, label: 'Device' },
    { x: 50, y: 20, label: 'Geo' },
    { x: 80, y: 50, label: 'Graph' },
    { x: 50, y: 80, label: 'Behavior' },
    { x: 50, y: 50, label: 'ML', center: true },
  ];
  const lines = [
    [0, 4], [1, 4], [2, 4], [3, 4],
  ];

  return (
    <div className="flex items-center justify-center">
      <svg width="180" height="140" viewBox="0 0 100 100">
        {lines.map(([a, b], i) => (
          <line
            key={i}
            x1={`${nodes[a].x}%`} y1={`${nodes[a].y}%`}
            x2={`${nodes[b].x}%`} y2={`${nodes[b].y}%`}
            stroke="hsl(263 70% 57% / 0.4)" strokeWidth="1"
            strokeDasharray="4 2"
            style={{ animation: `fade-in 0.5s ${i * 0.2}s ease forwards`, opacity: 0 }}
          />
        ))}
        {nodes.map(({ x, y, label, center }) => (
          <g key={label}>
            <circle
              cx={`${x}%`} cy={`${y}%`} r={center ? "8" : "5"}
              fill={center ? "hsl(263 70% 57%)" : "hsl(260 100% 87%)"}
              style={{ animation: center ? 'node-ping 2s ease-in-out infinite' : undefined }}
            />
            <text
              x={`${x}%`} y={`${y + (center ? 14 : 11)}%`}
              textAnchor="middle" fontSize="6"
              fill="hsl(245 60% 20%)" fontWeight="600"
            >
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function BarsVisual() {
  const bars = [
    { h: 40, label: 'XGBoost', color: 'hsl(var(--lavender-light))' },
    { h: 65, label: 'RF', color: 'hsl(var(--lavender-mid))' },
    { h: 55, label: 'IsoF', color: 'hsl(var(--violet-deep))' },
    { h: 75, label: 'Score', color: 'hsl(var(--lavender-mid))' },
  ];

  return (
    <div className="flex items-end justify-center gap-4 h-24 px-4">
      {bars.map(({ h, label, color }, i) => (
        <div key={label} className="flex flex-col items-center gap-1">
          <div
            className="w-8 rounded-t-lg"
            style={{
              height: `${h}px`,
              background: color,
              transformOrigin: 'bottom',
              animation: `bar-grow 0.8s ${i * 0.15}s cubic-bezier(0.4,0,0.2,1) both`,
              opacity: 0.9,
            }}
          />
          <span className="text-xs font-semibold" style={{ color: 'hsl(var(--muted-foreground))' }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function DecisionVisual() {
  const decisions = [
    { label: 'ALLOW', color: '#22c55e', bg: '#dcfce7' },
    { label: 'DELAY', color: '#f59e0b', bg: '#fef3c7' },
    { label: 'BLOCK', color: '#ef4444', bg: '#fee2e2' },
  ];

  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {decisions.map(({ label, color, bg }, i) => (
        <div
          key={label}
          className="px-4 py-2 rounded-xl font-black text-sm"
          style={{
            background: bg,
            color,
            boxShadow: `0 4px 20px -4px ${color}66`,
            animation: `fade-up 0.5s ${i * 0.15}s ease both`,
          }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

const visuals: Record<string, React.ReactNode> = {
  phone: <PhoneVisual />,
  nodes: <NodesVisual />,
  bars: <BarsVisual />,
  decision: <DecisionVisual />,
};

export default function SolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.step-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    // Also handle text elements
    section.querySelectorAll('.reveal').forEach((el) => {
      const obs2 = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) el.classList.add('visible');
      }, { threshold: 0.1 });
      obs2.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: 'hsl(var(--fdt-bg))' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--violet-deep))' }}
          >
            The Solution
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            How FDT Works —
            <br />
            <span className="gradient-text">Frame by Frame</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            A four-stage real-time pipeline that intercepts, analyzes, scores, and decides —
            all within milliseconds.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="step-card reveal glass-card rounded-3xl p-8 lavender-glow group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span
                    className="text-5xl font-black opacity-20 select-none"
                    style={{ color: 'hsl(var(--violet-deep))' }}
                  >
                    {step.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, hsl(var(--lavender-light) / 0.4), hsl(var(--lavender-mid) / 0.4))' }}
                  >
                    <Icon size={22} style={{ color: 'hsl(var(--violet-deep))' }} />
                  </div>
                </div>

                {/* Visual */}
                <div
                  className="rounded-2xl p-6 mb-6 flex items-center justify-center min-h-[120px]"
                  style={{ background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--lavender-light) / 0.15) 100%)' }}
                >
                  {visuals[step.visual]}
                </div>

                <h3 className="text-xl font-black mb-3" style={{ color: 'hsl(var(--fdt-text))' }}>
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
