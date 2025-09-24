import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+91 99798 40807",
      "+91 96246 44466", 
      "+91 99096 94615"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "service.avadhelectric@gmail.com",
      "avadh.electric@gmail.com"
    ]
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "First Floor, Shop No.1",
      "Swastik Sarita Society", 
      "Opp. Indrajeet Society",
      "Nikol Gam Road, Nikol",
      "Ahmedabad, Gujarat"
    ]
  }
];

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
  };

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
            <Send className="h-12 w-12 text-electric glow-electric" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to power your next project? Contact our expert team for premium electrical solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="bg-card-gradient border-tech-border hover:glow-electric transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 rounded-full bg-secondary">
                        <IconComponent className="h-5 w-5 text-electric" />
                      </div>
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-card-gradient border-tech-border glow-electric">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name *
                      </label>
                      <Input 
                        id="name"
                        placeholder="Your Name" 
                        required 
                        className="bg-input border-tech-border focus:border-electric focus:glow-electric"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
                      </label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your@email.com" 
                        required 
                        className="bg-input border-tech-border focus:border-electric focus:glow-electric"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="+91 99999 99999" 
                      className="bg-input border-tech-border focus:border-electric focus:glow-electric"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject *
                    </label>
                    <Input 
                      id="subject"
                      placeholder="Project inquiry, service request, etc." 
                      required 
                      className="bg-input border-tech-border focus:border-electric focus:glow-electric"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message *
                    </label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your project requirements..." 
                      rows={5}
                      required 
                      className="bg-input border-tech-border focus:border-electric focus:glow-electric resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full btn-electric text-primary-foreground font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Circuit decoration */}
        <div className="absolute bottom-0 right-0 w-48 h-1 circuit-line"></div>
      </div>
    </section>
  );
};

export default ContactSection;