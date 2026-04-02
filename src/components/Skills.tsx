import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS", "Huawei Cloud", "Docker & Self-Hosting", "Cloud Architecture", "Deployment Workflows"]
    },
    {
      category: "Automation & Integration",
      skills: ["Workflow Automation", "APIs & Integrations", "Automation Systems Thinking", "Technical Support & Implementation"]
    },
    {
      category: "AI & Data",
      skills: ["AI / LLM Tools", "Python", "Data Visualization", "Power BI"]
    },
    {
      category: "Engineering",
      skills: ["Engineering Problem Solving", "Electrical & Electronics", "Networking Basics"]
    }
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", code: "CLF-C02" },
    { title: "AWS Certified Solutions Architect – Associate", code: "SAA-C03" },
  ];

  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">Skills & Certifications</h2>
        <p className="text-foreground/50 text-center mb-10 max-w-xl mx-auto text-sm md:text-base">
          A practical toolkit built across cloud, automation, AI, and engineering
        </p>
        
        {/* Skills */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {skillGroups.map((group, i) => (
            <div key={i} className="p-5 glass rounded-xl animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <h3 className="text-sm font-semibold text-primary mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <Badge key={j} variant="secondary" className="bg-surface-elevated text-foreground/70 text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-center mb-5 text-foreground/80">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i} className="p-5 glass rounded-xl flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="p-2.5 bg-gold/10 rounded-lg shrink-0">
                  <Award className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-semibold">{cert.title}</h4>
                    <CheckCircle className="w-3.5 h-3.5 text-success shrink-0" />
                  </div>
                  <p className="text-xs text-foreground/50">Amazon Web Services · {cert.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
