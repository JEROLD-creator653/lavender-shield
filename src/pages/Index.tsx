import { useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import WorkflowSection from '@/components/sections/WorkflowSection';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import CTASection from '@/components/sections/CTASection';
import FooterSection from '@/components/sections/FooterSection';

export default function Index() {
  // Global scroll reveal — runs after all sections mount
  useEffect(() => {
    const allRevealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    allRevealEls.forEach((el) => observer.observe(el));

    // Magnetic button effect — global
    const btns = document.querySelectorAll<HTMLElement>('.magnetic-btn');
    const cleanup: (() => void)[] = [];

    btns.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      };
      const leave = () => {
        btn.style.transform = '';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      cleanup.push(() => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    });

    return () => {
      observer.disconnect();
      cleanup.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        background: 'hsl(var(--fdt-bg))',
        color: 'hsl(var(--fdt-text))',
        fontFamily: "'Inter', -apple-system, sans-serif",
      }}
    >
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ComparisonSection />
      <WorkflowSection />
      <ArchitectureSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
