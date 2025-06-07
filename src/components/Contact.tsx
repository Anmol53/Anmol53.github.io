'use client';

import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Grid } from "./ui/Grid";
import { Input } from "./ui/Input";
import { TextArea } from "./ui/TextArea";
import { Button } from "./ui/Button";
import { Link } from "./ui/Link";
import { Icon } from "./ui/Icon";
import { Heading } from "./ui/Heading";
import { socialLinks } from "@/constants/social";
import { cn } from "@/lib/utils";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // Check if environment variables are set
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set');
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current
      );

      console.log('Email sent successfully:', result.text);
      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <Section id="contact">
      <Container maxWidth="xl">
        <Heading level={2} gradient>Get in Touch</Heading>
        
        <Grid cols={2} gap={12} className="mt-8">
          {/* Contact Info */}
          <div>
            <div className="prose dark:prose-invert mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I&apos;m always interested in hearing about new opportunities,
                collaborations, or just having a chat about technology.
              </p>
            </div>

            <div className="space-y-4">
              <Heading level={3}>Connect with me</Heading>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.url}
                    external
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <Icon icon={link.Icon} />
                    <span>{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                type="text"
                id="user_name"
                name="user_name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={status === 'loading'}
              />
              <Input
                label="Email"
                type="email"
                id="user_email"
                name="user_email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={status === 'loading'}
              />
              <TextArea
                label="Message"
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                required
                disabled={status === 'loading'}
              />
              <Button
                type="submit"
                isLoading={status === 'loading'}
                variant="primary"
                disabled={status === 'loading'}
                className={cn(
                  'w-full',
                  status === 'success' && 'bg-green-600 hover:bg-green-700',
                  status === 'error' && 'bg-red-600 hover:bg-red-700'
                )}
              >
                {status === 'loading' ? 'Sending...' :
                 status === 'success' ? 'Message Sent!' :
                 status === 'error' ? 'Failed to Send' :
                 'Send Message'}
              </Button>
            </form>
          </div>
        </Grid>
      </Container>
    </Section>
  );
} 