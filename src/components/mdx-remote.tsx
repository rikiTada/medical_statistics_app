import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-blue-900" {...props} />
  ),
  p: (props: any) => <p className="text-warap whitespace-pre" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
