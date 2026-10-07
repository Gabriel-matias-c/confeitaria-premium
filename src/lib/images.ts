function unsplash(id: string, params = "auto=format&fit=crop&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const heroCake = unsplash("1578985545062-69928b1d9587", "auto=format&fit=crop&q=85&w=1400");

export const categoryImages = {
  caseiros: unsplash("1571115177098-24ec42ed204d", "auto=format&fit=crop&q=80&w=900"),
  festa: unsplash("1587668178277-295251f900ce", "auto=format&fit=crop&q=80&w=900"),
  cupcakes: unsplash("1607478900766-efe13248b125", "auto=format&fit=crop&q=80&w=900"),
  personalizados: unsplash("1519869325930-281384150729", "auto=format&fit=crop&q=80&w=900"),
};

export const galleryImages = [
  { src: unsplash("1535141192574-5d4897c12636", "auto=format&fit=crop&q=80&w=700"), h: 420, alt: "Bolo decorado com camadas" },
  { src: unsplash("1550617931-e17a7b70dce2", "auto=format&fit=crop&q=80&w=700"), h: 320, alt: "Cupcakes artesanais" },
  { src: unsplash("1587314168485-3236d6710814", "auto=format&fit=crop&q=80&w=700"), h: 500, alt: "Doces sortidos" },
  { src: unsplash("1499636136210-6f4ee915583e", "auto=format&fit=crop&q=80&w=700"), h: 360, alt: "Macarons franceses" },
  { src: unsplash("1464195244916-405fa0a82545", "auto=format&fit=crop&q=80&w=700"), h: 440, alt: "Fatia de bolo de chocolate" },
  { src: unsplash("1486427944299-d1955d23e34d", "auto=format&fit=crop&q=80&w=700"), h: 300, alt: "Confeitaria fina" },
  { src: unsplash("1481391319762-47dff72954d9", "auto=format&fit=crop&q=80&w=700"), h: 480, alt: "Bolo de festa dourado" },
  { src: unsplash("1558326567-98ae2405596b", "auto=format&fit=crop&q=80&w=700"), h: 340, alt: "Bolo com frutas vermelhas" },
  { src: unsplash("1517686469429-8bdb88b9f907", "auto=format&fit=crop&q=80&w=700"), h: 420, alt: "Bolo minimalista" },
  { src: unsplash("1533134242443-d4fd215305ad", "auto=format&fit=crop&q=80&w=700"), h: 360, alt: "Sobremesa individual" },
  { src: unsplash("1546039907-7fa05f864c02", "auto=format&fit=crop&q=80&w=700"), h: 460, alt: "Mesa de doces de festa" },
  { src: unsplash("1542826438-bd32f43d626f", "auto=format&fit=crop&q=80&w=700"), h: 320, alt: "Doce fino decorado" },
];

export const testimonialAvatars = [
  unsplash("1494790108377-be9c29b29330", "auto=format&fit=crop&q=80&w=200&h=200"),
  unsplash("1500648767791-00dcc994a43e", "auto=format&fit=crop&q=80&w=200&h=200"),
  unsplash("1544005313-94ddf0286df2", "auto=format&fit=crop&q=80&w=200&h=200"),
  unsplash("1531123897727-8f129e1688ce", "auto=format&fit=crop&q=80&w=200&h=200"),
];

export const ctaBackground = unsplash("1522075469751-3a6694fb2f61", "auto=format&fit=crop&q=80&w=1600");
