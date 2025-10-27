import type { RVListing } from "@/types";

interface ListingCardProps {
  listing: RVListing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold">{listing.title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 mt-2">
        {listing.description}
      </p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-zinc-500">{listing.location}</span>
        <span className="text-lg font-bold">${listing.price}/night</span>
      </div>
    </div>
  );
}

