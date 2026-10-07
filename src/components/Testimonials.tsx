"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonialAvatars } from "@/lib/images";

const testimonials = [
  {
    name: "Camila Andrade",
    role: "Aniversário de 30 anos",
    text: "O bolo ficou ainda mais lindo do que eu tinha imaginado. Todo mundo na festa perguntou onde eu tinha encomendado!",
    avatar: testimonialAvatars[0],
  },
  {
    name: "Rafael Souza",
    role: "Casamento",
    text: "Atendimento impecável do início ao fim. Sabor incrível e um acabamento digno de confeitaria internacional.",
    avatar: testimonialAvatars[1],
  },
  {
    name: "Juliana Prado",
    role: "Chá de bebê",
    text: "Os docinhos personalizados combinaram perfeitamente com a decoração. Superou todas as expectativas.",
    avatar: testimonialAvatars[2],
  },
  {
    name: "Marcos Vinícius",
    role: "Aniversário infantil",
    text: "Pontualidade, cuidado e um bolo delicioso. Já virei cliente fiel da DoceArt para todas as datas especiais.",
    avatar: testimonialAvatars[3],
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#fdeee1] to-cream">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
            Depoimentos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-choc">
            Quem provou, recomenda
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-7 shadow-soft flex flex-col"
            >
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-sm text-choc/75 leading-relaxed flex-1">“{t.text}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-gold/30">
                  <Image src={t.avatar} alt={t.name} fill sizes="44px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-choc">{t.name}</p>
                  <p className="text-xs text-choc/55">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
