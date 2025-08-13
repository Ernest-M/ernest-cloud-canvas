import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      code: "CPP",
      skills: ["Cloud Fundamentals", "AWS Services", "Security", "Pricing"],
      verified: true
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services", 
      date: "2024",
      code: "SAA",
      skills: ["Architecture Design", "High Availability", "Cost Optimization", "Security"],
      verified: true
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Certifications
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Professional certifications validating my cloud expertise and commitment to excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-8 glass animate-slide-up glow-primary hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  {cert.verified && (
                    <CheckCircle className="w-5 h-5 text-success" />
                  )}
                </div>
                <Badge variant="outline" className="text-primary border-primary">
                  {cert.code}
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
              <p className="text-foreground/70 mb-4">{cert.issuer}</p>
              
              <div className="flex items-center space-x-2 mb-6">
                <Calendar className="w-4 h-4 text-foreground/60" />
                <span className="text-foreground/60">{cert.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-surface-elevated text-foreground/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;