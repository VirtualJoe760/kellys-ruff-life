"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/post";

export default function BlogCta({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Read Key Insights
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            No blog posts available at the moment. Check back soon for the latest updates!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Read Key Insights
          </h2>
          <p className="mt-2 text-lg text-gray-300">
            Discover real estate trends, economic updates, and expert advice written by Joseph Sardella himself.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slugId}
              className="flex flex-col justify-between h-full space-y-4"
            >
              {/* Thumbnail */}
              <div className="relative w-full">
                <Image
                  alt={post.altText || "Blog Post Thumbnail"}
                  src={post.image || "/default-image.jpg"}
                  className="aspect-video w-full rounded-2xl bg-gray-800 object-cover"
                  width={720}
                  height={405}
                  priority
                />
              </div>

              {/* Post Metadata */}
              <div className="text-xs flex items-center justify-between">
                <time dateTime={post.date} className="text-gray-400">
                  {new Date(post.date).toLocaleDateString()}
                </time>
                <span className="rounded-full bg-gray-900 px-3 py-1.5 font-medium text-gray-300">
                  {post.section || "General"}
                </span>
              </div>

              {/* Post Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white leading-snug">
                  <Link href={`/insights/${post.section}/${post.slugId}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm text-gray-400">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
