type WrappingContainerProps = {
  title?: string;
  children: React.ReactNode;
};

export function WrappingContainer({ title, children }: WrappingContainerProps) {
  return (
    <section className="grid gap-6 bg-card text-card-foreground p-10 rounded-md border-2 border-muted-foreground">
      {title && <h4 className="text-2xl font-bold">{title}</h4>}
      {children}
    </section>
  );
}
