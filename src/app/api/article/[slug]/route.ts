import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/app/api/_lib";
import { getArticle } from "@/lib/mdx";
import { ROOT_DIRECTORY } from "@/lib/const";

/**
 * 記事取得 API
 *
 * GET /api/artice
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  try {
    const data = await getArticle(ROOT_DIRECTORY);

    return ApiResponse.successResponse(data);
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
