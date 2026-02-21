import { useEffect, useRef } from 'react';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--lavender-light) / 0.4) 40%, hsl(var(--lavender-mid) / 0.3) 100%)',
        }}
      />

      {/* Floating blobs */}
      <div
        className="absolute top-[-80px] left-[10%] w-[300px] h-[300px] blob opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lavender-light)) 0%, transparent 70%)',
          animation: 'blob-morph 8s ease-in-out infinite, float 7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[10%] w-[250px] h-[250px] blob-2 opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--violet-deep) / 0.5) 0%, transparent 70%)',
          animation: 'blob-morph 10s ease-in-out infinite reverse, drift 10s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div
          className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 text-sm font-semibold"
          style={{ color: 'hsl(var(--violet-deep))' }}
        >
          ✦ Get Started Today
        </div>

        {/* Headline */}
        <h2 className="reveal delay-100 text-4xl md:text-6xl font-black leading-tight mb-6"
          style={{ color: 'hsl(var(--fdt-text))' }}>
          Secure Digital Payments
          <br />
          <span className="gradient-text">Before Fraud Happens</span>
        </h2>

        {/* Sub */}
        <p className="reveal delay-200 text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'hsl(var(--muted-foreground))' }}>
          FDT gives every UPI transaction a real-time AI guardian — proactive, explainable,
          and always on. Join the next generation of digital payment security.
        </p>

        {/* Buttons */}
        <div className="reveal delay-300 flex flex-wrap items-center justify-center gap-4">
          <a href="https://fdt-frontend.onrender.com" target="_blank" rel="noopener noreferrer" className="magnetic-btn btn-gradient px-10 py-4 rounded-2xl font-bold text-base shadow-lg">
            View User Web App
          </a>
          <a
            href="https://fdt-admin-backend.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-10 py-4 rounded-2xl font-bold text-base glass-card transition-all duration-300 hover:shadow-lg"
            style={{
              color: 'hsl(var(--violet-deep))',
              border: '1.5px solid hsl(var(--lavender-light))',
            }}
          >
            View Activity Dashboard
          </a>
        </div>

        {/* Trust strip */}
        <div className="reveal delay-400 mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
          {['Real-Time Detection', 'Explainable AI', 'WebAuthn Ready', 'RBI Compliant Design'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm font-semibold" style={{ color: 'hsl(var(--fdt-text))' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(var(--violet-deep))' }} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
