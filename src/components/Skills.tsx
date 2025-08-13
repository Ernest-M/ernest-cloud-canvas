import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Cloud, Database, Code, Shield, Cpu, TrendingUp, 
  Server, GitBranch, Monitor, Zap 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Cloud Platforms",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 90 },
        { name: "Huawei Cloud", level: 85 },
        { name: "Azure", level: 70 },
        { name: "Google Cloud", level: 65 }
      ]
    },
    {
      category: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 82 },
        { name: "Java", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      category: "Data & Analytics",
      icon: TrendingUp,
      skills: [
        { name: "Data Analysis", level: 85 },
        { name: "Machine Learning", level: 78 },
        { name: "SQL", level: 88 },
        { name: "Financial Modeling", level: 72 }
      ]
    },
    {
      category: "Infrastructure",
      icon: Server,
      skills: [
        { name: "DevOps", level: 80 },
        { name: "Docker", level: 82 },
        { name: "Kubernetes", level: 75 },
        { name: "Terraform", level: 73 }
      ]
    },
    {
      category: "IoT & Hardware",
      icon: Cpu,
      skills: [
        { name: "IoT Systems", level: 87 },
        { name: "Sensor Integration", level: 85 },
        { name: "Embedded Systems", level: 78 },
        { name: "Circuit Design", level: 82 }
      ]
    },
    {
      category: "Security",
      icon: Shield,
      skills: [
        { name: "Cloud Security", level: 83 },
        { name: "Network Security", level: 77 },
        { name: "IAM", level: 85 },
        { name: "Compliance", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A comprehensive skill set spanning cloud architecture, software development, and engineering innovation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex}
                className="p-6 glass animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-foreground/60">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-surface-elevated"
                      />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Additional Tech Stack */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 gradient-text">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'AWS Lambda', 'EC2', 'S3', 'RDS', 'CloudFormation', 'VPC',
              'React', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL',
              'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow',
              'Arduino', 'Raspberry Pi', 'MQTT', 'REST APIs',
              'Git', 'CI/CD', 'Jenkins', 'Monitoring'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-surface-elevated rounded-full text-sm text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;