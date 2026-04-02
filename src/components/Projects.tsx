import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Self-Hosted Forex Academy Deployment",
      description: "Built and deployed a production-ready forex learning platform using a VPS, Docker, Docker Compose, Nginx, Nginx Proxy Manager, Namecheap DNS, and HTTPS. Designed a repeatable deployment workflow and subdomain-based architecture for future scalability.",
      outcome: "Live deployment, custom domain routing, reusable self-hosted setup.",
      technologies: ["Docker", "Nginx", "VPS", "DNS", "HTTPS", "Docker Compose"],
      link: "https://academy.patroniautomation.com",
      linkLabel: "Visit Site",
    },
    {
      title: "Huawei Cloud Developer Competition – Mobile Money Platform",
      description: "Presented a Mobile Money platform project in the Huawei Cloud Developer Competition Southern Africa finals in Johannesburg. The solution used Huawei serverless computing, FunctionGraphs, and Cloud-managed Database RDS.",
      outcome: "1st place among 6 finalists from 130+ teams across Africa. Attracted financing and awards.",
      technologies: ["Huawei Cloud", "Serverless", "FunctionGraph", "RDS"],
      link: "https://www.huaweicloud.com/intl/en-us/news/20221121172334275.html",
      linkLabel: "Case Study",
    },
    {
      title: "Real-Time Acoustic AI System",
      description: "Built an edge AI system for real-time acoustic event classification and localisation using Raspberry Pi 3B+, MATRIX Voice, TensorFlow Lite, and GCC-PHAT algorithm with WebRTC VAD. Trained on ESC-50 dataset for events like footfall and clapping.",
      outcome: "Demonstrated practical AI deployment on embedded hardware with real-time processing.",
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
    <section id="projects" className="py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">Featured Projects</h2>
        <p className="text-foreground/50 text-center mb-10 max-w-xl mx-auto text-sm md:text-base">
          Real work, real outcomes — from cloud competitions to production deployments
        </p>
        
        <div className="grid gap-5 max-w-4xl mx-auto">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="p-5 md:p-6 glass rounded-xl animate-slide-up group hover:border-primary/20 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="h-8 text-xs glass border-primary/20 text-primary hover:bg-primary/10">
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        Code
                      </Button>
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="h-8 text-xs bg-primary text-primary-foreground hover:bg-primary-glow">
                        <ArrowUpRight className="w-3.5 h-3.5 mr-1.5" />
                        {project.linkLabel || 'View'}
                      </Button>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-sm text-foreground/60 leading-relaxed mb-3">{project.description}</p>
              
              <div className="flex items-start gap-2 mb-4">
                <span className="text-xs text-gold font-medium shrink-0 mt-0.5">Outcome:</span>
                <p className="text-xs text-foreground/50">{project.outcome}</p>
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, j) => (
                  <Badge key={j} variant="secondary" className="bg-surface-elevated text-foreground/60 text-[10px] font-normal px-2 py-0.5">
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
