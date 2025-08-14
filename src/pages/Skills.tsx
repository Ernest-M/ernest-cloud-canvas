import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Award, Cloud, Database, Code, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Technologies",
      icon: Cloud,
      skills: [
        { name: "AWS Services", level: 90, description: "EC2, S3, Lambda, RDS, CloudFormation" },
        { name: "Huawei Cloud", level: 85, description: "ECS, OBS, VPC, Security Groups" },
        { name: "Infrastructure as Code", level: 80, description: "CloudFormation, Terraform basics" },
        { name: "DevOps Practices", level: 75, description: "CI/CD pipelines, monitoring" }
      ]
    },
    {
      title: "Data Analysis",
      icon: Database,
      skills: [
        { name: "Power BI", level: 85, description: "Dashboard creation, data modeling" },
        { name: "Python", level: 80, description: "Pandas, NumPy, data processing" },
        { name: "Excel", level: 90, description: "Advanced formulas, pivot tables, VBA" },
        { name: "Financial Modeling", level: 75, description: "Risk analysis, portfolio optimization" }
      ]
    },
    {
      title: "Engineering",
      icon: Wrench,
      skills: [
        { name: "Electrical Systems", level: 85, description: "Circuit design, power systems" },
        { name: "Electronics", level: 80, description: "Microcontrollers, sensor integration" },
        { name: "Networking", level: 75, description: "TCP/IP, network architecture" },
        { name: "Project Management", level: 80, description: "Planning, execution, delivery" }
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      code: "CPP",
      verified: true,
      description: "Foundational knowledge of AWS Cloud services, security, and pricing models"
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services", 
      date: "2024",
      code: "SAA",
      verified: true,
      description: "Advanced skills in designing distributed systems and architectures on AWS"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
              Skills & Certifications
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-slide-up delay-200">
              Technical expertise and professional certifications that drive innovation and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Technical Skills</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <Card 
                  key={categoryIndex}
                  className="p-6 glass animate-slide-up hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <CategoryIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-foreground/60">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2 mb-2" />
                        <p className="text-sm text-foreground/70">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Professional Certifications</h2>
          
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
                <p className="text-foreground/70 mb-2">{cert.issuer}</p>
                <p className="text-sm text-foreground/60 mb-4">{cert.date}</p>
                
                <p className="text-foreground/80 leading-relaxed">
                  {cert.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;