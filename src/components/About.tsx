import { Card } from '@/components/ui/card';
import { GraduationCap, Award, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Engineering Excellence",
      description: "BSc in Electrical & Electronics Engineering with a passion for innovative solutions"
    },
    {
      icon: Award,
      title: "AWS Certified",
      description: "Certified Cloud Practitioner & Solutions Architect Associate"
    },
    {
      icon: Zap,
      title: "Tech Innovation",
      description: "Combining cloud expertise with IoT and data analysis capabilities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Passionate engineer bridging the gap between hardware innovation and cloud technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              With a solid foundation in Electrical & Electronics Engineering, I've evolved into a 
              cloud technology specialist, earning AWS certifications and developing expertise in 
              modern cloud architectures and IoT solutions.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey combines traditional engineering principles with cutting-edge cloud 
              technologies, enabling me to design and implement scalable, efficient solutions 
              that bridge the physical and digital worlds.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Currently exploring data analysis applications in finance while continuously 
              expanding my cloud expertise and contributing to innovative IoT projects.
            </p>
          </div>
          
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 glass animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;