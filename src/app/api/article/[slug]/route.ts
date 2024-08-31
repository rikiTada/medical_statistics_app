import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/lib/api-util";
import { dbGetArticleBySlug } from "@/lib/mdx";

// export const runtime = "edge";

/**
 * 記事1件取得 API
 *
 * GET /api/artice/[slug]
 */
export async function GET(
  req: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const data = await dbGetArticleBySlug(slug);

    return ApiResponse.successResponse(data);
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
