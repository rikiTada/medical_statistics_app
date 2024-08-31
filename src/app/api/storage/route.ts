// import { NextRequest, NextResponse } from "next/server";
// import { ApiResponse } from "@/lib/api-util";
// import { listFiles } from "@/lib/strage";

// /**
//  * ストレージ全件取得 API
//  *
//  * GET /api/storage
//  */
// export async function GET(_req: NextRequest): Promise<NextResponse> {
//   try {
//     const files = await listFiles();

//     return ApiResponse.successResponse(files);
//   } catch (error: unknown) {
//     return ApiResponse.errorResponse(error, 404);
//   }
// }
