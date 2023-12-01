import React from "react";
import { BlogCard } from "@/Components/BlogCard";

export const BlogList = () => {
  return [1, 2, 3, 4, 5].map((el) => <BlogCard key={el} />);
};
