import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Self-Hosted Forex Learning Platform",
      description: "Deployed a production-ready web platform for forex education using a VPS, Docker, Docker Compose, Nginx Proxy Manager, Namecheap DNS, and HTTPS. Designed a repeatable deployment workflow and subdomain-based architecture for future scalability.",
      outcome: "Live system with scalable architecture and subdomain routing.",
      technologies: ["Docker", "Nginx", "VPS", "DNS", "HTTPS", "Docker Compose"],
      link: "https://academy.patroniautomation.com",
      linkLabel: "Visit Site",
      featured: true,
    },
    {
      title: "Huawei Cloud Developer Competition – Mobile Money Platform",
      description: "Presented a Mobile Money platform in the Huawei Cloud Developer Competition Southern Africa finals in Johannesburg. The solution used Huawei serverless computing, FunctionGraphs, and Cloud-managed Database RDS.",
      outcome: "1st place among 6 finalists from 130+ teams across Africa.",
      technologies: ["Huawei Cloud", "Serverless", "FunctionGraph", "RDS"],
      link: "https://www.huaweicloud.com/intl/en-us/news/20221121172334275.html",
      linkLabel: "Case Study",
    },
    {
      title: "Real-Time Acoustic AI System",
      description: "Built an edge AI system for real-time acoustic event classification and localisation using Raspberry Pi 3B+, MATRIX Voice, TensorFlow Lite, and GCC-PHAT algorithm with WebRTC VAD.",
      outcome: "Practical AI deployment on embedded hardware with real-time processing.",
      technologies: ["Raspberry Pi", "TensorFlow Lite", "Python", "MATRIX Voice", "Audio ML"],
      github: "https://github.com/Ernest-M/AEDL_project",
    },
    {
      title: "Technical Support / PBX / Cloud Systems",
      description: "Hands-on work configuring cloud PBX systems, resolving technical support issues, and implementing communication technology solutions for clients.",
      outcome: "Practical systems deployment, troubleshooting, and operations experience.",
      technologies: ["PBX", "Cloud Systems", "Technical Support", "Networking"],
    },
  ];

  return (
    <section id="projects" className="py-14 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text text-center">Featured Projects</h2>
        <p className="text-foreground/45 text-center mb-8 max-w-lg mx-auto text-sm">
          Real work, real outcomes — from cloud competitions to production deployments
        </p>
        
        <div className="grid gap-4 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div 
              key={i}
              className={`p-4 md:p-6 glass rounded-xl animate-slide-up group hover:border-primary/15 transition-all duration-300 ${
                project.featured ? 'border-gold/10 ring-1 ring-gold/5' : ''
              }`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-base md:text-lg font-bold leading-snug">{project.title}</h3>
                  {project.featured && (
                    <Badge className="bg-gold/15 text-gold border-gold/20 text-[10px] shrink-0">Featured</Badge>
                  )}
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="h-7 text-[11px] glass border-primary/15 text-primary hover:bg-primary/10">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="h-7 text-[11px] bg-primary text-primary-foreground hover:bg-primary-glow">
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        {project.linkLabel || 'View'}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-xs md:text-sm text-foreground/55 leading-relaxed mb-2.5">{project.description}</p>
              
              <div className="flex items-start gap-2 mb-3">
                <span className="text-[11px] text-gold font-medium shrink-0 mt-0.5">Outcome:</span>
                <p className="text-[11px] text-foreground/45">{project.outcome}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, j) => (
                  <Badge key={j} variant="secondary" className="bg-surface-elevated text-foreground/55 text-[10px] font-normal px-2 py-0.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
