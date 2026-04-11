import { GraduationCap, Award, Wrench, Brain } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: GraduationCap, title: "Engineering Foundation", desc: "BSc Electrical & Electronics Engineering" },
    { icon: Award, title: "AWS Certified", desc: "Cloud Practitioner & Solutions Architect" },
    { icon: Wrench, title: "Hands-On Builder", desc: "Cloud, PBX, automation, and AI tools" },
    { icon: Brain, title: "Business Systems", desc: "Scalable digital solutions & internal tools" },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">About Me</h2>
        <p className="text-foreground/50 text-center mb-10 max-w-xl mx-auto text-sm md:text-base">
          Engineer, cloud architect, and builder of practical digital systems
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          <div className="space-y-4 text-sm md:text-base text-foreground/70 leading-relaxed">
            <p>
              I'm a graduate engineer with a BSc in Electrical and Electronics Engineering, 
              holding both the AWS Certified Cloud Practitioner and AWS Certified Solutions 
              Architect – Associate certifications. My work spans cloud infrastructure, 
              PBX and communication systems, workflow automation, and AI-assisted tooling.
            </p>
            <p>
              I've gained practical experience across technical support, system deployment, 
              and building self-hosted platforms. I'm drawn to solving real business problems 
              — whether that means deploying a production web application, configuring cloud 
              communication systems, or using LLM tools to streamline operations.
            </p>
            <p>
              I'm building toward a broader vision of creating useful, automated business 
              systems — combining engineering discipline with modern cloud and AI capabilities 
              to deliver solutions that actually work in the real world.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-4 glass rounded-xl animate-slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <Icon className="w-5 h-5 text-primary mb-2" />
                  <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
