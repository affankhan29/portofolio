"use client";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div>
        <h3 className="font-serif font-bold text-xl text-[#2B2B28] mb-1">
          Affan Khan <span className="font-serif italic font-normal text-[#C79A3C]">folio</span>
        </h3>
        <p className="footer-tagline">
          Editorial Portfolio — FAST-NUCES Islamabad // 2026
        </p>
      </div>

      <div className="footer-copy flex items-center gap-6">
        <span>&copy; 2026 Affan Khan</span>
        <button
          onClick={scrollToTop}
          type="button"
          className="font-mono text-xs text-[#C79A3C] hover:underline cursor-pointer"
        >
          [ Return to Top ↑ ]
        </button>
      </div>
    </footer>
  );
}
