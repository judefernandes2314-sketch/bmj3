import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videos = [
  {
    title: "How BookMyJunk Recycles E-Waste Responsibly",
    description: "See our eco-friendly e-waste disposal process from doorstep collection to certified recycling.",
    embedUrl: "https://youtu.be/Q5sd300ct3E",
    placeholder: true,
  },
  {
    title: "BookMyJunk — Featured on National Media",
    description: "Our e-waste management solutions recognized as best e-waste recycler in India.",
    embedUrl: "https://youtu.be/QnVrUpl1QjE",
    placeholder: true,
  },
];

const VideosSection = () => (
  <section id="videos" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <span className="text-primary font-semibold text-sm tracking-widest uppercase">Watch</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-foreground">
          See Us in Action
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Watch how our electronic waste pickup service works and why leading brands trust us.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videos.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl overflow-hidden card-elevated border border-border"
          >
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                <div className="text-center">
                  <iframe
                    width="100%"
                    height="100%"
                    src={v.embedUrl.replace('youtu.be/', 'www.youtube.com/embed/')}
                    title={v.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full rounded-none"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg text-card-foreground">{v.title}</h3>
              <p className="mt-2 text-muted-foreground text-sm">{v.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VideosSection;
