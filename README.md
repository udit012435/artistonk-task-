# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Folder structure
src/
├── components/
│   ├── ui/                   # Reusable micro-components (e.g., Badge)
│   ├── DashboardStats.jsx    # Top statistics cards
│   ├── TicketFilters.jsx     # Search and dropdown filters
│   ├── TicketList.jsx        # Table layout for tickets
│   ├── TicketCard.jsx        # Individual ticket row
│   └── TicketDetailsModal.jsx # Detailed view modal
├── store/
│   └── useTicketStore.js     # Zustand state & mock API logic
├── utils/

## Features
Real-time Statistics: Dynamic overview of total, open, in-progress, and resolved tickets.

Advanced Filtering & Search: Filter tickets by status and priority, or search by customer name and issue subject. Empty states are handled gracefully.

Ticket Management: Update ticket statuses seamlessly (Open ↔ In Progress ↔ Resolved).

Detailed View (Frosted Glass Modal): View comprehensive ticket details including creation date and simulated message history without leaving the dashboard.

Mock API Integration: Simulates real-world API fetching with loading indicators and error handling.

Responsive Design: Fully optimized for both desktop and mobile screens.

## Tech Stack
Frontend Framework: React.js

Styling: Tailwind CSS (v4)

State Management: Zustand (Lightweight, boilerplate-free global state)

Icons: Lucide React

## Installation & Setup

Clone the repository

Bash
git clone https://github.com/udit012435/artistonk-task-.git
Install dependencies

Bash
npm install
Start the development server

Bash
npm run dev
Open in Browser
Navigate to http://localhost:5173/ to view the application.
│   └── mockData.js           # Hardcoded JSON data & message history
├── App.jsx                   # Main application layout
└── main.jsx                  # React entry point
