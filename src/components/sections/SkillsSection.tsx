import { motion } from 'motion/react';
import { Database, Layers, Layout, Server, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES, type SkillCategory } from '@/src/data/skills';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/src/components/ui/tabs';
import { fadeSlideUp, staggerContainer, viewportReveal } from '@/src/lib/motion';

function CategoryIcon({ name }: { name: SkillCategory['iconName'] }) {
  switch (name) {
    case 'server':
      return <Server className="h-4 w-4 text-accent-brand" aria-hidden="true" />;
    case 'layout':
      return <Layout className="h-4 w-4 text-accent-brand" aria-hidden="true" />;
    case 'database':
      return <Database className="h-4 w-4 text-accent-brand" aria-hidden="true" />;
    case 'wrench':
      return <Wrench className="h-4 w-4 text-accent-brand" aria-hidden="true" />;
    case 'layers':
      return <Layers className="h-4 w-4 text-accent-brand" aria-hidden="true" />;
  }
}

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <Card className="h-full transition-colors duration-150 hover:border-foreground/25">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2.5">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-secondary/70">
            <CategoryIcon name={category.iconName} />
          </div>
          <CardTitle className="text-base">{category.label}</CardTitle>
        </div>
        <CardDescription className="pt-1 text-xs">{category.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border/70">
          {category.items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-3 py-2.5 first:pt-0 last:pb-0">
              <span className="text-sm font-medium text-foreground">{item.name}</span>
              <span className="text-right text-xs text-muted-foreground">{item.detail}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
          className="max-w-2xl"
        >
          <p className="text-xs font-medium tracking-wide text-accent-brand">Technical Skills</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Core technologies and production tooling.
          </h2>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Organized across backend services, relational databases, enterprise ERP frameworks, and
            frontend interfaces used in day-to-day delivery.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mt-10">
          <TabsList aria-label="Filter technical skills by category">
            <TabsTrigger value="all">All Categories</TabsTrigger>
            {SKILL_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportReveal}
              className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {SKILL_CATEGORIES.map((category) => (
                <motion.div key={category.id} variants={fadeSlideUp}>
                  <SkillCategoryCard category={category} />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {SKILL_CATEGORIES.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="max-w-xl">
                <SkillCategoryCard category={category} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
