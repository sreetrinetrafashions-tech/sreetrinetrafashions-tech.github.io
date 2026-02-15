import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Menu,
  Search,
  Check,
  X,
  MessageCircle
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Mock Data
const PRODUCTS = [
  {
    id: 1,
    name: "Royal Banarasi Silk",
    price: "₹12,499",
    image: "/images/saree-red.png",
    category: "Wedding",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Midnight Blue Georgette",
    price: "₹4,999",
    image: "/images/saree-blue.png",
    category: "Party Wear",
    tag: "New"
  },
  {
    id: 3,
    name: "Blush Pink Kanjivaram",
    price: "₹15,999",
    image: "/images/saree-pink.png",
    category: "Traditional",
    tag: "Premium"
  },
  {
    id: 4,
    name: "Golden Tissue Silk",
    price: "₹8,999",
    image: "/images/saree-red.png", // Reusing for mock
    category: "Festive",
    tag: null
  }
];

const CATEGORIES = ["New Arrivals", "Wedding Silk", "Daily Wear", "Festive", "Gifts"];

export default function Home() {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
            <a href="/" className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-primary">
              Sree Trinetra
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {CATEGORIES.map((cat) => (
              <a key={cat} href="#" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest relative group">
                {cat}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border/50 bg-background overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {CATEGORIES.map((cat) => (
                  <a key={cat} href="#" className="text-base font-medium py-2 px-4 hover:bg-secondary/50 rounded-lg">
                    {cat}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/hero-saree.png"
            alt="Elegant Saree Collection"
            className="w-full h-full object-cover object-center opacity-90 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs md:text-sm tracking-[0.4em] uppercase text-primary font-bold bg-white/80 backdrop-blur px-4 py-2 rounded-full"
          >
            Timeless Elegance
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-foreground leading-[0.9]"
          >
            Weave Your <br /> <span className="italic font-light text-primary/80">Legacy</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-8"
          >
            <Button size="lg" className="rounded-full px-10 py-8 text-lg font-serif tracking-wider bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all hover:scale-105">
              Explore Collection
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif">Curated Masterpieces</h2>
            <p className="text-muted-foreground font-light max-w-md">Handpicked selections from the finest weavers across India.</p>
          </div>
          <Button variant="outline" className="font-serif hover:bg-primary hover:text-white transition-colors">View All Sarees</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>



      {/* WhatsApp Feature */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto bg-white border border-border/50 rounded-3xl p-12 shadow-sm">
          <div className="space-y-6">
            <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto text-[#25D366]">
              <MessageCircle className="w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif">Instant Concierge</h2>
            <p className="text-muted-foreground font-light max-w-lg mx-auto">
              Get real-time updates on new arrivals, price drops, and exclusive collections directly on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-8 font-medium h-12">
                Join WhatsApp Group
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-12 px-8">
                View Inventory
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background pt-24 pb-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif italic">Sree Trinetra</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed max-w-xs">
              Celebrating the timeless art of Indian weaving. Bringing heritage to your wardrobe since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 text-white/90">Shop</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Silk Sarees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cotton Sarees</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Designer Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bridal Collection</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 text-white/90">Support</h4>
            <ul className="space-y-4 text-sm text-white/60 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchange</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-6 text-white/90">Stay Updated</h4>
            <div className="flex gap-2">
              <Input placeholder="Email Address" className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 transition-colors" />
              <Button variant="secondary" className="bg-white text-black hover:bg-white/90">Join</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-8 text-center text-white/30 text-xs">
          © 2024 Sree Trinetra Fashions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <div className="group cursor-pointer space-y-4">
      <div className="relative aspect-[3/4] bg-muted overflow-hidden rounded-sm">
        {product.tag && (
          <span className="absolute top-0 left-0 bg-primary text-white px-3 py-1 text-[10px] uppercase tracking-wider font-medium z-10">
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Quick Actions */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex gap-2">
          <Button className="flex-1 bg-white text-black hover:bg-white/90 font-serif" size="sm">
            Add to Bag
          </Button>
        </div>
      </div>
      <div className="space-y-1 text-center">
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
        <p className="text-sm font-medium text-muted-foreground">{product.price}</p>
      </div>
    </div>
  );
}


