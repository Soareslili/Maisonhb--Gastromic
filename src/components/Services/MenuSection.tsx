import { Heart } from "lucide-react";

import dishBurger from "../../assets/dish-burger.png";
import dishPasta from "../../assets/dish-pasta.png";
import dishSteak from "../../assets/dish-steak.png";
import dishSeafood from "../../assets/dish-seafood.png";

import Caipirinha from "../../assets/Caipirinha.png";
import GinFutas from "../../assets/Gin-FutasVermelhas.png"
import Mojito from "../../assets/Mojito.png"
import Margarita from "../../assets/Margarita.png"
import Sangria from "../../assets/Sangria.png"
import ScrollReveal from "../Home/ScrollReveal";

import ChocolatePremium from "../../assets/Chocolate-Premium.png";
import FrutasVermelhas from "../../assets/Frutas-Vermelhas.png";
import Tropical from "../../assets/Tropical.png";
import CaramelhoBaumilha from "../../assets/CarameloBaunilha.png";
import Citrica from "../../assets/Citrica.png";

const dishes = [
  { name: "Gourmet Burger", desc: "Premium wagyu beef, truffle aioli, aged cheddar", price: "$42", img: dishBurger },
  { name: "Truffle Pasta", desc: "Fresh tagliatelle, black truffle, parmesan foam", price: "$38", img: dishPasta },
  { name: "Premium Steak", desc: "Dry-aged ribeye, red wine reduction, seasonal veg", price: "$65", img: dishSteak },
  { name: "Seafood Special", desc: "Butter-poached lobster, saffron bisque, micro herbs", price: "$58", img: dishSeafood },
  { name: "Caipirinha", desc: "Cachaça, fresh lime, sugar", price: "$12", img: Caipirinha },
  { name: "Gin Futas Vermelhas", desc: "Gin, red fruits, tonic water", price: "$14", img: GinFutas },
  { name: "Mojito", desc: "Rum, fresh mint, lime juice, soda water", price: "$13", img: Mojito },
  { name: "Margarita", desc: "Tequila, triple sec, lime juice, salt rim", price: "$15", img: Margarita },
  { name: "Sangria", desc: "Red wine, brandy, mixed fruits, soda water", price: "$10", img: Sangria },
    { name: "Chocolate Premium", desc: "Rich dark chocolate, gold leaf, raspberry coulis", price: "$18", img: ChocolatePremium },
    { name: "Frutas Vermelhas", desc: "Mixed red berries, vanilla cream, mint", price: "$16", img: FrutasVermelhas },
    { name: "Tropical", desc: "Mango, passion fruit, coconut cream, lime zest", price: "$17", img: Tropical },
    { name: "Caramelho Baunilha", desc: "Salted caramel, vanilla bean, chocolate drizzle", price: "$16", img: CaramelhoBaumilha },
    { name: "Cítrica", desc: "Lemon, orange, grapefruit, basil syrup", price: "$15", img: Citrica },
];

const DishesSection = () => {
  return (
    <section id="menu" className="min-h-screen bg-[#141110]">
      <div className="container mx-auto px-6 py-24">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-sans-body">
                Nosso Menu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-alt-accent-foreground">
              Pratos <span className="text-primary italic">Exclusivos</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 100}>
              <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-gold">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-semibold text-foreground">{dish.name}</h3>
                    <span className="text-primary font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{dish.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DishesSection;