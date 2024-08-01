import { Button } from "@/components/ui/button";

type CalloutLinkProps = {
  href: string;
  title: string;
};

export default function CalloutLink({ href, title }: CalloutLinkProps) {
  return (
    <Button asChild>
      <a href={href} className="border bg-muted w-full py-2 px-4 my-4">
        {title}
      </a>
    </Button>
  );
}
