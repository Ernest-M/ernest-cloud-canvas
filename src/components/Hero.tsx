import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-grid" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Ernest Muuo
          </h1>
        </div>
        
        <div className="animate-slide-up delay-200">
          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Cloud & Tech Enthusiast
          </p>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
            AWS Certified Professional | BSc Electrical & Electronics Engineering | 
            Passionate about cloud architecture, IoT innovation, and data-driven solutions
          </p>
        </div>
        
        <div className="animate-slide-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-background hover:bg-primary-glow glow-primary transition-all duration-300"
          >
            View My Work
          </Button>
          
          <Button 
            variant="outline"
            className="glass border-primary/50 text-primary hover:bg-primary/20"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
        
        <div className="animate-slide-up delay-500 flex items-center justify-center gap-6">
          <a 
            href="https://github.com/ernestmuuo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/in/ernestmuuo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-primary transition-colors duration-300 hover:scale-110 transform"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-foreground/60 hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;