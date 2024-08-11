import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type MdxAccordionProps = {
  title: string;
  children: React.ReactNode;
};

const MdxAccordion = ({ title, children }: MdxAccordionProps) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="not-prose w-full bg-card border rounded my-4"
    >
      <AccordionItem className="rounded-b border-0" value="item-1">
        <AccordionTrigger className="px-8">{title}</AccordionTrigger>
        <AccordionContent className="prose px-8 py-4 bg-muted/70 rounded-b w-full max-w-full">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

MdxAccordion.displayName = "Button";

export { MdxAccordion };
