import type { Reservation } from "@/types";

interface ReservationCardProps {
  reservation: Reservation;
}

export function ReservationCard({ reservation }: ReservationCardProps) {
  return (
    <div className="border rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">Reservation #{reservation.id}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            {new Date(reservation.startDate).toLocaleDateString()} -{" "}
            {new Date(reservation.endDate).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            reservation.status === "confirmed"
              ? "bg-green-100 text-green-800"
              : reservation.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : reservation.status === "cancelled"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {reservation.status}
        </span>
      </div>
      <div className="mt-4">
        <span className="text-lg font-bold">${reservation.totalPrice}</span>
      </div>
    </div>
  );
}

