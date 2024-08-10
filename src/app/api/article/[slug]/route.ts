import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/lib/api-util";
import { getArticleBySlug } from "@/lib/mdx";

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
    const data = await getArticleBySlug(slug);

    return ApiResponse.successResponse(data);
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
