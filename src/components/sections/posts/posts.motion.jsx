"use client";

import { motion } from "motion/react";

export default function PostsMotion({ posts }) {
  return (
    <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {posts.map((post) => (
        <motion.li key={post.id}>{post.title}</motion.li>
      ))}
    </motion.ul>
  );
}
