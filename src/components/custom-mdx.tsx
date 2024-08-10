import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import style from "./components.module.scss";
import { cn } from "@/lib/utils";
import { CustomMDXProps } from "@/types";
import { Button } from "@/components/ui/button";
import { Indent } from "@/components/ui/indent";
import Bookmark from "@/components/ui/bookmark";

const customComponents = {
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: any) => <Image {...props} />,
  HighLight: (props: any) => (
    <span className="p-0.5 rounded bg-yellow-500/50" {...props} />
  ),
  Underline: (props: any) => <span className="p-0.5 underline" {...props} />,
  Indent: (props: any) => <Indent tab={props.tab} {...props} />,
  Button: (props: any) => <Button {...props} />,
  Bookmark: (props: any) => <Bookmark {...props} />,
};

export async function CustomMDX(props: CustomMDXProps) {
  const { content, frontmatter } = await compileMDX({
    source: props.content,
    components: {
      h1: (props: any) => (
        <h1 className="text-3xl font-bold text-blue-900" {...props} />
      ),
      p: (props: any) => <p className="" {...props} />,
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

  return (
    <>
      <div className="my-1">{props.meta.date}</div>
      {content}
    </>
  );
}
