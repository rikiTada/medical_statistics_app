// import style from "@/components/ui/ui.module.scss";
import "@/components/ui/bookmark.scss";
import { unfurl } from "unfurl.js";
// import Image from "next/image";
import { cn } from "@/lib/utils";

type BookmarkProps = {
  url: string;
};

export default async function Bookmark({ url }: BookmarkProps) {
  const result = await unfurl(url);

  return (
    <div className={cn("bookmark")}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div>
          <div>{result.title}</div>
          <div>{result.description}</div>
          <div>
            <div>
              {result.favicon ? (
                <img
                  src={result.favicon || ""}
                  alt="Favicon of the bookmark site"
                  loading="lazy"
                  className="m-0"
                />
              ) : (
                <div className="rounded-full bg-muted border" />
              )}
            </div>
            <div>{url}</div>
          </div>
        </div>
        <div className="">
          {result.open_graph.images &&
            result.open_graph.images.map((image) => (
              <img
                key={image.url}
                src={image.url}
                alt={image.alt || ""}
                loading="lazy"
              />
            ))[0]}
        </div>
      </a>
    </div>
  );
}
