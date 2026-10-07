"use client";

import { motion } from "framer-motion";
import { MessageCircle, Palette, Truck, PartyPopper } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conte sua ideia",
    desc: "Fale conosco pelo WhatsApp e compartilhe o tema, tamanho e data do evento.",
  },
  {
    icon: Palette,
    title: "Criamos o projeto",
    desc: "Desenvolvemos um design exclusivo com sabores e acabamento sob medida.",
  },
  {
    icon: Truck,
    title: "Produção e entrega",
    desc: "Preparamos tudo fresquinho e entregamos com todo cuidado no dia combinado.",
  },
  {
    icon: PartyPopper,
    title: "Celebre com quem ama",
    desc: "Um bolo único para tornar sua ocasião ainda mais especial e inesquecível.",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12 sm:mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
            Como Pedir
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-choc">
            Do primeiro contato à sua mesa
          </h2>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative text-center sm:text-left"
            >
              <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-choc text-cream shadow-gold mb-6">
                <step.icon size={26} />
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold text-choc text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-choc">{step.title}</h3>
              <p className="mt-2 text-sm text-choc/65 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
