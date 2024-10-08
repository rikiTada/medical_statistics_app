import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

import { customComponents as components } from "@/components/mdx";

export async function CustomMDX(props: { content: string }) {
  const { content } = await compileMDX({
    source: props.content,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [remarkGfm, rehypePrettyCode],
        remarkPlugins: [remarkBreaks],
      },
    },
  });

  return (
    <div className="mb-16">
      {/* <div className="my-1">{props.meta.date}</div> */}
      {content}
    </div>
  );
}
