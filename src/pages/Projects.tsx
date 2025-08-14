import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Cloud, Cpu, TrendingUp, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projectCategories = [
    {
      title: "Cloud Projects",
      icon: Cloud,
      projects: [
        {
          title: "Huawei Cloud Deployment",
          description: "Collaborated with a team to architect and deploy scalable cloud infrastructure on Huawei Cloud platform. Implemented best practices for security, performance optimization, and cost management. My role involved designing the network architecture, configuring security groups, and optimizing resource allocation for maximum efficiency.",
          technologies: ["Huawei Cloud", "Infrastructure as Code", "DevOps", "Network Security"],
          status: "Completed",
          github: "#",
          demo: "#"
        }
      ]
    },
    {
      title: "Data Analysis Projects", 
      icon: TrendingUp,
      projects: [
        {
          title: "Financial Data Dashboards",
          description: "Developed comprehensive financial data analysis dashboards using Power BI to provide actionable insights for investment decisions. Created automated data pipelines to process market data, generate trend analyses, and identify trading opportunities. Implemented real-time data visualization for portfolio performance tracking.",
          technologies: ["Power BI", "Python", "Financial Modeling", "Data Visualization"],
          status: "Completed",
          github: "#",
          demo: "#"
        },
        {
          title: "Market Analysis & Insights",
          description: "Built advanced analytical models to process large financial datasets and extract meaningful patterns. Developed predictive algorithms for market trend analysis and risk assessment. Currently expanding the system to include machine learning models for automated trading signal generation.",
          technologies: ["Python", "Pandas", "NumPy", "Machine Learning"],
          status: "In Progress", 
          github: "#",
          demo: "#"
        }
      ]
    },
    {
      title: "Engineering Projects",
      icon: Cpu,
      projects: [
        {
          title: "IoT Final Year Project",
          description: "Designed and developed an innovative IoT solution as my BSc final year project, integrating hardware sensors with cloud-based analytics platform. The system demonstrated real-time data collection, processing, and visualization capabilities. Implemented end-to-end system architecture including sensor networks, data transmission protocols, and cloud storage solutions.",
          technologies: ["IoT", "Arduino/Raspberry Pi", "Cloud Integration", "Sensor Networks"],
          status: "Completed",
          github: "#",
          demo: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-slide-up">
              My Projects
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-slide-up delay-200">
              A comprehensive showcase of my technical expertise across cloud architecture, data analysis, and engineering innovation
            </p>
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      {projectCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? '' : 'bg-surface'}`}>
            <div className="container mx-auto px-6">
              
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <CategoryIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold gradient-text">
                    {category.title}
                  </h2>
                </div>
              </div>
              
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
                {category.projects.map((project, projectIndex) => (
                  <Card 
                    key={projectIndex}
                    className="p-8 glass animate-slide-up hover:scale-105 transition-all duration-300 group"
                    style={{ animationDelay: `${projectIndex * 0.2}s` }}
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'outline'}
                        className={project.status === 'Completed' ? 'bg-success text-background' : 'text-warning border-warning'}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    
                    <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-surface-elevated text-foreground/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Button size="sm" variant="outline" className="flex-1 glass border-primary/50 text-primary hover:bg-primary/20">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                      <Button size="sm" className="flex-1 bg-primary text-background hover:bg-primary-glow">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Projects;