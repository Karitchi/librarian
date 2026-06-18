import { Link } from "react-router";

interface RentalCardProps {
  id: number;
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  userEmail?: string;
  dueDate: string;
  status: string;
  onReturn?: (id: number) => void;
}

export function RentalCard({ id, bookId, bookTitle, bookAuthor, userEmail, dueDate, status, onReturn }: RentalCardProps) {
  return (
    <div className="bg-black p-4 flex justify-between items-center text-white">
      <div>
        <Link to={`/books/${bookId}`} className="text-lg text-white border border-transparent hover:bg-white hover:text-black hover:border-black no-underline">
          {bookTitle}
        </Link>
        <p className="text-sm text-gray-400">{bookAuthor}</p>
        {userEmail && <p className="text-xs text-gray-500">par {userEmail}</p>}
      </div>
      <div className="text-right text-sm">
        <p>Échéance : {dueDate}</p>
        <p className={status === "active" ? "" : "text-gray-400"}>
          {status === "active" ? "Actif" : "Retourné"}
        </p>
        {status === "active" && onReturn && (
          <button onClick={() => onReturn(id)} className="mt-2 bg-white text-black px-3 py-1 text-xs cursor-pointer border border-black hover:bg-black hover:text-white hover:border-white">
            Retour
          </button>
        )}
      </div>
    </div>
  );
}
