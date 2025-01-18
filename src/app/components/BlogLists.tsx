import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { Post } from "@/types/post";

interface BlogListsProps {
  posts: Post[];
  totalPages: number;
  currentPage?: number;
}

export default function BlogLists({
  posts,
  totalPages,
  currentPage,
}: BlogListsProps) {
  console.log("Posts passed to BlogLists:", posts); // Debug posts array

  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="space-y-12">
        {posts.map((post) => {
          const { slugId, title, image, altText, description, date } = post; // Explicit destructuring
          console.log(`Post in map: slugId=${slugId}, title=${title}`); // Debug each post

          return (
            <div
              key={slugId || title} // Ensure key is unique
              className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8"
            >
              {/* Thumbnail */}
              <Link href={`/info/${slugId}`}>
                <Image
                  src={image || "/default-image.jpg"} // Default image fallback
                  alt={altText || "Default alt text"}
                  width={500}
                  height={350}
                  className="object-cover rounded-lg w-80 h-55 shadow-md"
                />
              </Link>

              {/* Post Content */}
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-black mb-2">
                  <Link href={`/info/${slugId}`}>{title}</Link>
                </h2>
                <p className="text-sm text-black mb-4">
                  {new Date(date).toLocaleDateString()}
                </p>
                <p className="text-black">{description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
