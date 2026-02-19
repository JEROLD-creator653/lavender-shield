import { useEffect, useRef } from 'react';
import { Monitor, Server, BrainCircuit, Database, LayoutDashboard } from 'lucide-react';

const layers = [
  {
    icon: Monitor,
    title: 'React PWA',
    sub: 'Progressive Web App · Service Workers · Offline Support',
    color: 'hsl(var(--lavender-light))',
  },
  {
    icon: Server,
    title: 'FastAPI Backend',
    sub: 'REST + WebSocket · JWT Auth · Rate Limiting',
    color: 'hsl(var(--lavender-mid))',
  },
  {
    icon: BrainCircuit,
    title: 'ML Engine',
    sub: 'XGBoost · Random Forest · Isolation Forest · SHAP',
    color: 'hsl(var(--violet-deep))',
  },
  {
    icon: Database,
    title: 'PostgreSQL + Redis',
    sub: 'Persistent storage · In-memory cache · Session store',
    color: 'hsl(var(--lavender-mid))',
  },
  {
    icon: LayoutDashboard,
    title: 'Admin Dashboard',
    sub: 'Real-time monitoring · Alerts · Analytics · Audit Logs',
    color: 'hsl(var(--lavender-light))',
  },
];

export default function ArchitectureSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.arch-card');
    const connectors = section.querySelectorAll('.arch-connector');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
          cards.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 150));
          connectors.forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 150 + 250));
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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
      {/* Background decoration */}
      <div
        className="absolute left-[-100px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] blob opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(var(--lavender-light)) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 text-sm font-semibold"
            style={{ color: 'hsl(var(--violet-deep))' }}
          >
            System Architecture
          </div>
          <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
            style={{ color: 'hsl(var(--fdt-text))' }}>
            Built on a
            <br />
            <span className="gradient-text">Modern Stack</span>
          </h2>
          <p className="reveal delay-200 text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            A production-grade, layered architecture designed for sub-100ms response times
            and enterprise-scale reliability.
          </p>
        </div>

        {/* Vertical architecture diagram */}
        <div className="flex flex-col items-center gap-0">
          {layers.map(({ icon: Icon, title, sub, color }, i) => (
            <div key={title} className="flex flex-col items-center w-full max-w-lg">
              {/* Layer card */}
              <div
                className="arch-card reveal glass-card rounded-3xl p-6 w-full flex items-center gap-5 lavender-glow group"
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Icon bubble */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}33` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>

                {/* Text */}
                <div>
                  <div className="font-black text-lg mb-1" style={{ color: 'hsl(var(--fdt-text))' }}>
                    {title}
                  </div>
                  <div className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    {sub}
                  </div>
                </div>

                {/* Layer number */}
                <div
                  className="ml-auto text-4xl font-black opacity-10 select-none"
                  style={{ color: 'hsl(var(--violet-deep))' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Connector */}
              {i < layers.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div
                    className="arch-connector pipe-line w-0.5 h-10 rounded-full"
                    style={{
                      background: `linear-gradient(180deg, ${layers[i].color}, ${layers[i + 1].color})`,
                      transformOrigin: 'top center',
                      transitionDelay: `${i * 150 + 200}ms`,
                    }}
                  />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: '5px solid transparent',
                      borderRight: '5px solid transparent',
                      borderTop: `7px solid ${layers[i + 1].color}`,
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
