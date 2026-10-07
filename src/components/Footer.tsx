import { Camera, ThumbsUp, MessageCircle, MapPin, Mail } from "lucide-react";

const columns = [
  {
    title: "Catálogo",
    links: [
      { label: "Bolos Caseiros", href: "#categorias" },
      { label: "Bolos de Festa", href: "#categorias" },
      { label: "Cupcakes", href: "#categorias" },
      { label: "Doces Personalizados", href: "#categorias" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Diferenciais", href: "#diferenciais" },
      { label: "Galeria", href: "#galeria" },
      { label: "Como Pedir", href: "#como-funciona" },
      { label: "Depoimentos", href: "#depoimentos" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Fazer Pedido", href: "#pedido" },
      { label: "WhatsApp", href: "https://wa.me/5511999999999" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-choc text-cream pt-20 pb-8 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <a href="#top" className="font-display text-2xl font-bold tracking-tight">
              Doce<span className="text-gold">Art</span>
            </a>
            <p className="mt-4 text-sm text-cream/60 leading-relaxed max-w-xs">
              Confeitaria artesanal premium especializada em bolos caseiros,
              bolos de festa e doces personalizados feitos com amor e
              ingredientes selecionados.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-dark hover:bg-gold hover:text-choc transition-colors"
              >
                <Camera size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-dark hover:bg-gold hover:text-choc transition-colors"
              >
                <ThumbsUp size={18} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-dark hover:bg-gold hover:text-choc transition-colors"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-sm tracking-wide text-gold">
                {col.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream/65 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display font-bold text-sm tracking-wide text-gold">
              Contato
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-cream/65">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                Rua das Confeitarias, 123 — São Paulo, SP
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
                contato@docearte.com
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle size={16} className="mt-0.5 shrink-0 text-gold" />
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} DoceArt Confeitaria. Todos os direitos reservados.</p>
          <p>Feito com carinho para adoçar seus momentos.</p>
        </div>
      </div>
    </footer>
  );
}
