# RVnGo Frontend Setup Guide

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Installation

1. **Clone the repository** (if not already done)
   ```bash
   git clone <repository-url>
   cd rvngo-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional utility dependencies** (for shadcn/ui compatibility)
   ```bash
   npm install clsx tailwind-merge
   npm install -D class-variance-authority
   ```

4. **Setup environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure Overview

The project follows a modern Next.js 15 App Router architecture with:

- **Route Groups**: Organized into `(public)` and `(auth)` for clear separation
- **Component Organization**: Separated into `ui/`, `features/`, and `shared/`
- **Type Safety**: Full TypeScript support with shared types
- **State Management**: Zustand for global state
- **API Integration**: Custom API client with timeout and error handling
- **Styling**: Tailwind CSS with custom theme

## Adding shadcn/ui Components

This project is set up to use shadcn/ui components. To add components:

```bash
npx shadcn@latest init
```

Follow the prompts, then add components:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add form
```

## Available Routes

### Public Routes
- `/` - Home page
- `/listings` - Browse RV listings
- `/search` - Search for RVs

### Protected Routes (Authentication Required)
- `/dashboard` - User dashboard
- `/reservations` - Manage reservations
- `/trips` - View trips

### API Routes
- `/api/health` - Health check endpoint

## Development Workflow

1. **Create new feature components** in `src/components/features/[feature-name]/`
2. **Add shared components** in `src/components/shared/`
3. **Create custom hooks** in `src/hooks/`
4. **Add Zustand stores** in `src/stores/`
5. **Define types** in `src/types/`
6. **Add API endpoints** in `src/lib/api/`

## Building for Production

```bash
npm run build
npm start
```

## Code Quality

```bash
# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## Next Steps

1. Configure authentication with NextAuth.js
2. Set up shadcn/ui components
3. Connect to backend API
4. Implement authentication flows
5. Add more feature components
6. Set up testing (Jest + React Testing Library)
7. Configure CI/CD

## Additional Dependencies to Consider

- **Form Validation**: `react-hook-form` (already installed) + `zod` (already installed)
- **Date Handling**: `date-fns` (already installed)
- **API Fetching**: `swr` (already installed) or `@tanstack/react-query`
- **Icons**: `lucide-react` or `react-icons`
- **Toast Notifications**: `sonner` or `react-hot-toast`

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

### Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Zustand Documentation](https://zustand-demo.pmnd.rs)

