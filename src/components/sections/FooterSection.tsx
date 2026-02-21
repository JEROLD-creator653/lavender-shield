import { Github } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer
      className="py-12 px-6 relative overflow-hidden"
      style={{ background: 'hsl(var(--fdt-text))' }}
    >
      {/* Subtle top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(var(--lavender-light) / 0.5), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / brand */}
          <div className="flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--lavender-light)), hsl(var(--violet-deep)))',
                color: 'white',
              }}
            >
              F
            </div>
            <div>
              <div className="font-black text-base" style={{ color: 'hsl(var(--lavender-light))' }}>
                FDT
              </div>
              <div className="text-xs" style={{ color: 'hsl(0 0% 60%)' }}>
                Fraud Detection & Trust
              </div>
            </div>
          </div>

          {/* Center attribution */}
          <div className="text-center">
            <p className="text-sm font-semibold" style={{ color: 'hsl(0 0% 70%)' }}>
              FDT Project &nbsp;·&nbsp; Sri Sairam Engineering College &nbsp;·&nbsp; 2026
            </p>
            <p className="text-xs mt-1" style={{ color: 'hsl(0 0% 45%)' }}>
              Real-Time AI Fraud Detection for UPI Transactions
            </p>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/JEROLD-creator653/Fraud-Detection-in-UPI---FDT2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                background: 'hsl(0 0% 100% / 0.08)',
                color: 'hsl(var(--lavender-light))',
                border: '1px solid hsl(var(--lavender-light) / 0.2)',
              }}
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>

        {/* Bottom divider + legal */}
        <div
          className="mt-8 pt-8 text-center text-xs"
          style={{
            borderTop: '1px solid hsl(0 0% 100% / 0.08)',
            color: 'hsl(0 0% 40%)',
          }}
        >
          Built with React · FastAPI · PostgreSQL · Redis · Machine Learning
        </div>
      </div>
    </footer>
  );
}
