export type tBlog = {
  content: string;
  title: string;
  date: Date;
  author: string;
};

export interface iBlogProp {
    blog: tBlog;
}
