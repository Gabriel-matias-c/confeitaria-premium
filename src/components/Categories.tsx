"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categoryImages } from "@/lib/images";

const categories = [
  {
    title: "Bolos Caseiros",
    desc: "Sabores clássicos com receita de família e textura irresistível.",
    img: categoryImages.caseiros,
  },
  {
    title: "Bolos de Festa",
    desc: "Peças cenográficas para aniversários e celebrações memoráveis.",
    img: categoryImages.festa,
  },
  {
    title: "Cupcakes",
    desc: "Individuais, elegantes e perfeitos para presentear ou compartilhar.",
    img: categoryImages.cupcakes,
  },
  {
    title: "Doces Personalizados",
    desc: "Macarons, trufas e docinhos criados sob medida para seu evento.",
    img: categoryImages.personalizados,
  },
];

export default function Categories() {
  return (
    <section id="categorias" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
            Nosso Catálogo
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-choc">
            Uma criação para cada ocasião
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.title}
              href="#pedido"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-soft aspect-[3/4]"
            >
              <Image
                src={cat.img}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-choc/90 via-choc/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-xl font-bold text-cream">{cat.title}</h3>
                <p className="mt-2 text-sm text-cream/75 leading-relaxed">{cat.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  Ver opções <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
