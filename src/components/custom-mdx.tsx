import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import style from "./components.module.scss";
import { cn } from "@/lib/utils";

const customComponents = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: any) => <Image {...props} />,
  HighLight: (props: any) => (
    <span className="p-0.5 rounded bg-yellow-500/50" {...props} />
  ),
  Underline: (props: any) => <span className="p-0.5 underline" {...props} />,
};

export async function CustomMDX(props: any) {
  const { content, frontmatter } = await compileMDX({
    source: props.source,
    components: {
      h1: (props: any) => (
        <h1 className="text-3xl font-bold text-blue-900" {...props} />
      ),
      p: (props: any) => <p className="text-warap whitespace-pre" {...props} />,
      em: (props: any) => <em className="italic" {...props} />,
      a: (props: any) => (
        <a
          className={cn(style.defaultlink)}
          target="_brank"
          rel="noopener"
          {...props}
        />
      ),
      ...customComponents,
    },
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [remarkGfm, rehypePrettyCode],
        remarkPlugins: [remarkBreaks],
      },
    },
  });

  return <>{content}</>;
}
