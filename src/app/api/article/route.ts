// import { ApiResponse } from "@/lib/api-util";
// import { dbGetArticle } from "@/lib/mdx";
// import { NextRequest, NextResponse } from "next/server";

// /**
//  * 記事全件取得 API
//  *
//  * GET /api/artice/
//  */
// export async function GET(_req: NextRequest): Promise<NextResponse> {
//   try {
//     const data = await dbGetArticle();

//     return ApiResponse.successResponse(data);
//   } catch (error: unknown) {
//     return ApiResponse.errorResponse(error, 404);
//   }
// }
