import {
  S3Client,
  PutObjectCommand,
  // PutObjectCommandInput,
  DeleteObjectCommand,
  // DeleteObjectCommandInput,
  GetObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";

const R2_ACCOUNT_ID = process.env.R2_ACCOUNT_ID;
const R2_ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID;
const R2_SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY;
const R2_BUCKET = process.env.R2_BUCKET;

const s3Client = new S3Client({
  region: "auto",
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID!,
    secretAccessKey: R2_SECRET_ACCESS_KEY!,
  },
});

// Create (Upload) a file
export async function uploadFile(key: string, body: Buffer | string) {
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
    Body: body,
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}

// Read (Get) a file
export async function getFile(key: string) {
  const command = new GetObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return await response.Body?.transformToString();
  } catch (error) {
    console.error("Error getting file:", error);
    throw error;
  }
}

// Update a file (same as upload)
export async function updateFile(key: string, body: Buffer | string) {
  return uploadFile(key, body);
}

// Delete a file
export async function deleteFile(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: R2_BUCKET,
    Key: key,
  });

  try {
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.error("Error deleting file:", error);
    throw error;
  }
}

// List files
export async function listFiles(prefix?: string) {
  const command = new ListObjectsV2Command({
    Bucket: R2_BUCKET,
    Prefix: prefix,
  });

  try {
    const response = await s3Client.send(command);
    return response.Contents;
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
}
