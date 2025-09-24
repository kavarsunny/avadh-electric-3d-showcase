import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Zap, Power, CircuitBoard } from "lucide-react";
import heroImage from "@/assets/electric-hero-bg.jpg";

const AnimatedSphere = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00bfff"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40" />
      
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Brand Logo */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-4 rounded-full glow-electric">
              <Zap className="h-12 w-12 text-electric animate-electric-pulse" />
            </div>
            <div>
              <h1 className="text-6xl md:text-8xl font-bold text-glow">
                Avadh Electric
              </h1>
              <p className="text-xl md:text-2xl text-accent text-accent-glow font-medium">
                Excellence In Every Connection
              </p>
            </div>
          </div>

          {/* Main Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Premium electrical services with cutting-edge technology and unmatched expertise. 
            We power your projects with innovation, reliability, and excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="btn-electric text-primary-foreground px-8 py-6 text-lg font-semibold"
            >
              <Power className="mr-2 h-5 w-5" />
              Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-electric text-electric hover:bg-electric hover:text-primary-foreground px-8 py-6 text-lg"
            >
              <CircuitBoard className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute top-20 left-10 animate-float opacity-20">
            <Zap className="h-8 w-8 text-electric" />
          </div>
          <div className="absolute top-32 right-16 animate-float opacity-20" style={{ animationDelay: '2s' }}>
            <Power className="h-6 w-6 text-accent" />
          </div>
          <div className="absolute bottom-32 left-20 animate-float opacity-20" style={{ animationDelay: '4s' }}>
            <CircuitBoard className="h-10 w-10 text-electric" />
          </div>
        </motion.div>
      </div>

      {/* Circuit Lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 circuit-line"></div>
      <div className="absolute top-1/2 right-0 h-32 w-1 circuit-line" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;