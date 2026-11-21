import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Check, Lock } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '@/src/data/projects';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/src/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/src/components/ui/dialog';
import { Separator } from '@/src/components/ui/separator';
import { ProjectImage } from '@/src/components/ProjectImage';
import { fadeSlideUp, staggerContainer, viewportReveal } from '@/src/lib/motion';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium tracking-wide text-accent-brand">Featured Projects</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Selected backend systems and enterprise applications.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Production software spanning ERP customization, inventory tracking, hospitality
            operations, and API reliability engineering.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.id} variants={fadeSlideUp}>
              <Card className="group flex h-full flex-col overflow-hidden transition-colors duration-150 hover:border-foreground/25">
                {/* Media Frame */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-secondary/40">
                  <ProjectImage
                    src={project.imagePath}
                    alt={project.imageAlt}
                    title={project.title}
                    className="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* Card Header */}
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.context}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                </CardHeader>

                {/* Card Body */}
                <CardContent className="flex-1 space-y-5">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Card Footer */}
                <CardFooter className="flex-wrap justify-between gap-3 border-t border-border/70 bg-secondary/20 px-4 py-4 sm:px-6">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{project.repositoryStatus}</span>
                  </span>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm" className="min-h-11"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent>
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{selectedProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.context}</span>
                </div>
                <DialogTitle className="mt-1 font-display text-2xl font-bold">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="pt-1">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 overflow-hidden rounded-lg border border-border aspect-video bg-secondary/40">
                <ProjectImage
                  src={selectedProject.imagePath}
                  alt={selectedProject.imageAlt}
                  title={selectedProject.title}
                />
              </div>

              <div className="mt-5 space-y-5">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-foreground">
                    Key Deliverables & Features
                  </h4>
                  <ul className="mt-2.5 space-y-2">
                    {selectedProject.highlights.map((item) => (
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
                  <h4 className="text-xs font-semibold tracking-wide text-foreground">
                    Architecture Notes
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {selectedProject.architectureNotes}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-[11px]">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{selectedProject.repositoryStatus}</span>
                  </span>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
