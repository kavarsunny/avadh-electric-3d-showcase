import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Calendar, ExternalLink } from "lucide-react";

const projects = [
  { name: "Paradise Village", type: "Residential Complex", location: "Ahmedabad", year: "2023" },
  { name: "Sanvi Casa", type: "Luxury Apartments", location: "Ahmedabad", year: "2023" },
  { name: "Saharsh", type: "Commercial Plaza", location: "Gujarat", year: "2022" },
  { name: "Sanidhya Status", type: "Premium Housing", location: "Ahmedabad", year: "2024" },
  { name: "Club Babylon", type: "Entertainment Complex", location: "Gujarat", year: "2022" },
  { name: "Kadamb Greens", type: "Eco-Residential", location: "Ahmedabad", year: "2023" },
  { name: "Megh Malhar Indigo", type: "Smart Homes", location: "Gujarat", year: "2024" },
  { name: "Status Altezza", type: "High-Rise Complex", location: "Ahmedabad", year: "2023" },
  { name: "Altezza Eva", type: "Premium Towers", location: "Gujarat", year: "2024" },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-6 bg-tech-surface relative overflow-hidden">
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
            <Building className="h-12 w-12 text-electric glow-electric" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Our Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powering Gujarat's most prestigious developments with premium electrical infrastructure
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0, 191, 255, 0.3)"
              }}
              className="perspective-1000"
            >
              <Card className="bg-card-gradient border-tech-border hover:glow-electric transition-all duration-500 transform-gpu h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground flex items-start justify-between">
                    <span>{project.name}</span>
                    <ExternalLink className="h-4 w-4 text-electric opacity-70" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4 text-electric" />
                    <span className="text-sm">{project.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4 text-electric" />
                    <span className="text-sm">{project.year}</span>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-electric text-electric hover:bg-electric hover:text-primary-foreground transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="btn-electric text-primary-foreground px-8 py-6 text-lg font-semibold"
          >
            Start Your Project
          </Button>
        </motion.div>

        {/* Circuit decoration */}
        <div className="absolute top-0 left-0 w-full h-1 circuit-line"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;