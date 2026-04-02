import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:muuoernest001@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-surface">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text text-center">Let's Work Together</h2>
        <p className="text-foreground/50 text-center mb-10 max-w-lg mx-auto text-sm md:text-base">
          Have a project, opportunity, or idea? I'd love to hear about it. Let's build something useful.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 md:p-6 glass rounded-xl space-y-4 animate-slide-up">
            <h3 className="text-lg font-semibold mb-2">Send a Message</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-foreground/50 mb-1 block">Name</label>
                <Input 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="bg-surface-elevated border-border/30 text-sm h-9"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-foreground/50 mb-1 block">Email</label>
                <Input 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="you@email.com"
                  className="bg-surface-elevated border-border/30 text-sm h-9"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-foreground/50 mb-1 block">Subject</label>
              <Input 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="What's this about?"
                className="bg-surface-elevated border-border/30 text-sm h-9"
                required
              />
            </div>
            <div>
              <label className="text-xs text-foreground/50 mb-1 block">Message</label>
              <Textarea 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell me about your project..."
                rows={5}
                className="bg-surface-elevated border-border/30 text-sm resize-none"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary-glow text-sm">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
          
          {/* Info */}
          <div className="space-y-6 animate-slide-up delay-200">
            <div>
              <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Whether you need cloud infrastructure, automation workflows, technical implementation, 
                or want to discuss opportunities — I'm always open to connecting.
              </p>
            </div>
            
            <div className="space-y-3">
              <a href="mailto:muuoernest001@gmail.com" 
                className="flex items-center gap-3 p-3 glass rounded-lg hover:border-primary/20 transition-all text-sm group">
                <Mail className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-foreground/40">Email</p>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors">muuoernest001@gmail.com</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ernest-muuo" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 glass rounded-lg hover:border-primary/20 transition-all text-sm group">
                <Linkedin className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-foreground/40">LinkedIn</p>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors">ernest-muuo</p>
                </div>
              </a>
              <a href="https://github.com/Ernest-M" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 glass rounded-lg hover:border-primary/20 transition-all text-sm group">
                <Github className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-xs text-foreground/40">GitHub</p>
                  <p className="text-foreground/70 group-hover:text-primary transition-colors">Ernest-M</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
