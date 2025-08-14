import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, MapPin, Calendar, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "BSc Electrical & Electronics Engineering",
      description: "Strong foundation in engineering principles, problem-solving, and analytical thinking"
    },
    {
      icon: Award,
      title: "AWS Certified Professional",
      description: "Certified in AWS Cloud Practitioner (CPP) and Solutions Architect Associate (SAA)"
    },
    {
      icon: Briefcase,
      title: "Registered Graduate Engineer",
      description: "Professional engineering qualification with focus on innovative solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header with Image */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            
            {/* Professional Image - Smaller version */}
            <div className="animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse-glow"></div>
                <img 
                  src="/lovable-uploads/889f873e-72c5-4483-ae2e-f58449251214.png"
                  alt="Ernest Muuo - Professional Portrait"
                  className="relative w-64 h-64 object-cover rounded-full border-4 border-primary/30 shadow-2xl"
                />
              </div>
            </div>
            
            {/* Header Text */}
            <div className="text-center lg:text-left flex-1">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up delay-200">
                About Me
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed animate-slide-up delay-400">
                Passionate engineer and cloud enthusiast committed to delivering innovative solutions 
                and driving technological advancement through expertise in cloud architecture and data analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <Card className="p-8 glass mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold mb-6 gradient-text">My Journey</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  With a solid foundation in Electrical and Electronics Engineering, I've evolved into a cloud solutions architect 
                  and data enthusiast who thrives on solving complex technical challenges. My journey began with a deep curiosity 
                  about how systems work and how they can be optimized for better performance and efficiency.
                </p>
                <p>
                  Throughout my academic and professional journey, I've developed expertise in cloud technologies, particularly 
                  AWS services, where I hold both Cloud Practitioner and Solutions Architect Associate certifications. 
                  This knowledge, combined with my engineering background, allows me to design robust, scalable solutions 
                  that meet real-world business needs.
                </p>
                <p>
                  My passion for data analysis, especially in the financial sector, drives me to explore innovative ways 
                  to extract meaningful insights from complex datasets. I believe that the intersection of cloud computing, 
                  data science, and engineering principles holds the key to solving tomorrow's technological challenges.
                </p>
              </div>
            </Card>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 glass animate-slide-up hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-center">{highlight.title}</h3>
                    <p className="text-foreground/70 text-center text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                );
              })}
            </div>

            {/* Current Focus */}
            <Card className="p-8 glass animate-slide-up">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Current Focus</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Cloud Architecture</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Designing and implementing scalable cloud solutions using AWS services, 
                    with emphasis on security, performance optimization, and cost efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-surface-elevated">AWS</Badge>
                    <Badge variant="secondary" className="bg-surface-elevated">Huawei Cloud</Badge>
                    <Badge variant="secondary" className="bg-surface-elevated">Infrastructure as Code</Badge>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Financial Data Analysis</h3>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Developing sophisticated analytical models and dashboards to extract actionable 
                    insights from financial markets and investment data.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-surface-elevated">Power BI</Badge>
                    <Badge variant="secondary" className="bg-surface-elevated">Python</Badge>
                    <Badge variant="secondary" className="bg-surface-elevated">Financial Modeling</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;