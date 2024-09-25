import { Button } from "@/components/ui/button";

type DeleteButtonProps = {
  id: string;
};

export function DeleteButton({ id }: DeleteButtonProps) {
  return (
    <Button onClick={() => {}} size="sm" variant="destructive">
      削除
    </Button>
  );
}

export function EditButton() {
  return <div></div>;
}
