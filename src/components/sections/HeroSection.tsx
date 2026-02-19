import { useEffect, useRef } from 'react';
import { Shield, Zap, Brain } from 'lucide-react';

const features = [
  { icon: Shield, label: 'Real-Time Protection' },
  { icon: Zap, label: 'Sub-100ms Decisions' },
  { icon: Brain, label: 'Ensemble ML Scoring' },
];

export default function HeroSection() {
  const pillsRef = useRef<HTMLDivElement>(null);

  // Magnetic button effect
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLButtonElement>('.magnetic-btn');
    const handlers: { el: HTMLButtonElement; move: (e: MouseEvent) => void; leave: () => void }[] = [];

    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      };
      const leave = () => {
        btn.style.transform = '';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ el: btn, move, leave });
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  // Stagger pill animations
  useEffect(() => {
    if (!pillsRef.current) return;
    const pills = pillsRef.current.querySelectorAll('.pill');
    pills.forEach((pill, i) => {
      setTimeout(() => pill.classList.add('visible'), 600 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--lavender-light) / 0.15) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--lavender-light) / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-fade 6s ease-in-out infinite',
        }}
      />

      {/* Gradient blobs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lavender-light)) 0%, hsl(var(--lavender-mid)) 60%, transparent 80%)',
          animation: 'blob-morph 10s ease-in-out infinite, float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-5%] w-[450px] h-[450px] blob-2 opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lavender-mid)) 0%, hsl(var(--violet-deep) / 0.5) 70%, transparent 90%)',
          animation: 'blob-morph 12s ease-in-out infinite reverse, drift 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[30%] left-[10%] w-[200px] h-[200px] blob-3 opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lavender-light) / 0.8) 0%, transparent 80%)',
          animation: 'blob-morph 7s ease-in-out infinite, float 9s ease-in-out infinite',
          animationDelay: '-4s',
        }}
      />

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(var(--lavender-light) / 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-medium"
          style={{ color: 'hsl(var(--violet-deep))' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: 'hsl(var(--violet-deep))' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'hsl(var(--violet-deep))' }} />
          </span>
          FDT · AI-Powered Fraud Detection System
        </div>

        {/* Headline */}
        <h1 className="reveal delay-100 text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          style={{ color: 'hsl(var(--fdt-text))' }}>
          Real-Time AI{' '}
          <span className="gradient-text">Fraud Detection</span>
          <br />
          for UPI Transactions
        </h1>

        {/* Subheadline */}
        <p className="reveal delay-200 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'hsl(var(--muted-foreground))' }}>
          Proactive, explainable fraud prevention powered by ensemble machine learning —
          detecting threats before they complete, protecting every transaction in real time.
        </p>

        {/* Feature pills */}
        <div ref={pillsRef} className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {features.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="pill reveal flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-semibold"
              style={{ color: 'hsl(var(--violet-deep))' }}
            >
              <Icon size={16} />
              {label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="reveal delay-400 flex flex-wrap items-center justify-center gap-4">
          <button className="magnetic-btn btn-gradient px-8 py-4 rounded-2xl font-bold text-base">
            Watch Demo
          </button>
          <button
            className="magnetic-btn px-8 py-4 rounded-2xl font-bold text-base glass-card transition-all duration-300 hover:shadow-lg"
            style={{ color: 'hsl(var(--violet-deep))', border: '1.5px solid hsl(var(--lavender-light))' }}
          >
            View User Web App
          </button>
          <button
            className="magnetic-btn px-8 py-4 rounded-2xl font-bold text-base glass-card transition-all duration-300 hover:shadow-lg"
            style={{ color: 'hsl(var(--violet-deep))', border: '1.5px solid hsl(var(--lavender-light))' }}
          >
            View Admin Console
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="reveal delay-600 mt-16 flex justify-center">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Scroll to explore
            </span>
            <div
              className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
              style={{ border: '1.5px solid hsl(var(--lavender-mid))' }}
            >
              <div
                className="w-1.5 h-3 rounded-full"
                style={{
                  background: 'hsl(var(--violet-deep))',
                  animation: 'float 1.5s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
