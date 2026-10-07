"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#categorias", label: "Categorias" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#galeria", label: "Galeria" },
  { href: "#como-funciona", label: "Como Pedir" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ${
          scrolled || open ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between rounded-full transition-all duration-500 ${
            scrolled || open ? "glass shadow-soft py-2 px-4 sm:px-6" : ""
          }`}
        >
          <a href="#top" className="font-display text-xl sm:text-2xl font-bold tracking-tight text-choc">
            Doce<span className="text-gradient-gold">Art</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-choc/80 hover:text-caramel transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#pedido"
            className="hidden lg:inline-flex items-center rounded-full bg-choc text-cream px-5 py-2.5 text-sm font-semibold hover:bg-caramel transition-colors duration-300 shadow-gold"
          >
            Fazer Pedido
          </a>

          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
            className="lg:hidden relative z-[70] p-2 -mr-2 text-choc"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              aria-label="Fechar menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-[55] bg-choc/50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed top-[4.5rem] inset-x-4 z-[60] rounded-3xl bg-cream shadow-soft ring-1 ring-gold/15 p-6 flex flex-col gap-1 max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-choc py-3 border-b border-choc/10 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#pedido"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex justify-center rounded-full bg-choc text-cream px-5 py-3.5 text-sm font-semibold"
              >
                Fazer Pedido
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
