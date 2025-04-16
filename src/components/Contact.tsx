'use client';

import React, { useRef, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_j8dg5nz',
          'template_l7f2y3v',
          formRef.current,
          'v9U6dThQjJb0vW9qN'
        )
        .then(() => {
          toast.success('Message sent successfully!');
          formRef.current?.reset();
        })
        .catch(() => {
          toast.error('Failed to send message. Please try again.');
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-secondary/30 relative z-10 mt-[-4rem]" // Simplified styles for position
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground text-base text-left mb-16">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={`${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            } bg-card border border-border rounded-2xl shadow-sm p-6 h-full flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" required placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" required rows={4} placeholder="What’s on your mind?" />
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 text-white bg-gradient-to-r from-black via-neutral-800 to-black hover:opacity-90 rounded-xl transition shadow-sm"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div
            className={`${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            } bg-card border border-border rounded-2xl shadow-sm p-6 h-full`}
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-medium mb-6">Contact Info</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-secondary">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:bhaskar6858@gmail.com" className="text-muted-foreground hover:text-primary transition">
                    bhaskar6858@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-secondary">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a href="tel:+917080243002" className="text-muted-foreground hover:text-primary transition">
                    7080243002
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-secondary">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-muted-foreground">Dehradun, Uttarakhand</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
