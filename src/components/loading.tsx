import { LoaderCircle } from "lucide-react";

export function Loading() {
  return (
    <div className="grid place-items-center min-h-fit">
      <div className="animate-spin inline-block" role="status">
        <LoaderCircle size={24} color="skyblue" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
