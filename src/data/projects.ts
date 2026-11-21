export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  context: string;
  shortDescription: string;
  fullDescription: string;
  imagePath: string;
  imageAlt: string;
  stack: string[];
  highlights: string[];
  architectureNotes: string;
  repositoryStatus: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'riyal-erp',
    title: 'Riyal ERP',
    category: 'Enterprise Resource Planning',
    context: 'Production ERP Customization',
    shortDescription:
      'Enterprise ERP customization featuring tailored business workflows, custom analytical reports, and structured operational print formats.',
    fullDescription:
      'Comprehensive customization and extension of ERPNext on the Frappe Framework to align system behavior with complex multi-department business rules, approval hierarchies, and financial documentation standards.',
    imagePath: '/src/assets/images/project_riyal_erp_1795253607985.jpg',
    imageAlt: 'Isometric architectural representation of the Riyal ERP data workflow modules',
    stack: ['ERPNext', 'Frappe Framework', 'Python', 'MariaDB', 'Jinja2', 'JavaScript'],
    highlights: [
      'Enterprise ERP customization across core operational DocTypes and client/server scripts.',
      'Custom SQL and script reports delivering structured operational visibility.',
      'Precision-formatted print formats for invoices, vouchers, and formal business records.',
      'Streamlined approval and document state workflows reducing manual intervention.',
    ],
    architectureNotes:
      'Built using Frappe hooks, custom Python controllers, and MariaDB query reports to enforce server-side business rules cleanly without modifying core ERPNext source files.',
    repositoryStatus: 'Private Enterprise Project',
  },
  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    category: 'Supply Chain & Stock Control',
    context: 'Django & MySQL Application',
    shortDescription:
      'Full-featured stock control system built with Django and MySQL covering suppliers, purchase orders, stock movements, sales, barcode scanning, and low-stock alerts.',
    fullDescription:
      'A dedicated inventory and order management platform engineered to keep product catalogs, supplier procurement, warehouse stock movements, and sales records synchronized with real-time threshold monitoring.',
    imagePath: '/src/assets/images/project_inventory_system_1795253607128.jpg',
    imageAlt: 'Barcode scanner beside labeled anodized aluminum inventory bins',
    stack: ['Python', 'Django', 'MySQL', 'REST APIs', 'HTML', 'CSS'],
    highlights: [
      'Structured product catalog and supplier relationship management.',
      'End-to-end purchase order lifecycle and auditable stock movement ledger.',
      'Sales record tracking tied directly to transactional stock deductions.',
      'Barcode scanning support and automated low-stock reorder alerts.',
    ],
    architectureNotes:
      'Modeled around atomic Django ORM transactions in MySQL so stock receipts, adjustments, and sales entries remain consistent under concurrent updates.',
    repositoryStatus: 'Private Application',
  },
  {
    id: 'riyal-hms',
    title: 'Riyal HMS',
    category: 'Hospitality Operations',
    context: 'Hotel Management System',
    shortDescription:
      'Modern Hotel Management System streamlining reservations, front desk operations, room & housekeeping status, guest profiles, and billing workflows.',
    fullDescription:
      'End-to-end hospitality backend platform designed to coordinate guest reservations, room availability, housekeeping schedules, check-in/check-out flows, and folio billing inside a unified architecture.',
    imagePath: '/src/assets/images/project_riyal_hms_1795253607788.jpg',
    imageAlt: 'Minimalist architectural hotel front desk reception counter',
    stack: ['Python', 'FastAPI', 'MySQL', 'REST APIs', 'Docker'],
    highlights: [
      'Reservation lifecycle management and streamlined front desk check-in/out workflows.',
      'Real-time room inventory tracking and housekeeping task coordination.',
      'Centralized guest profile management and itemized folio billing.',
      'Modular modern backend architecture built for clean API consumption.',
    ],
    architectureNotes:
      'Structured with clear service boundaries separating reservation state validation, room allocation checks, and billing ledger calculations behind typed REST endpoints.',
    repositoryStatus: 'Private Production System',
  },
  {
    id: 'sspa',
    title: 'SSPA',
    category: 'API Engineering & Reliability',
    context: 'Backend Services & Diagnostics',
    shortDescription:
      'Backend API development focused on diagnosing and resolving complex endpoint issues while strengthening overall system reliability and maintainability.',
    fullDescription:
      'Backend engineering engagement centered on building new service endpoints, tracking down hard-to-reproduce API failures, hardening input validation, and improving day-to-day operational stability.',
    imagePath: '/src/assets/images/project_sspa_api_1795253608364.jpg',
    imageAlt: 'Technical isometric rendering of server blades and API routing pathways',
    stack: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'Postman', 'Linux'],
    highlights: [
      'Backend API endpoint development with explicit request/response contracts.',
      'Systematic root-cause debugging and resolution of production API defects.',
      'Improved error handling, validation checks, and backend reliability.',
      'Endpoint verification and regression testing via structured Postman suites.',
    ],
    architectureNotes:
      'Focused on defensive validation, deterministic error codes, and thorough API test coverage to prevent regressions across integrated client consumers.',
    repositoryStatus: 'Private Client System',
  },
];
