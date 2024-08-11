declare module "*.mdx" {
  interface Meta {
    title: string;
    author: string;
  }
  export const meta: Meta;
}
