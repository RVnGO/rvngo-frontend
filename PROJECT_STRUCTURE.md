# RVnGo Frontend - Project Structure

This document outlines the project structure for the RVnGo frontend application.

## Directory Structure

```
rvngo-frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public routes (no auth required)
│   │   │   ├── listings/      # RV listings page
│   │   │   ├── search/        # Search page
│   │   │   └── page.tsx       # Home page
│   │   ├── (auth)/            # Protected routes (auth required)
│   │   │   ├── dashboard/     # User dashboard
│   │   │   ├── reservations/  # Reservations management
│   │   │   └── trips/         # User trips
│   │   ├── api/               # Next.js API routes
│   │   │   └── health/        # Health check endpoint
│   │   ├── layout.tsx         # Root layout
│   │   └── providers.tsx      # App providers (context, state, etc.)
│   │
│   ├── components/
│   │   ├── ui/               # shadcn/ui components
│   │   ├── features/         # Feature-specific components
│   │   │   ├── listings/     # Listing components (ListingCard, etc.)
│   │   │   ├── reservations/ # Reservation components
│   │   │   └── search/       # Search components (SearchBar, etc.)
│   │   └── shared/           # Shared/common components
│   │       ├── Header.tsx    # Site header
│   │       ├── Footer.tsx    # Site footer
│   │       └── Loading.tsx   # Loading spinner
│   │
│   ├── lib/
│   │   ├── api/              # API client & endpoints
│   │   │   ├── client.ts     # API client implementation
│   │   │   └── index.ts
│   │   ├── auth/             # Authentication utilities
│   │   │   └── index.ts      # Auth token management
│   │   ├── utils/            # Utility functions
│   │   │   ├── cn.ts         # Tailwind class merger
│   │   │   └── index.ts
│   │   └── constants/        # Constants & configuration
│   │       └── index.ts      # App constants, routes, API config
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts        # Auth hook
│   │   └── index.ts
│   │
│   ├── stores/               # Zustand stores
│   │   ├── authStore.ts      # Auth state management
│   │   └── index.ts
│   │
│   ├── types/                # TypeScript type definitions
│   │   └── index.ts          # Shared types (User, RVListing, etc.)
│   │
│   └── styles/               # Global styles
│       └── globals.css       # Global CSS styles
│
├── public/
│   └── images/               # Static images
│
├── .env.local.example        # Environment variables example
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## Route Groups

### Public Routes `(public)`
- `/` - Home page
- `/listings` - Browse RV listings
- `/search` - Search for RVs

### Protected Routes `(auth)`
- `/dashboard` - User dashboard
- `/reservations` - Manage reservations
- `/trips` - View trips

Route groups in Next.js use parentheses `()` to organize routes without affecting the URL structure.

## Component Organization

### UI Components (`components/ui/`)
Contains shadcn/ui components. Add components using:
```bash
npx shadcn@latest add [component-name]
```

### Feature Components (`components/features/`)
Feature-specific components organized by domain:
- **listings/** - Listing-related components
- **reservations/** - Reservation-related components
- **search/** - Search-related components

### Shared Components (`components/shared/`)
Reusable components used across the application:
- Header, Footer, Loading, etc.

## State Management

- **Zustand** stores in `stores/` for global state
- **React hooks** in `hooks/` for reusable logic

## API Integration

- API client in `lib/api/client.ts`
- Configure API endpoint in `.env.local`:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:8000
  ```

## Type Safety

TypeScript types are defined in `types/index.ts` for:
- User
- RVListing
- Reservation
- Trip

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and update with your values:
```bash
cp .env.local.example .env.local
```

