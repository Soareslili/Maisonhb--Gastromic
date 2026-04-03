import restaurantInterior from "../assets/restaurant-interio.png";
import galleryTable from "../assets/gallery-vinho.png";
import galleryIngredients from "../assets/gallery-ingredients.png";
import chefAction from "../assets/chef-action.png";
import IngredProducts from "../assets/gallery-products.png"
import Team from "../assets/gallery-Team.png"
import Oil from "../assets/gallery-oil.png"
import ChefeTeam from "../assets/chef-team.png"

import ScrollReveal from "../components/Home/ScrollReveal";

const images = [
    { src: restaurantInterior, alt: "Luxury restaurant interior", span: "col-span-2 row-span-2" },
    { src: galleryTable, alt: "Elegant wine glasses", span: "" },
    { src: galleryIngredients, alt: "Fresh premium ingredients", span: "" },
    { src: chefAction, alt: "Chef preparing dishes", span: "col-span-2" },
    { src: IngredProducts, alt: "High-quality ingredients", span: "" },
    { src: Team, alt: "Our dedicated team", span: "" },
    { src: Oil, alt: "Premium olive oil", span: "" },
    { src: ChefeTeam, alt: "Chef and team collaboration", span: "" },
];

const GallerySection = () => {
    return (
        <section id="gallery" className="py-24 bg-[#1B1715]">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-sans-body">
                          Nosso Ambiente
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-alt-accent-foreground leading-tight">
                            Uma atmosfera projetada para{" "}
                            <span className="text-accent italic">momentos inesquecíveis</span>
                        </h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`${img.span} rounded-xl overflow-hidden group`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default GallerySection;