import EditBlog from "@/components/edit-blog/EditBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Blog",
};

export default function EditBlogPage({ params }: any) {
  const { id } = params;
  return <EditBlog id={id} />;
}
