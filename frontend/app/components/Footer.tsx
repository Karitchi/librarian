export function Footer() {
  return (
    <div className="bg-black text-white py-6 px-4 mt-12 text-xs text-center">
      <p className="mb-1">
        Librarian est une application de démonstration conçue pour apprendre
        Java Spring Boot et React Router, développée en tandem avec une IA.
      </p>
      <p>
        Plus d'infos sur{" "}
        <a
          href="https://github.com/Karitchi/librarian"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          GitHub
        </a>.
      </p>
    </div>
  );
}
