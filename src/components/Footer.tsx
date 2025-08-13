import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-foreground/60">© 2024 Ernest Muuo. Built with</span>
            <Heart className="w-4 h-4 text-primary" />
            <span className="text-foreground/60">and</span>
            <Code className="w-4 h-4 text-primary" />
          </div>
          
          <div className="text-foreground/60 text-sm">
            Designed & Developed with modern web technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;