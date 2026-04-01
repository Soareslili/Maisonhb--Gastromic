import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", date: "", time: "", guests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Reservation request submitted! We'll contact you shortly.");
  };

  const inputClass =
    "w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-sm";

  return (
    <section id="reservation" className="py-24 bg-[#1B1715]">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-primary text-sm uppercase tracking-[0.3em] mb-3 font-sans-body">
              Book Your Experience
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              Reserve a <span className="text-gradient-gold italic">Table</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-gold"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <input
                type="text"
                placeholder="Full Name"
                className={inputClass}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                className={inputClass}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={inputClass}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
              />
              <input
                type="date"
                className={inputClass}
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                required
              />
              <select
                className={inputClass}
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                required
              >
                <option value="">Select Time</option>
                {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map(
                  (t) => (
                    <option key={t} value={t}>{t}</option>
                  )
                )}
              </select>
              <select
                className={inputClass}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                required
              >
                <option value="">Number of Guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Guest" : "Guests"}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-lg font-bold tracking-wide text-lg transition-all duration-300 shadow-gold hover:shadow-gold-lg hover:scale-[1.02]"
            >
              Reserve Table
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ReservationSection;
