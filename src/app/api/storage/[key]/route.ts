// import { NextRequest, NextResponse } from "next/server";
// import { ApiResponse } from "@/lib/api-util";
// import { getFile, listFiles } from "@/lib/strage";

// /**
//  * ストレージ一件取得 API
//  *
//  * GET /api/storage/[key]
//  */
// export async function GET(
//   _req: NextRequest,
//   { params: { key } }: { params: { key: string } }
// ): Promise<NextResponse> {
//   try {
//     const content = await getFile(key);

//     return ApiResponse.successResponse(content);
//   } catch (error: unknown) {
//     return ApiResponse.errorResponse(error, 404);
//   }
// }
