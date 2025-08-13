import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ernest.muuo@example.com",
      href: "mailto:ernest.muuo@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 700 000 000",
      href: "tel:+254700000000"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ernestmuuo",
      username: "@ernestmuuo"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ernestmuuo",
      username: "Ernest Muuo"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/254700000000",
      username: "Chat with me"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ready to collaborate or discuss opportunities? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 glass animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name"
                    placeholder="Your name"
                    className="bg-surface-elevated border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-surface-elevated border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject"
                  placeholder="What's this about?"
                  className="bg-surface-elevated border-border/50 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  rows={6}
                  className="bg-surface-elevated border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button className="w-full bg-primary text-background hover:bg-primary-glow glow-primary">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-slide-up delay-200">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you're looking for a cloud architect, need IoT expertise, or want to discuss 
                data analysis projects, I'm always open to new opportunities and collaborations.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-4 animate-slide-up delay-300">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            
            {/* Social Links */}
            <div className="animate-slide-up delay-400">
              <h4 className="text-lg font-semibold mb-4">Connect on Social</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 glass rounded-lg hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">{social.label}</p>
                        <p className="text-foreground font-medium">{social.username}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;