export type SkillCategoryId = 'backend' | 'frontend' | 'database' | 'tools' | 'erp';

export interface SkillItem {
  name: string;
  detail: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  label: string;
  description: string;
  iconName: 'server' | 'layout' | 'database' | 'wrench' | 'layers';
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    description: 'Core server-side languages, web frameworks, and API design.',
    iconName: 'server',
    items: [
      { name: 'Python', detail: 'Primary backend language' },
      { name: 'FastAPI', detail: 'High-performance async APIs' },
      { name: 'Django', detail: 'Full-featured web & ORM apps' },
      { name: 'REST APIs', detail: 'Resource design & integration' },
      { name: 'Frappe Framework', detail: 'Metadata-driven Python stack' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Modern component interfaces and responsive web layouts.',
    iconName: 'layout',
    items: [
      { name: 'React', detail: 'Component UI architecture' },
      { name: 'JavaScript', detail: 'Client scripting & ES modules' },
      { name: 'TypeScript', detail: 'Type-safe frontend code' },
      { name: 'HTML', detail: 'Semantic document structure' },
      { name: 'CSS', detail: 'Responsive layout & styling' },
      { name: 'Tailwind CSS', detail: 'Utility-first design systems' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    description: 'Relational data modeling, querying, and transaction integrity.',
    iconName: 'database',
    items: [
      { name: 'MySQL', detail: 'Relational storage & indexing' },
      { name: 'MariaDB', detail: 'ERPNext & Frappe backing store' },
      { name: 'SQL', detail: 'Joins, aggregations & tuning' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    description: 'Version control, containerization, debugging, and daily workflow.',
    iconName: 'wrench',
    items: [
      { name: 'Git', detail: 'Branching & release history' },
      { name: 'GitHub', detail: 'Code reviews & collaboration' },
      { name: 'Docker', detail: 'Consistent service containers' },
      { name: 'Linux', detail: 'Server & CLI environments' },
      { name: 'Postman', detail: 'Endpoint testing & collections' },
      { name: 'VS Code', detail: 'Debugging & workspace setup' },
    ],
  },
  {
    id: 'erp',
    label: 'ERP',
    description: 'Enterprise customization, reporting, and automated workflows.',
    iconName: 'layers',
    items: [
      { name: 'ERPNext', detail: 'Core business modules' },
      { name: 'Frappe Customization', detail: 'DocTypes, hooks & scripts' },
      { name: 'Frappe Framework', detail: 'Python-based enterprise applications' },
      { name: 'Workflow Automation', detail: 'Approvals & state transitions' },
      { name: 'Business Logic', detail: 'Accounting & stock rules' },
    ],
  },
];
