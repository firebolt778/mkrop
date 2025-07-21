# MKrop.com - Software Development & IT Consulting Company

## Overview

This is a modern full-stack web application for MKrop.com, a software development and IT consulting company. The application showcases the company's services, portfolio, blog, and provides contact functionality. Built with React, TypeScript, Express.js, and PostgreSQL, it follows a clean architecture with a separation between client and server components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation of concerns:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **API Design**: RESTful endpoints with JSON responses
- **Middleware**: Custom logging, error handling, and request parsing

### Database Schema
The application uses four main entities:
- **Users**: Basic user authentication system
- **Blog Posts**: Content management for company blog
- **Portfolio Projects**: Showcase of completed projects
- **Contact Submissions**: Form submissions from potential clients

## Data Flow

1. **Frontend Requests**: React components use TanStack Query hooks to fetch data
2. **API Layer**: Express.js routes handle HTTP requests and validate input
3. **Database Layer**: Drizzle ORM provides type-safe database operations
4. **Response Flow**: Data flows back through the same layers with proper error handling

The application supports both in-memory storage (for development) and PostgreSQL (for production) through a storage interface pattern.

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL adapter for serverless environments
- **@tanstack/react-query**: Server state management
- **drizzle-orm & drizzle-kit**: Type-safe ORM and migration tools
- **@radix-ui/***: Headless UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight React router

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Static type checking
- **Replit integrations**: Development environment optimizations

## Deployment Strategy

The application is configured for deployment on Replit with the following build process:

1. **Development**: Uses Vite dev server with HMR and Express API proxy
2. **Build Process**: 
   - Frontend: Vite builds React app to `dist/public`
   - Backend: esbuild bundles Express server to `dist/index.js`
3. **Production**: Single Node.js process serves both static files and API endpoints
4. **Database**: Uses PostgreSQL connection string from environment variables
5. **Environment**: Configured for both development and production environments

The application includes proper error handling, logging middleware, and is optimized for the Replit hosting environment with custom plugins and configurations.