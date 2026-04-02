import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14">
          
          {/* Portrait */}
          <div className="animate-fade-in shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
              <img 
                src="/lovable-uploads/889f873e-72c5-4483-ae2e-f58449251214.png"
                alt="Ernest Muuo"
                className="relative w-40 h-40 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-full border-2 border-primary/20 shadow-lg"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-xl">
            <div className="animate-slide-up">
              <p className="text-sm md:text-base text-primary/80 font-medium tracking-wider uppercase mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 gradient-text leading-tight">
                Ernest Muuo
              </h1>
              <p className="text-base md:text-lg text-gold font-medium mb-4">
                Cloud, Automation & AI Solutions Builder
              </p>
            </div>
            
            <div className="animate-slide-up delay-200">
              <p className="text-sm md:text-base text-foreground/60 mb-3">
                AWS Certified Solutions Architect, Graduate Engineer, and hands-on builder creating cloud deployments, automation workflows, AI-powered tools, and practical digital systems.
              </p>
              <p className="text-sm md:text-base text-foreground/50 mb-6 leading-relaxed">
                I help turn ideas into practical digital solutions through cloud infrastructure, workflow automation, AI-assisted tools, and reliable technical implementation. My background blends engineering discipline, cloud knowledge, and a builder mindset focused on real-world usefulness.
              </p>
            </div>
            
            <div className="animate-slide-up delay-300 flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
              <Button 
                onClick={() => scrollTo('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-200 text-sm"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="glass border-primary/30 text-primary hover:bg-primary/10 text-sm"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button 
                variant="ghost"
                onClick={() => scrollTo('contact')}
                className="text-foreground/60 hover:text-primary text-sm"
              >
                Let's Connect
              </Button>
            </div>
            
            <div className="animate-slide-up delay-400 flex items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/Ernest-M" target="_blank" rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/ernest-muuo" target="_blank" rel="noopener noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <button onClick={() => scrollTo('about')} className="text-foreground/30 hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
