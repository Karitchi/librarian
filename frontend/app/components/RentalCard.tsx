import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/books/${bookId}`)}
      className="bg-black p-4 flex justify-between items-center no-underline text-white hover:bg-white hover:text-black border border-transparent hover:border-black cursor-pointer"
    >
      <div>
        <p className="text-lg">{bookTitle}</p>
        <p className="text-sm text-gray-300">{bookAuthor}</p>
        {userEmail && <p className="text-xs text-gray-400">par {userEmail}</p>}
      </div>
      <div className="text-right text-sm">
        <p>Échéance : {dueDate}</p>
        <p className={status === "active" ? "" : "text-gray-300"}>
          {status === "active" ? "Actif" : "Retourné"}
        </p>
        {status === "active" && onReturn && (
          <button onClick={(e) => { e.stopPropagation(); onReturn(id); }} className="mt-2 bg-white text-black px-3 py-1 text-xs cursor-pointer border border-black hover:bg-black hover:text-white hover:border-white">
            Retour
          </button>
        )}
      </div>
    </div>
  );
}
