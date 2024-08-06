import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/app/api/_lib";
import { getArticleBySlug } from "@/lib/mdx";
// import { ROOT_DIRECTORY } from "@/lib/const";

/**
 * 記事1件取得 API
 *
 * GET /api/artice/[slug]
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const data = await getArticleBySlug(params.slug);

    return ApiResponse.successResponse(data);
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
