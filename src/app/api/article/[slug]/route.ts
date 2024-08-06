import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/app/api/_lib";
import { getArticle, getArticleBySlug } from "@/lib/mdx";
import { ROOT_DIRECTORY } from "@/lib/const";

/**
 * 記事取得 API
 *
 * GET /api/artice
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
