import Blog from "@/components/blogs/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return <Blog />;
}
