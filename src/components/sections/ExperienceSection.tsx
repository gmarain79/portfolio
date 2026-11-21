import { motion } from 'motion/react';
import { Briefcase, Check } from 'lucide-react';
import { EXPERIENCE_LIST } from '@/src/data/experience';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Separator } from '@/src/components/ui/separator';
import { fadeSlideUp, viewportReveal } from '@/src/lib/motion';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-secondary/30 py-20 sm:py-24 scroll-mt-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium tracking-wide text-accent-brand">
            Professional Experience
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Hands-on production engineering and enterprise systems.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {EXPERIENCE_LIST.map((entry) => (
            <motion.div
              key={entry.id}
              variants={fadeSlideUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
              className="relative pl-6 sm:pl-10"
            >
              {/* Subtle vertical timeline rule */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-2 sm:left-3 top-2 w-px bg-border"
              />
              <div
                aria-hidden="true"
                className="absolute left-0.5 sm:left-1.5 top-2 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-accent-brand bg-background"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent-brand" />
              </div>

              <Card>
                <CardHeader className="pb-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Briefcase className="h-3.5 w-3.5 text-accent-brand" aria-hidden="true" />
                        <span>{entry.employmentType}</span>
                        <span aria-hidden="true">·</span>
                        <span>{entry.location}</span>
                      </div>
                      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground">
                        {entry.role} — {entry.company}
                      </h3>
                    </div>

                    <div className="font-mono text-xs font-medium text-muted-foreground shrink-0">
                      {entry.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-base leading-relaxed text-muted-foreground">{entry.summary}</p>

                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-foreground">
                      Key Responsibilities
                    </h4>
                    <ul className="mt-3 grid grid-cols-1 gap-2.5 md:grid-cols-2">
                      {entry.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-brand"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-foreground mb-1">
                      Engineering Focus Areas
                    </h4>
                    <Accordion type="single" collapsible className="w-full">
                      {entry.highlights.map((highlight, idx) => (
                        <AccordionItem key={highlight.title} value={`item-${idx}`}>
                          <AccordionTrigger>{highlight.title}</AccordionTrigger>
                          <AccordionContent>{highlight.detail}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs text-muted-foreground">
                    {entry.stack.map((tech, index) => (
                      <span key={tech} className="inline-flex items-center gap-2">
                        <span>{tech}</span>
                        {index < entry.stack.length - 1 && (
                          <span aria-hidden="true" className="text-border">
                            ·
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
