import { Zap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-tech-surface border-t border-tech-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full glow-electric">
                <Zap className="h-6 w-6 text-electric" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-glow">Avadh Electric</h3>
                <p className="text-sm text-accent text-accent-glow">Excellence In Every Connection</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Premium electrical services with cutting-edge technology and unmatched expertise for residential and commercial projects.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:text-electric">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:text-electric">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:text-electric">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:text-electric">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Services", "Projects", "About Us", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-muted-foreground hover:text-electric transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Our Services</h4>
            <div className="space-y-3">
              {[
                "Residential Electrical",
                "Commercial Projects", 
                "Smart Lighting",
                "Safety Inspections",
                "Maintenance & Repair"
              ].map((service) => (
                <div key={service} className="text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-electric mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>+91 99798 40807</div>
                  <div>+91 96246 44466</div>
                  <div>+91 99096 94615</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-electric mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>service.avadhelectric@gmail.com</div>
                  <div>avadh.electric@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-electric mt-1 flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>First Floor, Shop No.1</div>
                  <div>Swastik Sarita Society</div>
                  <div>Opp. Indrajeet Society</div>
                  <div>Nikol Gam Road, Nikol</div>
                  <div>Ahmedabad, Gujarat</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tech-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Avadh Electric. All rights reserved. Excellence In Every Connection.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-electric transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Circuit decoration */}
      <div className="w-full h-1 circuit-line"></div>
    </footer>
  );
};

export default Footer;