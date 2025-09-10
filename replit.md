# FuturCraft Institut - Educational Platform

## Overview

FuturCraft Institut is a private IT training center website built with Next.js 15. The platform showcases educational programs, training courses, team information, and provides user engagement features. It serves as the digital presence for a computer science institute focused on modern, practical education with an emphasis on digital sobriety and environmental consciousness.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 15 with App Router architecture
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Icons**: Lucide React and Tabler Icons for consistent iconography
- **Animations**: Motion (Framer Motion) for smooth animations and transitions
- **Typography**: Inter font family with Geist font optimization

### Component Structure
- **Layout System**: Root layout with Header and Footer components
- **Section Components**: Modular sections (Hero, About, Formations, Testimonials, etc.)
- **UI Components**: Reusable components (Buttons, Cards, Accordions, Carousels)
- **Page Components**: Individual pages for formations, blog, applications

### State Management
- **Local State**: React hooks (useState, useEffect, useRef) for component-level state
- **Context API**: BrochureContext for modal state management
- **Custom Hooks**: useInView for intersection observer functionality, useIsMobile for responsive behavior

### Routing and Navigation
- **File-based Routing**: Next.js App Router with nested layouts
- **Dynamic Routes**: Formation pages with slug-based routing ([slug]/page.tsx)
- **Navigation**: Responsive navbar with mobile hamburger menu

### Data Architecture
- **Static Content**: Hardcoded data arrays for testimonials, formations, team members
- **Image Assets**: Public folder structure with optimized images
- **Blog Integration**: Strapi CMS integration for blog content (external API calls)

### Responsive Design
- **Mobile-First**: Tailwind CSS responsive utilities
- **Breakpoint System**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Component Adaptability**: Conditional rendering based on screen size

## External Dependencies

### Core Framework Dependencies
- **Next.js 15.3.4**: React framework with server-side rendering
- **React 19.0.0**: UI library with latest features
- **TypeScript**: Type safety and development experience

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **@radix-ui/react-***: Unstyled, accessible UI primitives
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library
- **@tabler/icons-react**: Additional icon set

### Animation and Interaction
- **motion (Framer Motion)**: Animation library for React
- **@gsap/react**: GSAP animation integration
- **embla-carousel-react**: Carousel component

### Form and Data Handling
- **@hookform/resolvers**: Form validation resolvers
- **date-fns**: Date manipulation utilities
- **input-otp**: OTP input component

### Development Tools
- **next-themes**: Theme switching functionality
- **cmdk**: Command palette component

### External Services
- **Strapi CMS**: Headless CMS for blog content management (localhost:1337)
- **Vercel**: Recommended deployment platform
- **Image Optimization**: Next.js built-in image optimization