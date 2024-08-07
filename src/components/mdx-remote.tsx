import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import { compileMDX } from "next-mdx-remote/rsc";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-blue-900" {...props} />
  ),
  p: (props: any) => <p className="text-warap whitespace-pre" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
};

export async function CustomMDX(props: any) {
  const data= await compileMDX({
    source: props.source,
    components: {
      ...components,
      // Image: (props: any) => <Image {...props} />,
      // HighLight: (props: any) => <HighLight {...props} />,
    },
    options: {
      parseFrontmatter: true,
        mdxOptions: {
        rehypePlugins: [remarkGfm,rehypePrettyCode],
        remarkPlugins: [remarkBreaks],
      }
    }
  });

  return<>{data.content}</>
}
