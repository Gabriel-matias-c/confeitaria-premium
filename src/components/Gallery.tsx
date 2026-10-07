"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/lib/images";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function close() {
    setActiveIndex(null);
  }

  function next(e?: React.MouseEvent) {
    e?.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  }

  function prev(e?: React.MouseEvent) {
    e?.stopPropagation();
    setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  }

  return (
    <section id="galeria" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-10 sm:mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
            Galeria
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-choc">
            Cada detalhe conta uma história
          </h2>
        </motion.div>

        <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <motion.button
              key={img.src}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
              className="group relative mb-4 w-full overflow-hidden rounded-2xl shadow-soft block break-inside-avoid"
              style={{ height: img.h }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-choc/0 group-hover:bg-choc/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-choc/90 backdrop-blur-sm px-6"
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-cream/80 hover:text-gold transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            <button
              onClick={prev}
              className="absolute left-4 sm:left-8 text-cream/80 hover:text-gold transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl aspect-[4/5] rounded-3xl overflow-hidden shadow-soft"
            >
              <Image
                src={galleryImages[activeIndex].src}
                alt={galleryImages[activeIndex].alt}
                fill
                sizes="90vw"
                className="object-cover"
              />
            </motion.div>

            <button
              onClick={next}
              className="absolute right-4 sm:right-8 text-cream/80 hover:text-gold transition-colors"
              aria-label="Próxima"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
