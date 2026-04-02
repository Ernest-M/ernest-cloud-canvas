import { CheckCircle } from 'lucide-react';

const Experience = () => {
  const proofPoints = [
    "AWS Certified (Cloud Practitioner + Solutions Architect Associate)",
    "Graduate Engineer — BSc Electrical & Electronics Engineering",
    "Huawei Cloud Developer Competition finalist & 1st place winner",
    "Hands-on technical support and cloud systems deployment",
    "Builder of self-hosted platforms with Docker and custom domain infrastructure",
    "Practical AI deployment on edge hardware (Raspberry Pi + TensorFlow Lite)",
  ];

  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">Experience & Proof</h2>
        <p className="text-foreground/50 text-center mb-10 max-w-xl mx-auto text-sm md:text-base">
          Real credentials, real projects, real results
        </p>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-3">
            {proofPoints.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 glass rounded-xl animate-slide-up"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/70">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
