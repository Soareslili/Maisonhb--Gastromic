import { Star, Clock, Phone } from "lucide-react";
import heroBurger from "../assets/hero.png";

const HeroSection = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={heroBurger}
                    alt="Gourmet burger with dramatic lighting"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
            </div>

            <div className="relative container mx-auto px-6 pt-24">
                <div className="max-w-2xl">
                    <p className="text-primary font-sans-body text-sm uppercase tracking-[0.3em] mb-4 animate-fade-up opacity-0" style={{ animationDelay: "0.2s" }}>
                        Refeições requintadas premium
                    </p>
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
                        Experimente refeições requintadas{" "}
                        <span className="text-gradient-gold italic">Como nunca antes</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg font-light leading-relaxed animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
                     Excelência culinária elaborada com paixão e ingredientes premium, em um ambiente pensado para momentos inesquecíveis.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
                        <a
                            href="#menu"
                            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-105"
                        >
                         Ver cardápio
                        </a>
                        <a
                            href="#reservation"
                            className="border border-primary/40 text-foreground px-8 py-3.5 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:bg-primary/10 hover:border-primary"
                        >
                       Reserve agora
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground animate-fade-up opacity-0" style={{ animationDelay: "1s" }}>
                        <div className="flex items-center gap-2">
                            <div className="flex text-primary">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <span>5.0 Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+55 11 9999-9999</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>Tue–Sun 18:00–23:00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;