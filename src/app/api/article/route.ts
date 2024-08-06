import { NextRequest, NextResponse } from "next/server";
import { ApiResponse } from "@/app/api/_lib";
import { getArticle } from "@/lib/mdx";

/**
 * 記事取得 API
 *
 * GET /api/artice
 */
export async function GET(_req: NextRequest): Promise<NextResponse> {
  try {
    const data = await getArticle();

    return ApiResponse.successResponse(data);
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
