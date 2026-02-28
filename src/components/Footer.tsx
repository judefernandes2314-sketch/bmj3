import { Recycle, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
            <Recycle className="h-6 w-6" />
            BookMyJunk
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            India's trusted e-waste disposal service. Certified, eco-friendly, and free doorstep pickup. Making responsible e-waste recycling accessible to everyone.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li>Doorstep E-Waste Collection</li>
            <li>Electronic Waste Pickup Service</li>
            <li>Corporate IT Asset Disposition</li>
            <li>Data Destruction Services</li>
            <li>Recycle Old Laptop Service</li>
            <li>TV Recycling Pickup Service</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-background/60">
            <li><a href="#about" className="hover:text-background transition">About Us</a></li>
            <li><a href="#book" className="hover:text-background transition">Book Pickup</a></li>
            <li><a href="#faq" className="hover:text-background transition">FAQs</a></li>
            <li><a href="/blog" className="hover:text-background transition">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 XXXXX XXXXX</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@bookmyjunk.com</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> Mumbai, Maharashtra, India</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-background/40">© {new Date().getFullYear()} BookMyJunk.com — Certified E-Waste Recycling Company in India</p>
        <p className="text-xs text-background/30">E-waste disposal services in India | Electronic scrap recycling service</p>
      </div>
    </div>
  </footer>
);

export default Footer;
