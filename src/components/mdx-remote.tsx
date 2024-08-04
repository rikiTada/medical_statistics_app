import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold text-blue-700" {...props} />
  ),
  p: (props: any) => (
    <div>
      <p className="text-warap whitespace-pre" {...props} />
    </div>
  ),
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
