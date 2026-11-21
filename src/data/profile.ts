export interface FocusArea {
  id: string;
  title: string;
  summary: string;
  iconName: 'server' | 'webhook' | 'building' | 'ai';
}

export const PROFILE = {
  brandWordmark: 'Backend.Dev',
  roleTitle: 'Junior Backend Developer',
  heroSubtitle:
    "I'm a Junior Backend Developer specializing in Python, FastAPI, Django, and ERPNext. I build scalable APIs, automate business workflows, and develop practical software solutions.",
  email: 'hello@developer.dev',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  aboutParagraphs: [
    "I'm a Backend Developer focused on building practical software solutions that solve real-world problems. My expertise lies in Python-based backend development, particularly FastAPI and Django, along with enterprise application development using Frappe and ERPNext.",
    'I have worked on backend API development, database design, ERP customization, third-party integrations, and business process automation. I also have experience working with React, JavaScript, MySQL, and modern development tools.',
    "I believe good software is more than just writing code. It's about understanding problems, designing reliable systems, writing maintainable code, and continuously improving the user experience.",
    "I'm always exploring new technologies, improving my engineering skills, and looking for opportunities to contribute to meaningful software projects.",
  ],
  focusAreas: [
    {
      id: 'backend-dev',
      title: 'Backend Development',
      summary: 'Structured server-side logic, relational data modeling, and maintainable Python services.',
      iconName: 'server',
    },
    {
      id: 'api-eng',
      title: 'API Engineering',
      summary: 'Designing reliable services with FastAPI and Django, robust validation, and third-party integrations.',
      iconName: 'webhook',
    },
    {
      id: 'enterprise-apps',
      title: 'Enterprise Applications',
      summary: 'ERPNext and Frappe customization tailored to accounting, inventory, and operations.',
      iconName: 'building',
    },
    {
      id: 'ai-engineering',
      title: 'AI Engineering',
      summary: 'Building practical AI-powered features and integrating intelligent capabilities into applications.',
      iconName: 'ai',
    },
  ] as FocusArea[],
} as const;
