import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, User, Package, Hash } from "lucide-react";
import { toast } from "sonner";

const ewasteItems = [
  "Old Laptops",
  "Desktop Computers",
  "Mobile Phones",
  "Televisions (TV)",
  "Printers & Scanners",
  "Keyboards & Mouse",
  "Cables & Chargers",
  "Batteries",
  "Monitors",
  "Servers & Networking Equipment",
  "Air Conditioners",
  "Refrigerators",
  "Washing Machines",
  "Other Electronics",
];

const BookingForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", location: "", items: [] as string[], quantity: "", notes: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.location.trim() || form.items.length === 0 || !form.quantity.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (!/^\d{10}$/.test(form.phone.trim())) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    toast.success("Pickup request submitted! We'll contact you within 24 hours.");
    setForm({ name: "", phone: "", location: "", items: [], quantity: "", notes: "" });
  };

  const toggleItem = (item: string) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.includes(item) ? prev.items.filter((i) => i !== item) : [...prev.items, item],
    }));
  };

  return (
    <section id="book" className="py-24 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">Book Free Pickup</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
            Schedule Your Doorstep E-Waste Collection
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Fill in your details and select the electronics you want to dispose. Our team will pick them up for free!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-card rounded-2xl p-8 card-elevated border border-border"
        >
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                <User className="h-4 w-4 text-muted-foreground" /> Full Name *
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                maxLength={100}
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
                📱 Phone Number *
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                placeholder="10-digit number"
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-muted-foreground" /> City / Location *
            </label>
            <input
              type="text"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              placeholder="e.g., Mumbai, Delhi, Bangalore"
              maxLength={200}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
              <Package className="h-4 w-4 text-muted-foreground" /> Select E-Waste Items *
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {ewasteItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleItem(item)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    form.items.includes(item)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-muted-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm font-medium text-foreground mb-1.5 flex items-center gap-1.5">
              <Hash className="h-4 w-4 text-muted-foreground" /> Approximate Quantity *
            </label>
            <input
              type="text"
              value={form.quantity}
              onChange={(e) => setForm({ ...form, quantity: e.target.value })}
              placeholder="e.g., 5 items, 10 kg"
              maxLength={50}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm font-medium text-foreground mb-1.5 block">Additional Notes</label>
            <textarea
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              placeholder="Any special instructions..."
              maxLength={500}
              rows={3}
              className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <Send className="h-5 w-5" /> Submit Pickup Request
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;
