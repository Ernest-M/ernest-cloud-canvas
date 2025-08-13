import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cloud, Cpu, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Huawei Cloud Deployment",
      description: "Architected and deployed scalable cloud infrastructure on Huawei Cloud platform, implementing best practices for security, performance, and cost optimization.",
      icon: Cloud,
      technologies: ["Huawei Cloud", "Infrastructure", "DevOps", "Security"],
      status: "Completed",
      category: "Cloud Architecture"
    },
    {
      title: "IoT Final Year Project",
      description: "Developed an innovative IoT solution combining hardware sensors with cloud analytics, demonstrating end-to-end system integration and real-time data processing.",
      icon: Cpu,
      technologies: ["IoT", "Sensors", "Cloud Integration", "Data Analytics"],
      status: "Completed", 
      category: "IoT Engineering"
    },
    {
      title: "Financial Data Analysis",
      description: "Building advanced data analysis tools for financial markets, focusing on predictive modeling and algorithmic trading strategies using modern data science techniques.",
      icon: TrendingUp,
      technologies: ["Python", "Data Science", "Financial Modeling", "ML"],
      status: "In Progress",
      category: "Data Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A showcase of my technical expertise across cloud architecture, IoT innovation, and data analysis
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 glass animate-slide-up hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant={project.status === 'Completed' ? 'default' : 'outline'}
                    className={project.status === 'Completed' ? 'bg-success text-background' : 'text-warning border-warning'}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-primary mb-3">{project.category}</p>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-surface-elevated text-foreground/80 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button size="sm" variant="outline" className="flex-1 glass border-primary/50 text-primary hover:bg-primary/20">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-primary text-background hover:bg-primary-glow">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;