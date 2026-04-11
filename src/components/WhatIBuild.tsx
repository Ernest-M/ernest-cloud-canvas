import { Cloud, Workflow, Brain, Building2 } from 'lucide-react';

const WhatIBuild = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Deployments",
      description: "Production-ready infrastructure on AWS and self-hosted environments with Docker, domain routing, and HTTPS.",
    },
    {
      icon: Workflow,
      title: "Automation Workflows",
      description: "Streamlined business processes using APIs, integrations, and systems thinking to eliminate manual work.",
    },
    {
      icon: Brain,
      title: "AI-Powered Tools",
      description: "Practical AI and LLM-assisted solutions for classification, analysis, and intelligent automation.",
    },
    {
      icon: Building2,
      title: "Internal Business Systems",
      description: "Custom digital tools, dashboards, and platforms that solve real operational problems.",
    },
  ];

  return (
    <section className="py-14 md:py-18">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center gradient-text">What I Build</h2>
        <p className="text-foreground/45 text-center mb-8 text-sm">
          Practical solutions across four key areas
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className="p-4 md:p-5 glass rounded-xl animate-slide-up group hover:border-gold/20 transition-all duration-300"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="p-2 bg-primary/8 rounded-lg w-fit mb-3 group-hover:bg-gold/10 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{service.title}</h3>
                <p className="text-xs text-foreground/45 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
