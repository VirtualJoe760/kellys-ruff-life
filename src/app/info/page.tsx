"use client";

import React, { useEffect, useState } from "react";
import VariableHero from "@/components/VariableHero";
import siteConfig from "@/constants/siteConfig";
import BlogLists from "@/components/BlogLists";
import { getAllPosts } from "@/utils/fetchPosts";
import { Post } from "@/types/post";

const BlogPage = () => {
  const { blogPage, colors } = siteConfig;
  const [posts, setPosts] = useState<Post[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      const postsPerPage = 5;

      setTotalPages(Math.ceil(allPosts.length / postsPerPage));
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ backgroundColor: colors.backgroundColor, color: colors.defaultText }}>
      <VariableHero
        backgroundImage={blogPage.hero.backgroundImage}
        heroContext={blogPage.hero.heroContext}
        description={blogPage.hero.description}
        alignment="center"
      />
      <BlogLists posts={posts} totalPages={totalPages} />
    </div>
  );
};

export default BlogPage;
