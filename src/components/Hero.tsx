"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import FloatingDecor from "./FloatingDecor";
import { heroCake } from "@/lib/images";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const springConfig = { stiffness: 120, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), springConfig);
  const translateY = useSpring(useTransform(my, [-0.5, 0.5], [-10, 10]), springConfig);
  const shineX = useTransform(mx, [-0.5, 0.5], ["20%", "80%"]);
  const shineY = useTransform(my, [-0.5, 0.5], ["20%", "80%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    mx.set(px);
    my.set(py);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden bg-gradient-to-b from-cream via-cream to-[#fdeee1]"
    >
      <FloatingDecor />

      <div
        className="absolute -top-40 -right-40 w-[32rem] h-[32rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #A66A3F, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-caramel">
            Confeitaria Artesanal Premium
          </span>

          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] text-choc">
            Bolos que
            <br />
            <span className="text-gradient-gold">despertam desejo.</span>
          </h1>

          <p className="mt-6 text-lg text-choc/70 max-w-md leading-relaxed">
            Criações caseiras e de festa feitas à mão, com ingredientes
            selecionados e acabamento impecável — para momentos que merecem
            ser inesquecíveis.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#pedido"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-choc text-cream px-8 py-4 text-sm font-semibold shadow-gold hover:bg-caramel transition-all duration-300 hover:-translate-y-0.5"
            >
              Fazer Pedido
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold text-choc hover:shadow-soft transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen size={18} />
              Ver Catálogo
            </a>
          </div>

          <div className="mt-10 sm:mt-14 flex items-center gap-4 sm:gap-8">
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-choc whitespace-nowrap">+5.000</p>
              <p className="text-[11px] sm:text-xs text-choc/60 mt-1 whitespace-nowrap">bolos entregues</p>
            </div>
            <div className="h-8 sm:h-10 w-px bg-choc/15 shrink-0" />
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-choc whitespace-nowrap">4.9/5</p>
              <p className="text-[11px] sm:text-xs text-choc/60 mt-1 whitespace-nowrap">avaliação média</p>
            </div>
            <div className="h-8 sm:h-10 w-px bg-choc/15 shrink-0" />
            <div>
              <p className="font-display text-xl sm:text-3xl font-bold text-choc whitespace-nowrap">100%</p>
              <p className="text-[11px] sm:text-xs text-choc/60 mt-1 whitespace-nowrap">artesanal</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
          style={{ perspective: 1200 }}
        >
          <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative mx-auto aspect-square max-w-[80%] sm:max-w-md lg:max-w-lg"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
                y: translateY,
                transformStyle: "preserve-3d",
              }}
              className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-soft ring-1 ring-gold/20"
            >
              <Image
                src={heroCake}
                alt="Bolo premium de chocolate com acabamento artesanal"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
                style={{ transform: "translateZ(20px)" }}
              />
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: useTransform(
                    [shineX, shineY],
                    ([x, y]) =>
                      `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.35), transparent 55%)`
                  ),
                }}
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-4 shadow-soft max-w-[45%] sm:max-w-none"
            >
              <p className="font-display text-xs sm:text-lg font-bold text-choc whitespace-nowrap">🍫 Premium</p>
              <p className="text-[10px] sm:text-xs text-choc/60 whitespace-nowrap">Chocolate belga</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -right-3 sm:-top-6 sm:-right-6 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-4 shadow-soft max-w-[50%] sm:max-w-none"
            >
              <p className="font-display text-xs sm:text-lg font-bold text-choc whitespace-nowrap">✨ Feito à mão</p>
              <p className="text-[10px] sm:text-xs text-choc/60 whitespace-nowrap">Sob encomenda</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
