import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";


type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const sendEmail = async (data: ContactFormData) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to send");
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [status, setStatus] = useState<string>('idle')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Loading')

    try{
      await sendEmail(formData)

      setStatus("success")

      toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 4000,
    });

    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
    } catch (error){
      setStatus("error")
      toast({
      title: "Something went wrong",
      description: "Please try again later.",
      variant: "destructive",
    });
     setStatus("idle");
    }

  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "luis.esteban.castaneda.luque@gmail.com",
      href: "mailto:luis.esteban.castaneda.luque@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Esteban2306",
      href: "https://github.com/Esteban2306",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/luisestebancastañeda/",
      href: "https://www.linkedin.com/in/luisestebancastañeda/",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-500 text-sm font-mono tracking-wider uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let's{" "}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Contact Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently open to new opportunities and collaborations. 
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Remote / Available Worldwide</span>
              </div>
            </div>

            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-card focus:border-cyan-500 focus:ring-cyan-500/40"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-card border-border focus:border-cyan-500 focus:ring-cyan-500/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-card border-border focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={status === 'Loading'}
                className="w-full bg-cyan-500 hover:bg-cyan-500/90 text-cyan-500-foreground font-semibold cursor-pointer"
              >
                {status === "loading" && (
                      <span className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-cyan-500-foreground/30 border-t-cyan-500-foreground rounded-full"
                        />
                        Sending…
                      </span>
                    )}

                    {status === "success" && (
                      <span className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Message sent
                      </span>
                    )}

                    {status === "idle" && (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
