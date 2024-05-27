import CreateBlog from "@/components/create-blog/CreateBlog";
import { Metadata } from "next";

export const metadata :Metadata = {
    title: "Create Blog"
}

export default function CreateBlogPage() {
    return <CreateBlog />
}