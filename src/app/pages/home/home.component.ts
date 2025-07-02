import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    projects = [
  {
    title: "Enterprise Attendance & Leave Automation Platform",
    stack: ".NET 8, Angular, SQL Server, PrimeNG",
    description:
      "An HR solution for managing employee attendance and leave requests with real-time tracking and approval workflows.",
    features: [
      "Custom leave request IDs (e.g., LEAVE-001)",
      "Entity Framework migrations",
      "Responsive UI with PrimeNG"
    ]
  },
  {
    title: "Real-Time Ticketing & Support Collaboration Platform",
    stack: ".NET 8, Angular, SignalR",
    description:
      "A support ticketing system enabling real-time discussions and status tracking for enterprise teams.",
    features: [
      "Real-time SignalR messaging",
      "Ticket priority & categorization",
      "Threaded discussions"
    ]
  },
  {
    title: "Secure Enterprise Messaging Platform",
    stack: ".NET 8, SignalR, Angular",
    description:
      "A private, real-time 1-to-1 messaging system designed for secure corporate communications.",
    features: [
      "Sender/Receiver chat structure",
      "SignalR integration",
      "Live updates"
    ]
  },
  {
    title: "Digital Salary Advance & Corporate Benefit Solution",
    stack: ".NET 8, Angular, SQL Server",
    description:
      "A B2B2C financial solution helping employers provide installment-based support to employees for purchasing essential services.",
    features: [
      "Installment payment system",
      "Employer budget control",
      "Partner vendor integration"
    ]
  },
  {
    title: "Behavioral AI Middleware for Threat Detection",
    stack: ".NET Middleware",
    description:
      "Backend service that identifies abnormal request patterns for detecting suspicious behavior.",
    features: [
      "IP and user-agent tracking",
      "Pattern anomaly detection",
      "Behavior logging"
    ]
  },
  {
    title: "Employer-Partner Integration Backend Services",
    stack: "ASP.NET Core",
    description:
      "A scalable API layer for managing employer and partner relationships and roles.",
    features: [
      "Role-based access",
      "Employer CRUD operations",
      "Service-oriented architecture"
    ]
  },
  {
    title: "E-Commerce Product Automation Tool for nopCommerce",
    stack: "C#, SQL",
    description:
      "Automation tool for importing product data from Excel into nopCommerce via scripts.",
    features: [
      "Excel to product conversion",
      "SQL template for bulk inserts"
    ]
  },
  {
    title: "Interactive Notification Builder SPA",
    stack: "Angular",
    description:
      "A drag-and-drop interface for building structured system notifications within a web application.",
    features: [
      "Modular notification elements",
      "Drag-and-drop UX",
      "Reusable components"
    ]
  }
];
   onSubmit() {}
}
