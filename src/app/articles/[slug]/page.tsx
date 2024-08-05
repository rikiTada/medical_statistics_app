import fs from "fs";
import path from "path";
import matter from "gray-matter";

// import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomMDX } from "@/components/mdx-remote";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("src/content"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("src/content", slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);

  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  // TODO swrから取得するように変更
  const props = getPost(params);

  return (
    <article className="prose">
      {/* <h1>{props.fontMatter.title}</h1> */}

      <CustomMDX source={props.content} {...props} />
    </article>
  );
}
