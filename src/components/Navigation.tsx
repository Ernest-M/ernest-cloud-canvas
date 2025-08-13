import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="gradient-text text-xl font-bold">
          Ernest Muuo
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['About', 'Certifications', 'Projects', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          onClick={() => scrollToSection('contact')}
          className="hidden md:block bg-transparent border-primary text-primary hover:bg-primary hover:text-background"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;