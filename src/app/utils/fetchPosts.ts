// src\app\utils\fetchPosts.ts

"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

// Define the directory where posts are stored
const postsDirectory = path.join(process.cwd(), "src/posts");

// Utility to read a file and parse frontmatter
const parsePostFile = (filePath: string): Post => {
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Normalize date to ISO format
  const normalizedDate = data.date ? new Date(data.date).toISOString() : "";

  return {
    title: data.title || "Untitled Post",
    slugId: path.basename(filePath, path.extname(filePath)),
    date: normalizedDate,
    description: data.metaDescription || "No description available.",
    image: data.image || "/default-image.jpg",
    altText: data.altText || "Default image alt text",
    keywords: data.keywords || [],
    content: content || "",
  } as Post;
};

// Fetch all posts and sort by date
export async function getAllPosts(): Promise<Post[]> {
  try {
    // Read all files in the posts directory
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
      .filter((fileName) => /\.(md|mdx)$/.test(fileName)) // Only include .md or .mdx files
      .map((fileName) => parsePostFile(path.join(postsDirectory, fileName)));

    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Fetch metadata and content for a single post by its slugId
export async function getPostBySlug(slugId: string): Promise<Post> {
  try {
    // Define allowed file extensions
    const fileExtensions = [".mdx", ".md"];
    for (const extension of fileExtensions) {
      const filePath = path.join(postsDirectory, `${slugId}${extension}`);
      if (fs.existsSync(filePath)) {
        return parsePostFile(filePath);
      }
    }
    throw new Error(`Post not found: ${slugId}`);
  } catch (error) {
    console.error(`Error fetching post by slug (${slugId}):`, error);
    throw error;
  }
}

// Fetch the latest posts with a limit
export async function getLatestPosts(limit: number = 3): Promise<Post[]> {
  try {
    const allPosts = await getAllPosts();
    return allPosts.slice(0, limit);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }
}
