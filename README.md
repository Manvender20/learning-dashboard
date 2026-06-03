# Learning Dashboard

A modern learning dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. The application provides a clean and responsive interface for tracking courses, monitoring learning activity, and viewing progress through an interactive dashboard.

## Features

* Responsive dashboard layout
* Collapsible sidebar navigation
* Hero section with personalized student information
* Course progress tracking cards
* Activity heatmap visualization
* Smooth animations using Framer Motion
* Reusable and scalable component architecture
* Type-safe development with TypeScript
* Modern dark-themed UI

## Tech Stack

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* Lucide React

## Project Structure

```text
src/
├── components/
│   ├── dashboard/
│   │   ├── HeroCard.tsx
│   │   ├── CourseCard.tsx
│   │   ├── ActivityCard.tsx
│   │   └── DashboardGrid.tsx
│   └── sidebar/
│       ├── Sidebar.tsx
│       └── SidebarItem.tsx
│
├── lib/
│   ├── getStudent.ts
│   ├── getCourses.ts
│   └── mock-data.ts
│
└── types/
    ├── student.ts
    └── course.ts
```

## Dashboard Components

### Hero Card

Displays student information including:

* Student name
* Learning streak
* Welcome message

### Course Cards

Displays:

* Course title
* Course icon
* Completion percentage
* Progress bar

### Activity Card

Displays:

* Learning activity heatmap
* Weekly consistency tracking

### Sidebar

Features:

* Collapsible navigation
* Route-based navigation
* Active menu highlighting
* Responsive design

## Key Concepts Implemented

* Component-based architecture
* Reusable UI components
* Props and data flow
* Dynamic rendering with `.map()`
* TypeScript interfaces
* Responsive design principles
* Animation and micro-interactions
* Clean folder structure

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## Future Enhancements

* Supabase integration
* User authentication
* Real-time course tracking
* Database-driven content
* Analytics dashboard
* User profile management

## Author

Manvender Pratap Singh

Built as a learning project to practice modern frontend development using the Next.js ecosystem.
