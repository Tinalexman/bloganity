import Blogs from "@/components/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return <Blogs />;
}
