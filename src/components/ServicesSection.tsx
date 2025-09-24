import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, 
  Home, 
  Building2, 
  Lightbulb, 
  ShieldCheck, 
  Wrench,
  Power,
  CircuitBoard 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete home electrical solutions including wiring, installations, and maintenance for modern living spaces.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    description: "Large-scale electrical infrastructure for commercial buildings, offices, and industrial facilities.",
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting Systems",
    description: "Advanced LED lighting solutions and smart home automation for energy efficiency and convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Inspections",
    description: "Comprehensive electrical safety audits and compliance certifications for peace of mind.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Repair",
    description: "24/7 emergency services and preventive maintenance to keep your electrical systems running smoothly.",
  },
  {
    icon: Power,
    title: "Power Solutions",
    description: "Backup power systems, generators, and uninterruptible power supply installations.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <CircuitBoard className="h-12 w-12 text-electric glow-electric" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive electrical solutions powered by innovation and backed by years of expertise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-card-gradient border-tech-border hover:glow-electric transition-all duration-300 h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center glow-accent">
                      <IconComponent className="h-8 w-8 text-electric" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Zap className="h-32 w-32 text-electric animate-float" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Power className="h-24 w-24 text-accent animate-float" style={{ animationDelay: '3s' }} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;