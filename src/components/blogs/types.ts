export type tBlog = {
  _id: string;
  content: string;
  title: string;
  date: Date;
  author: string;
};

export interface iBlogProp {
    blog: tBlog;
}
