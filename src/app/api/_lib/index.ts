import { NextResponse } from "next/server";

const successResponse = <T>(data: T, status = 200) => {
  if (!data)
    return NextResponse.json({ message: "Not Found" }, { status: 404 });

  return NextResponse.json(data, { status });
};

const errorResponse = (error: unknown, status = 500) => {
  return NextResponse.json(error, { status });
};

export const ApiResponse = {
  successResponse,
  errorResponse,
};
