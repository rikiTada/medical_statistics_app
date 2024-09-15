"use client";

import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export function FloatingButton() {
  return (
    <Button
      size="icon"
      className="fixed bottom-6 right-4 bg-blue-900 hover:bg-blue-900/90"
      onClick={() => scrollTo(0, 0)}
    >
      <ChevronUp />
    </Button>
  );
}
