
import { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Define the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            // Don't unobserve to ensure elements stay visible
          }
        });
      },
      { threshold: 0.1 }
    );

    const animElements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    animElements?.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (animElements) {
        animElements.forEach((el) => {
          observer.unobserve(el);
          // Ensure elements are visible when component unmounts
          el.classList.add('animate-fade-in');
        });
      }
    };
  }, []);
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Create the email content
      const emailContent = {
        to: "fumagalliandrea01@gmail.com",
        from: data.email,
        subject: `Portfolio Contact from ${data.name}`,
        message: data.message,
        name: data.name,
      };
      
      // Send the email using EmailJS or a similar service
      // This is where we would normally connect to a backend service
      // For now, we'll simulate sending by using the fetch API to a hypothetical endpoint
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_id", // You would replace this with your actual EmailJS service ID
          template_id: "template_id", // You would replace this with your actual EmailJS template ID
          user_id: "user_id", // You would replace this with your actual EmailJS user ID
          template_params: {
            to_email: "fumagalliandrea01@gmail.com",
            from_name: data.name,
            from_email: data.email,
            message: data.message,
          },
        }),
      });
      
      // For demo purposes, we'll just console.log and show a success toast
      console.log("Form submitted:", data);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      form.reset();
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-container" ref={sectionRef}>
      <h2 className="section-heading contact">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="opacity-0 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h3 className="text-2xl font-semibold text-slate-light mb-6">Send me a message</h3>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate font-mono">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="bg-navy-light border border-slate/20 text-slate-light focus:border-accent" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate font-mono">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your email" 
                        type="email" 
                        className="bg-navy-light border border-slate/20 text-slate-light focus:border-accent" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate font-mono">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Your message" 
                        className="bg-navy-light border border-slate/20 text-slate-light focus:border-accent min-h-32" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="font-mono border border-accent text-accent px-6 py-2 rounded hover:bg-accent/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </Form>
        </div>
        
        <div className="opacity-0 animate-on-scroll space-y-8" style={{ transitionDelay: '400ms' }}>
          <div>
            <h3 className="text-2xl font-semibold text-slate-light mb-6">Contact Information</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a 
                  href="mailto:fumagalliandrea01@gmail.com" 
                  className="text-slate hover:text-accent transition-colors"
                >
                  fumagalliandrea01@gmail.com
                </a>
              </li>
              
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a 
                  href="tel:+393920002380" 
                  className="text-slate hover:text-accent transition-colors"
                >
                  +39 392 000 2380
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1" />
                <span className="text-slate">
                  Vicolo Broletto 12H, Bellinzago Lombardo, Milan - Italy
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-slate-light mb-4">Connect with me</h3>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate hover:text-accent transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
