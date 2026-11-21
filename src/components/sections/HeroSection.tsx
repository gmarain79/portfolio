import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, User } from 'lucide-react';
import profilePhoto from '@/src/assets/images/profile-photo.jpeg';
import { PROFILE } from '@/src/data/profile';
import { Separator } from '@/src/components/ui/separator';
import { EASE_SETTLE } from '@/src/lib/motion';

export function HeroSection() {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border pt-14 pb-16 sm:pt-20 sm:pb-24 scroll-mt-16"
    >
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_SETTLE }}
          className="flex flex-col justify-center lg:col-span-7"
        >
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            I&apos;m a Junior Backend Developer passionate about building reliable, scalable, and
            efficient software solutions. I specialize in{' '}
            <strong className="font-semibold text-foreground">Python</strong>,{' '}
            <strong className="font-semibold text-foreground">FastAPI</strong>,{' '}
            <strong className="font-semibold text-foreground">Django</strong>, and{' '}
            <strong className="font-semibold text-foreground">ERPNext</strong>, with experience
            developing REST APIs, designing database-driven applications, customizing enterprise
            systems, and automating business workflows. I enjoy solving complex problems and turning
            business requirements into practical, maintainable software.
          </p>

          <Separator className="my-8 max-w-md" />

          {/* Social & Core Stack Metadata */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-accent-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>

            <span className="hidden sm:inline text-border" aria-hidden="true">
              |
            </span>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>Python</span>
              <span aria-hidden="true">·</span>
              <span>FastAPI</span>
              <span aria-hidden="true">·</span>
              <span>Django</span>
              <span aria-hidden="true">·</span>
              <span>ERPNext</span>
            </div>
          </div>
        </motion.div>
        <div className="relative order-first aspect-square w-52 justify-self-center sm:w-64 lg:order-last lg:col-span-5 lg:w-80 overflow-hidden rounded-full border border-border/80 bg-[#2b1a5a] ring-4 ring-accent-brand/15 shadow-lg">
          {avatarError ? (
            <div className="flex h-full w-full items-center justify-center text-violet-200">
              <User className="h-16 w-16" aria-hidden="true" />
            </div>
          ) : (
            <img
              src={profilePhoto}
              alt="Profile photo of the backend developer"
              referrerPolicy="no-referrer"
              onError={() => setAvatarError(true)}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
