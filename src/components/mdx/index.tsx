import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Indent } from "@/components/ui/indent";
import Bookmark from "@/components/ui/bookmark";
import { MdxAccordion as Accordion } from "@/components/mdx/mdx-accordion";
import { cn } from "@/lib/utils";
import style from "@/components/mdx/mdx.module.scss";

export const customComponents = {
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
  // eslint-disable-next-line jsx-a11y/alt-text
  Image: (props: any) => <Image {...props} />,
  HighLight: (props: any) => (
    <span className="p-0.5 rounded bg-yellow-500/50" {...props} />
  ),
  Underline: (props: any) => <span className="p-0.5 underline" {...props} />,
  Indent: (props: any) => <Indent tab={props.tab} {...props} />,
  Button: (props: any) => <Button {...props} />,
  Bookmark: (props: any) => <Bookmark {...props} />,
  Accordion: (props: any) => <Accordion {...props} />,
};
