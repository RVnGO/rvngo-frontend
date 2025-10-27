/**
 * Shared TypeScript type definitions
 */

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface RVListing {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  images: string[];
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Reservation {
  id: string;
  listingId: string;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}

export interface Trip extends Reservation {
  listing: RVListing;
}

