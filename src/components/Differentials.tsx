"use client";

import { motion } from "framer-motion";
import { Wheat, Clock, Palette, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Wheat,
    title: "Ingredientes Selecionados",
    desc: "Chocolate belga, manteiga francesa e frutas frescas escolhidas a dedo.",
  },
  {
    icon: Palette,
    title: "Design Sob Medida",
    desc: "Cada bolo é desenhado com base no tema e na história da sua celebração.",
  },
  {
    icon: Clock,
    title: "Feito na Hora",
    desc: "Produção artesanal e recente para garantir sabor e frescor perfeitos.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Exclusivo",
    desc: "Acompanhamento próximo, do orçamento à entrega, com carinho de verdade.",
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-choc text-cream overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[36rem] h-[36rem] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #D4AF37, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            Por que escolher a DoceArt
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold">
            Qualidade artesanal, do primeiro ao último detalhe
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-dark rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gold/15 text-gold mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-3 text-sm text-cream/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
