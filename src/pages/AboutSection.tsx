import { Check } from "lucide-react";
import aboutDish from "../assets/about-dish.png";
import chefAction from "../assets/chef-action.png";
import ScrollReveal from "../components/Home/ScrollReveal";

const features = [
  "Ingredientes premium selecionados manualmente",
  "Chef executivo premiado",
  "Ambiente sofisticado e íntimo",
  "Serviço personalizado exclusivo",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#1B1715]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-sans-body">
                Nossa experiência
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 leading-tight text-alt-accent-foreground">
                Uma experiência gastronômica elaborada com{" "}
                <span className="text-primary-light italic">paixão e precisão</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Cada prato conta uma história de artesanato meticuloso e arte culinária. Nossa equipe está
                dedicada a oferecer uma experiência que transcende o comum, misturando sabores,
                texturas e apresentação em algo verdadeiramente notável.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#gallery"
                className="inline-block border border-primary/40 text-foreground px-8 py-3 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-primary/10 hover:border-primary text-sm"
              >
                Ver Galeria
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">'     '
              <img
                src={aboutDish}
                alt="Beautifully plated gourmet dish"
                className="rounded-2xl w-full object-cover aspect-[4/5] shadow-gold-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 md:w-52 md:h-52 rounded-xl overflow-hidden border-4 border-background shadow-2xl hidden md:block">
                <img
                  src={chefAction}
                  alt="Chef in action"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;