import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 hero-grid" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            
            {/* Professional Image */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
                <img 
                  src="/lovable-uploads/889f873e-72c5-4483-ae2e-f58449251214.png"
                  alt="Ernest Muuo - Professional Portrait"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                />
              </div>
            </div>
            
            {/* Intro Text */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="animate-slide-up delay-200">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                  Ernest Muuo
                </h1>
                <p className="text-xl md:text-2xl text-primary mb-6">
                  AWS Certified Solutions Architect | Cloud & Data Enthusiast | Graduate Engineer
                </p>
              </div>
              
              <div className="animate-slide-up delay-400">
                <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                  I'm Ernest Muuo, a cloud solutions architect and data enthusiast with a BSc in Electrical and Electronics Engineering. 
                  I create innovative cloud solutions, analyze financial data for insights, and deliver engineering projects with precision.
                </p>
              </div>
              
              <div className="animate-slide-up delay-500 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button 
                  asChild
                  className="bg-primary text-background hover:bg-primary-glow glow-primary transition-all duration-300"
                >
                  <Link to="/projects">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    View My Work
                  </Link>
                </Button>
                
                <Button 
                  variant="outline"
                  className="glass border-primary/50 text-primary hover:bg-primary/20"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;