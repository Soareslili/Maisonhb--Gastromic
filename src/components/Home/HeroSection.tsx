
import { Clock, Phone, Star } from "lucide-react";
import HeroImg from "../../assets/hero.png";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";




const Hero = () => {


    return (
        <section className="relative min-h-screen flex items-center">
            <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImg})` }}
            >
                <div className="absolute inset-0 gradient-hero"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
            </div>
            <div className="relative container mx-auto px-4 py-32 mt-10">
                <div className="max-w-3xl"
                >
                    <p className="text-xl md:text-2xl font-serif leading-tight text-primary mb-4">
                        Refeições requintadas premium
                    </p>
                    <h1 className="text-5xl md:text-7xl font-Play font-semibold text-foreground mb-6 leading-tight"
                        data-aos="fade-up"
                        data-aos-duration="1400"
                        data-aos-delay="200"
                    >
                        Experimente refeições requintadas <span className="text-primary">como nunca antes.!</span>
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="1800"
                        data-aos-delay="600"
                        className=" max-w-2xl text-2xl text-muted-foreground">Excelência culinária elaborada com paixão e ingredientes premium, em um ambiente pensado para momentos inesquecíveis.</p>
                </div>

                <div className="flex sm:flex-row gap-4">
                    <Link to="/reserve">
                        <Button
                            variant="outline"
                            size="lg"
                            className="mt-8 text-white cursor-pointer hover:transition transform hover:scale-105"
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                            data-aos-delay="1000">
                                Faça sua reserva
                        </Button>

                    </Link>

                    <Link to="/menu">
                        <Button
                            variant="default"
                            size="lg"
                            className="mt-8 cursor-pointer hover:bg-popover hover:text-white hover:transition transform hover:scale-105"
                            data-aos="zoom-in"
                            data-aos-duration="1400"
                            data-aos-delay="1200"
                        >
                            Explore o Menu
                        </Button>
                    </Link>
                </div>

                <div className="flex flex-wrap gap-8 mt-8 text-white">
                    <div className="flex items-center gap-2"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="1400"
                    >
                        <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span>5.0 Rating</span>
                    </div>
                    <div className="flex items-center gap-2"
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        data-aos-delay="1600"
                    >
                        <Phone className="w-4 h-4 text-primary" />
                        <span>+55 11 9999-9999</span>
                    </div>
                    <div className="flex items-center gap-2"
                        data-aos="fade-right"
                        data-aos-duration="1400"
                        data-aos-delay="1800"
                    >
                        <Clock className="w-4 h-4 text-primary" />
                        <span>Ter–Sab 18:00–23:00</span>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Hero;