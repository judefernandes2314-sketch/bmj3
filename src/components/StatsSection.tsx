import { motion } from "framer-motion";
import { BarChart3, Globe, TrendingUp, Zap } from "lucide-react";

const stats = [
  { icon: BarChart3, value: "10,000+", label: "Tons Recycled" },
  { icon: Globe, value: "50+", label: "Cities Covered" },
  { icon: TrendingUp, value: "500+", label: "Corporate Clients" },
  { icon: Zap, value: "95%", label: "Material Recovery" },
];

const StatsSection = () => (
  <section className="py-16 bg-primary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <s.icon className="h-8 w-8 text-primary-foreground/70 mx-auto mb-2" />
            <div className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">{s.value}</div>
            <div className="text-sm text-primary-foreground/70 mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
