import { motion } from 'motion/react';
import { BrainCircuit, Building2, Server, Webhook } from 'lucide-react';
import { PROFILE, type FocusArea } from '@/src/data/profile';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { fadeSlideUp, staggerContainer, viewportReveal } from '@/src/lib/motion';

function FocusIcon({ name }: { name: FocusArea['iconName'] }) {
  switch (name) {
    case 'server':
      return <Server className="h-5 w-5 text-accent-brand" aria-hidden="true" />;
    case 'webhook':
      return <Webhook className="h-5 w-5 text-accent-brand" aria-hidden="true" />;
    case 'building':
      return <Building2 className="h-5 w-5 text-accent-brand" aria-hidden="true" />;
    case 'ai':
      return <BrainCircuit className="h-5 w-5 text-accent-brand" aria-hidden="true" />;
  }
}

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14"
        >
          {/* Left Column: Narrative & Engineering Statement */}
          <motion.div variants={fadeSlideUp} className="lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-accent-brand">About Me</p>
            <h2 className="sr-only">About Me</h2>

            <div className="mt-4 space-y-3 text-base leading-normal text-muted-foreground">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

          </motion.div>

          {/* Right Column: Specialization Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:content-start"
          >
            {PROFILE.focusAreas.map((area) => (
              <div key={area.id}>
                <Card className="h-full transition-colors duration-150 hover:border-foreground/25">
                  <CardHeader className="pb-3">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/70">
                      <FocusIcon name={area.iconName} />
                    </div>
                    <CardTitle className="text-base">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
