/**
 * Application constants
 */

export const APP_NAME = "RVnGo";
export const APP_DESCRIPTION = "RV Rental Marketplace";

// API Configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
export const API_TIMEOUT = 30000; // 30 seconds

// Routes
export const ROUTES = {
  HOME: "/",
  LISTINGS: "/listings",
  SEARCH: "/search",
  DASHBOARD: "/dashboard",
  RESERVATIONS: "/reservations",
  TRIPS: "/trips",
} as const;

