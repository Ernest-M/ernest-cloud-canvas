import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="gradient-text text-lg font-bold tracking-tight">
          Ernest Muuo
        </button>
        
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all duration-200"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden text-foreground/80 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-border/20 mt-2">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors py-2 text-left"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="text-sm px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 text-center mt-1"
            >
              Let's Connect
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
