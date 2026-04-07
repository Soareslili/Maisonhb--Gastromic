
import {  InstagramLogoIcon } from "@radix-ui/react-icons";
const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-[#0B0C10]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Maison<span className="text-foreground">HD</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A experiência definitiva em gastronomia de luxo. Descubra sabores excepcionais, ambiente sofisticado e serviço impecável. Reserve sua mesa hoje e viva momentos inesquecíveis no coração da alta gastronomia.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Links Rápidos
            </h4>
            <div className="flex flex-col gap-3">
              {["Início", "Menu", "Sobre", "Galeria", "Depoimento", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Siga-nos
            </h4>
            <div className="flex gap-3">
              {[
                { label: "Instagram", icon: InstagramLogoIcon },
                { label: "Facebook", icon: () => <span className="text-sm font-bold">f</span> },
                { label: "TikTok", icon: () => <span className="text-sm font-bold">T</span> },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs">
           © 2026 MaisonHD. Todos os direitos reservados. Refeições requintadas no seu melhor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
