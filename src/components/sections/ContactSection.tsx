import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'motion/react';
import { Check, CheckCircle2, Copy, Github, Linkedin, Mail, RotateCcw, Send } from 'lucide-react';
import { toast } from 'sonner';
import { PROFILE } from '@/src/data/profile';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input, Label, Textarea } from '@/src/components/ui/fields';
import { Separator } from '@/src/components/ui/separator';
import { fadeSlideUp, viewportReveal } from '@/src/lib/motion';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name (at least 2 characters).'),
  email: z.string().trim().email('Please enter a valid email address.'),
  subject: z.string().trim().min(3, 'Please include a short subject (at least 3 characters).'),
  message: z.string().trim().min(10, 'Please enter a message of at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<ContactFormValues | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      toast.success('Email address copied');
      setTimeout(() => setCopiedEmail(false), 1800);
    } catch {
      toast.error('Unable to copy email address');
    }
  };

  const onSubmit = (values: ContactFormValues) => {
    setSubmittedPayload(values);
    toast.success('Inquiry prepared', {
      description: 'Validation passed. Use the mail client or copy option to deliver your message.',
    });
  };

  const buildMailtoHref = (payload: ContactFormValues) => {
    const body = `From: ${payload.name} (${payload.email})\n\n${payload.message}`;
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      payload.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleCopyInquiry = async (payload: ContactFormValues) => {
    const formatted = `To: ${PROFILE.email}\nFrom: ${payload.name} <${payload.email}>\nSubject: ${payload.subject}\n\n${payload.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      toast.success('Formatted message copied to clipboard');
    } catch {
      toast.error('Unable to copy message');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14"
        >
          {/* Left Column: Heading & Direct Links */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-wide text-accent-brand">Contact</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
              Have a project in mind? Let&apos;s build something useful.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Available for backend engineering roles, FastAPI or Django services, and ERPNext
              workflow customization projects.
            </p>

            <div className="mt-8 space-y-4">
              {/* Direct Email Card */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary/70">
                    <Mail className="h-4 w-4 text-accent-brand" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="block wrap-anywhere font-mono text-sm font-medium text-foreground hover:text-accent-brand transition-colors"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  size="sm" className="min-h-11"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent-brand" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-1 gap-3 min-[360px]:grid-cols-2">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground hover:border-foreground/25 hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Github className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium text-foreground hover:border-foreground/25 hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Linkedin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Send an Inquiry</CardTitle>
              </CardHeader>

              <CardContent>
                {submittedPayload ? (
                  <div className="space-y-5">
                    <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/50 p-4">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent-brand"
                        aria-hidden="true"
                      />
                      <div className="space-y-1 text-sm">
                        <p className="font-medium text-foreground">
                          Form validated and inquiry drafted.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          This static portfolio does not run a live email delivery backend. Send
                          directly via your email app or copy the formatted message below.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 rounded-lg border border-border bg-background p-4 text-sm">
                      <div className="flex flex-wrap gap-x-2 text-xs text-muted-foreground">
                        <span className="font-medium text-foreground">{submittedPayload.name}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono">{submittedPayload.email}</span>
                      </div>
                      <div className="font-medium text-foreground">{submittedPayload.subject}</div>
                      <Separator className="my-2" />
                      <p className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                        {submittedPayload.message}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <Button asChild variant="accent">
                        <a href={buildMailtoHref(submittedPayload)}>
                          <Mail className="h-4 w-4" aria-hidden="true" />
                          <span>Open in Email Client</span>
                        </a>
                      </Button>

                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => handleCopyInquiry(submittedPayload)}
                      >
                        <Copy className="h-4 w-4" aria-hidden="true" />
                        <span>Copy Message</span>
                      </Button>

                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          setSubmittedPayload(null);
                          reset();
                        }}
                      >
                        <RotateCcw className="h-4 w-4" aria-hidden="true" />
                        <span>Reset Form</span>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive" role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="you@company.com"
                          aria-invalid={Boolean(errors.email)}
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive" role="alert">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Input
                        id="contact-subject"
                        placeholder="Backend API project or role inquiry"
                        aria-invalid={Boolean(errors.subject)}
                        {...register('subject')}
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive" role="alert">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        placeholder="Tell me about the system, workflow, or role you have in mind..."
                        aria-invalid={Boolean(errors.message)}
                        {...register('message')}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-4 pt-1">
                      <span className="text-xs text-muted-foreground">
                        Validated client-side via Zod
                      </span>
                      <Button type="submit" variant="accent" className="min-h-11 w-full sm:w-auto" disabled={isSubmitting}>
                        <Send className="h-4 w-4" aria-hidden="true" />
                        <span>Prepare Message</span>
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
