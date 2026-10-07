"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { ctaBackground } from "@/lib/images";

export default function FinalCTA() {
  return (
    <section id="pedido" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] shadow-soft">
        <Image
          src={ctaBackground}
          alt="Textura de doces artesanais"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-choc/85" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative px-8 py-20 sm:py-24 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            Vamos criar algo doce juntos
          </span>

          <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream max-w-3xl mx-auto leading-tight">
            Seu momento especial merece um bolo à altura
          </h2>

          <p className="mt-6 text-cream/75 max-w-xl mx-auto text-lg">
            Fale agora com nossa equipe e receba um orçamento personalizado em
            poucos minutos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold text-choc px-8 py-4 text-sm font-bold hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5 shadow-gold"
            >
              <MessageCircle size={18} />
              Pedir pelo WhatsApp
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-8 py-4 text-sm font-semibold text-cream hover:-translate-y-0.5 transition-all duration-300"
            >
              Ver Catálogo Completo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
