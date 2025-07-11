"use client";

import { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Button } from "@/components/ui/Button";
import { useSearchParams } from 'next/navigation';

export default function RequestAccessPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const repoParam = searchParams.get('repo') || '';
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    repo: repoParam,
    reason: ""
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_REPO_ACCESS_TEMPLATE_ID || 
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      setStatus('error');
      return;
    }
    try {
      setStatus('loading');
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_REPO_ACCESS_TEMPLATE_ID,
        formRef.current
      );
      setStatus('success');
      setFormData({ name: "", email: "", repo: "", reason: "" });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Section>
      <Container maxWidth="md">
        <Heading level={2} gradient className="mb-8">Request Access to Private Repo</Heading>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Name"
            type="text"
            id="user_name"
            name="user_name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
            disabled={status === 'loading'}
          />
          <Input
            label="Email"
            type="email"
            id="user_email"
            name="user_email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
            disabled={status === 'loading'}
          />
          <Input
            label="Repository of Interest"
            type="text"
            id="repo"
            name="repo"
            value={formData.repo}
            onChange={e => setFormData({ ...formData, repo: e.target.value })}
            required
            disabled={status === 'loading'}
          />
          <TextArea
            label="Reason for Access"
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={e => setFormData({ ...formData, reason: e.target.value })}
            rows={5}
            required
            disabled={status === 'loading'}
          />
          <Button
            type="submit"
            isLoading={status === 'loading'}
            variant="primary"
            disabled={status === 'loading'}
            className={
              status === 'success' ? 'bg-green-600 hover:bg-green-700' :
              status === 'error' ? 'bg-red-600 hover:bg-red-700' :
              ''
            }
          >
            {status === 'loading' ? 'Sending...' :
             status === 'success' ? 'Request Sent!' :
             status === 'error' ? 'Failed to Send' :
             'Request Access'}
          </Button>
        </form>
      </Container>
    </Section>
  );
} 