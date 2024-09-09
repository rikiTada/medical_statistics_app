import { ApiResponse } from "@/lib/api-util";
import { NextRequest, NextResponse } from "next/server";

/**
 * テスト用 API
 *
 * GET /api
 */
export async function GET(_req: NextRequest): Promise<NextResponse> {
  try {
    return ApiResponse.successResponse({ message: "Hello, World!" });
  } catch (error: unknown) {
    return ApiResponse.errorResponse(error, 404);
  }
}
