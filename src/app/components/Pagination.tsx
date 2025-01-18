import Link from "next/link";

interface PaginationProps {
  currentPage?: number;
  totalPages: number;
}

const Pagination = ({ currentPage = 1, totalPages }: PaginationProps) => {
  // Determine previous and next page numbers
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center space-x-6 mt-10"
    >
      {/* Previous Page Link */}
      {prevPage ? (
        <Link
          href={`/info${prevPage > 1 ? `?page=${prevPage}` : ""}`}
          className="px-4 py-2 rounded bg-[var(--light-gray)] text-[var(--white)] hover:bg-[var(--gold)] transition"
          aria-label={`Go to page ${prevPage}`}
        >
          Previous
        </Link>
      ) : (
        <span
          className="px-4 py-2 rounded bg-[var(--background)] text-[var(--white)] cursor-not-allowed"
          aria-disabled="true"
        >
          Previous
        </span>
      )}

      {/* Current Page Indicator */}
      <span className="text-[var(--foreground)]">
        Page <span className="font-semibold">{currentPage}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </span>

      {/* Next Page Link */}
      {nextPage ? (
        <Link
          href={`/info?page=${nextPage}`}
          className="px-4 py-2 rounded bg-[var(--light-gray)] text-[var(--white)] hover:bg-[var(--gold)] transition"
          aria-label={`Go to page ${nextPage}`}
        >
          Next
        </Link>
      ) : (
        <span
          className="px-4 py-2 rounded bg-[var(--background)] text-[var(--white)] cursor-not-allowed"
          aria-disabled="true"
        >
          Next
        </span>
      )}
    </nav>
  );
};

export default Pagination;
