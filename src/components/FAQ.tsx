"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Com quanto tempo de antecedência devo fazer o pedido?",
    a: "Recomendamos pelo menos 7 dias de antecedência para bolos de festa e 3 dias para bolos caseiros, garantindo tempo ideal para produção e personalização.",
  },
  {
    q: "Vocês entregam em qualquer região?",
    a: "Realizamos entregas em toda a cidade e região metropolitana. Consulte disponibilidade e taxa de entrega para o seu endereço pelo WhatsApp.",
  },
  {
    q: "É possível personalizar sabores e recheios?",
    a: "Sim! Cada bolo pode ser totalmente personalizado — massa, recheio, cobertura e decoração — de acordo com o tema da sua celebração.",
  },
  {
    q: "Vocês atendem restrições alimentares?",
    a: "Trabalhamos com opções sem lactose, sem glúten e veganas mediante consulta prévia, sempre com ingredientes de alta qualidade.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos Pix, cartão e transferência. Solicitamos um sinal para confirmar o pedido e o restante na entrega ou retirada.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel">
            Dúvidas Frequentes
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-choc">
            Perguntas frequentes
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass rounded-2xl overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-choc">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-caramel"
                  >
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-choc/65 leading-relaxed">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
