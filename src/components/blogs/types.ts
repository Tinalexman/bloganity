export type tBlog = {
  _id: string;
  content: string;
  title: string;
  createdAt: string;
  author: string;
};

export interface iBlogProp {
    blog: tBlog;
}
