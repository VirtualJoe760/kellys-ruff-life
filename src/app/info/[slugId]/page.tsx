// src/app/info/[slug]/page.tsx

import { getPostBySlug } from "@/app/utils/fetchPosts";
import VariableHero from "@/app/components/VariableHero";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import { format } from "date-fns";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slugId: string } }) {
  const { slugId } = await params;

  if (!slugId) {
    return { title: "Post Not Found", description: "Content not found." };
  }

  try {
    const post = await getPostBySlug(slugId);
    return {
      title: post.title || "Untitled Blog Post",
      description: post.metaDescription || post.description || "Explore real estate insights.",
      openGraph: {
        title: post.title || "Untitled Blog Post",
        description: post.metaDescription || post.description || "Explore real estate insights.",
        images: [{ url: post.image || "/default-og-image.jpg", alt: post.altText || "Hero Image" }],
      },
    };
  } catch {
    return { title: "Post Not Found", description: "The requested blog post does not exist." };
  }
}

export default async function PostPage({ params }: { params: { slugId: string } }) {
  const { slugId } = await params;

  if (!slugId) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p className="text-lg font-semibold">Invalid URL: Missing content identifier.</p>
        <Link href="/info" className="text-blue-500 hover:underline mt-4">
          Back to Blog
        </Link>
      </div>
    );
  }

  try {
    const post = await getPostBySlug(slugId);

    return (
      <div className="bg-white text-black min-h-screen">
        {/* Hero Section */}
        <VariableHero
          backgroundImage={post.image || "/images/variable-hero-image.jpg"}
          heroContext={post.title || "Untitled Post"}
          description={`Published on: ${format(new Date(post.date), "MMMM dd, yyyy")}`}
        />

        {/* Blog Content */}
        <section className="container mx-auto max-w-4xl my-10 p-6 rounded-lg shadow-lg">
          <article className="prose prose-lg max-w-none prose-h1:text-black prose-h2:text-black prose-p:text-gray-700 prose-a:text-blue-500 hover:prose-a:text-blue-700 prose-strong:text-black">
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>{post.content || ""}</ReactMarkdown>
          </article>
        </section>

        {/* Call-to-Action */}
        <div className="text-center py-10 px-5">
          <h3 className="text-2xl font-semibold mb-4">Does your dog need walking?</h3>
          <p className="text-gray-600 mb-6">
            Kelly is here to help you and your furry friends. Schedule your next session today!
          </p>
          <Link
            href="/#book-appointment"
            className="px-6 py-3 bg-blue-500 text-white text-lg font-bold rounded-md hover:bg-blue-700 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error rendering post:", error);
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-white text-black">
        <p className="text-lg font-semibold">Something went wrong while loading the post.</p>
        <Link href="/info" className="text-blue-500 hover:underline mt-4">
          Back to Blog
        </Link>
      </div>
    );
  }
}