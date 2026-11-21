export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  employmentType: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  stack: string[];
  highlights: {
    title: string;
    detail: string;
  }[];
}

export const EXPERIENCE_LIST: ExperienceEntry[] = [
  {
    id: 'intrapreneur-backend',
    role: 'Backend Developer',
    company: 'Intrapreneur',
    employmentType: 'Full-Time Engineering Role',
    period: 'Current',
    location: 'Enterprise & Product Engineering',
    summary:
      'Building production backend services, customizing ERPNext and Frappe enterprise applications, and maintaining API integrations across business-critical systems.',
    responsibilities: [
      'Developing and maintaining backend APIs using FastAPI.',
      'Customizing ERPNext and Frappe applications.',
      'Implementing business logic and database models.',
      'Integrating third-party APIs.',
      'Debugging, testing, and optimizing backend applications.',
      'Working on Django-based applications.',
    ],
    stack: ['Python', 'FastAPI', 'Django', 'ERPNext', 'Frappe Framework', 'MySQL', 'MariaDB', 'Docker'],
    highlights: [
      {
        title: 'API & Service Architecture',
        detail:
          'Designed validated REST endpoints using FastAPI and Pydantic schemas, ensuring consistent error payloads and clean separation between controllers and data services.',
      },
      {
        title: 'ERPNext & Frappe Customization',
        detail:
          'Extended standard DocTypes with server scripts, custom reports, automated approval workflows, and tailored print formats aligned with real business operations.',
      },
      {
        title: 'Reliability & Query Optimization',
        detail:
          'Investigated production API issues, resolved edge-case validation bugs, and refined relational database queries for faster response times.',
      },
    ],
  },
];
