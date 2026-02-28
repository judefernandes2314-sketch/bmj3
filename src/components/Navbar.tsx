import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Recycle, Download } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Book Pickup", href: "#book" },
    { label: "Videos", href: "#videos" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl text-foreground">
          <Recycle className="h-7 w-7 text-primary" />
          BookMyJunk
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.label} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            )
          )}
          <a href="#book" className="border border-primary text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-accent transition">
            Book Pickup
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition flex items-center gap-1.5">
            <Download className="h-4 w-4" /> Get App
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-background border-b border-border px-4 pb-4">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link key={l.label} to={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            )
          )}
          <a href="#book" onClick={() => setOpen(false)} className="block mt-2 border border-primary text-primary text-center px-5 py-2 rounded-lg text-sm font-semibold">
            Book Pickup
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="block mt-2 bg-primary text-primary-foreground text-center px-5 py-2 rounded-lg text-sm font-semibold">
            📲 Download App
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
