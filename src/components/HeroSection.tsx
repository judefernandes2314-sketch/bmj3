import { motion } from "framer-motion";
import { ArrowDown, Leaf, ShieldCheck, Truck, Download, Smartphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="E-waste recycling facility for responsible e-waste recycling in India" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block bg-primary/20 text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 border border-primary/30">
            🇮🇳 India's #1 E-Waste Recycling App
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-4xl mx-auto">
            Dispose E-Waste in <br className="hidden md:block" />
            <span className="text-secondary">Just 2 Taps</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Download the BookMyJunk app & schedule a free doorstep pickup. We recycle old laptops, phones, TVs & more — certified, eco-friendly, and hassle-free.
          </p>

          {/* Primary CTAs — App Download + Lead Form */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-3"
            >
              <Download className="h-5 w-5" /> Download App
            </a>
            <a
              href="#book"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-secondary/10 transition flex items-center justify-center gap-3"
            >
              <Smartphone className="h-5 w-5" /> Book Free Pickup
            </a>
          </div>

          {/* App Store Badges */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.bmj.bookmyjunk&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get BookMyJunk on Google Play Store"
                className="h-11 hover:opacity-80 transition"
              />
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download BookMyJunk on App Store"
                className="h-11 hover:opacity-80 transition"
              />
            </a>
          </div>

          <p className="mt-4 text-primary-foreground/50 text-sm">⭐ 4.8 rating · 50,000+ downloads · Free to use</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Truck, text: "Free Doorstep Pickup" },
            { icon: ShieldCheck, text: "Certified & Secure" },
            { icon: Leaf, text: "Eco-Friendly Process" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-md rounded-xl px-5 py-4 border border-primary-foreground/10">
              <Icon className="h-6 w-6 text-secondary flex-shrink-0" />
              <span className="text-primary-foreground font-medium text-sm">{text}</span>
            </div>
          ))}
        </motion.div>

        <a href="#about" className="inline-block mt-10 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary-foreground/60" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
