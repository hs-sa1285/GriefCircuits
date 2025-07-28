# Grief Circuits - Replit Development Guide

## Overview

Grief Circuits is a full-stack web application built to support male high schoolers in navigating grief, burnout, and recovery through physics-based metaphors and community healing. The application serves as a platform to share the story of how a small experimental program grew from 6 students to over 100 participants locally, and is now scaling to reach 1000+ students across Pakistan through the annual STEM Olympiad integration. The website demonstrates the power of reframing emotional education through scientific concepts that resonate with students.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Router**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: Hot reload with Vite integration in development mode

### Data Storage Solutions
- **Database**: PostgreSQL configured via Drizzle ORM
- **ORM**: Drizzle with type-safe schema definitions
- **Connection**: Neon Database serverless PostgreSQL
- **Development Storage**: In-memory storage interface with planned database migration
- **Migrations**: Drizzle Kit for database schema management

### Design System
- **Component Library**: Custom components extending Radix UI
- **Theming**: CSS custom properties with light/dark mode support
- **Colors**: Custom brand palette including soft-blue, muted-coral, clay-beige, and warm-gray
- **Typography**: Optimized for readability and accessibility

## Key Components

### Frontend Structure
- **Pages**: Home landing page and Session Story narrative page
- **Components**: Reusable UI components with consistent design patterns
- **Hooks**: Custom React hooks for mobile detection and toast notifications
- **Navigation**: Fixed header with responsive mobile-friendly navigation

### Backend Structure
- **Routes**: Centralized route registration with HTTP server setup
- **Storage**: Abstract storage interface supporting both in-memory and database implementations
- **Middleware**: Request logging, JSON parsing, and error handling
- **Development Tools**: Vite integration for hot module replacement

### Content Architecture
- **Story Narrative**: Physics lab setting with emotional circuit metaphors
- **Student Journey**: Documentation of program growth from 6 to 100+ students
- **Educational Approach**: Systems-based emotional education through familiar STEM concepts

## Data Flow

### Current Implementation
1. **Static Content**: Pages serve static content about the Grief Circuits program
2. **Form Handling**: Contact forms with client-side validation (backend integration pending)
3. **Navigation**: Client-side routing between home and story pages
4. **Responsive Design**: Mobile-first approach with progressive enhancement

### Planned Data Flow
1. **User Registration**: Student and educator account creation
2. **Content Management**: Dynamic content for workshops and resources
3. **Community Features**: Forums or discussion spaces for participants
4. **Progress Tracking**: Individual and cohort progress monitoring

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, TanStack Query for state management
- **UI Components**: Comprehensive Radix UI component suite
- **Styling**: Tailwind CSS with PostCSS processing
- **Form Handling**: React Hook Form with Zod validation
- **Date Utilities**: date-fns for date manipulation
- **Development**: TypeScript, Vite, ESBuild for production builds

### Database & Backend
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution, various type definitions

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend
- **Hot Reload**: Full-stack hot reloading in development
- **Type Checking**: Continuous TypeScript compilation checking
- **Database**: Drizzle push commands for schema synchronization

### Production Build
- **Frontend**: Vite production build with optimized assets
- **Backend**: ESBuild bundling for Node.js deployment
- **Static Assets**: Optimized and bundled public assets
- **Environment**: Production Node.js server with compiled TypeScript

### Key Configuration Files
- **Vite Config**: Frontend build configuration with path aliases
- **Drizzle Config**: Database connection and migration settings
- **TypeScript**: Shared configuration for client, server, and shared code
- **Tailwind**: Custom design system with component-specific styling

### Replit Integration
- **Development Banner**: Replit development environment detection
- **Runtime Error Handling**: Development-specific error overlays
- **Environment Variables**: DATABASE_URL and other environment-specific configs