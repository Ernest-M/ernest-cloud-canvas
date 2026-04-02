import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-grid" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
          
          {/* Portrait */}
          <div className="animate-fade-in shrink-0">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/15 to-secondary/15 blur-lg" />
              <img 
                src="/lovable-uploads/889f873e-72c5-4483-ae2e-f58449251214.png"
                alt="Ernest Muuo"
                className="relative w-28 h-28 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-2 border-primary/15 shadow-lg"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="text-center md:text-left max-w-xl">
            <div className="animate-slide-up">
              <p className="text-xs md:text-sm text-gold font-medium tracking-widest uppercase mb-1.5">
                Hello, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text leading-tight">
                Ernest Muuo
              </h1>
              <p className="text-sm md:text-base text-gold font-medium mb-3">
                Cloud, Automation & AI Solutions Builder
              </p>
            </div>
            
            <div className="animate-slide-up delay-200">
              <p className="text-sm md:text-base text-foreground/70 mb-2 leading-relaxed">
                AWS Certified Solutions Architect, Graduate Engineer, and hands-on builder.
              </p>
              <p className="text-xs md:text-sm text-foreground/45 mb-5 leading-relaxed">
                I turn ideas into practical digital solutions through cloud infrastructure, 
                workflow automation, AI-assisted tools, and reliable technical implementation.
              </p>
            </div>
            
            <div className="animate-slide-up delay-300 flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-5">
              <Button 
                onClick={() => scrollTo('projects')}
                className="bg-primary text-primary-foreground hover:bg-primary-glow transition-all duration-200 text-sm h-9"
              >
                View My Work
              </Button>
              <Button 
                variant="outline"
                className="glass border-primary/25 text-primary hover:bg-primary/10 text-sm h-9"
              >
                <Download className="w-4 h-4 mr-1.5" />
                Download CV
              </Button>
              <Button 
                variant="ghost"
                onClick={() => scrollTo('contact')}
                className="text-foreground/50 hover:text-gold text-sm h-9"
              >
                Let's Connect
              </Button>
            </div>
            
            <div className="animate-slide-up delay-400 flex items-center justify-center md:justify-start gap-3.5">
              <a href="https://github.com/Ernest-M" target="_blank" rel="noopener noreferrer"
                className="text-foreground/35 hover:text-primary transition-colors duration-200">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="https://www.linkedin.com/in/ernest-muuo" target="_blank" rel="noopener noreferrer"
                className="text-foreground/35 hover:text-primary transition-colors duration-200">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <button onClick={() => scrollTo('about')} className="text-foreground/25 hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
