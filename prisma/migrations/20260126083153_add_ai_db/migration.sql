/*
  Warnings:

  - Added the required column `clerkid` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "clerkid" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AiOutput" (
    "id" SERIAL NOT NULL,
    "formData" TEXT NOT NULL,
    "aiResponse" TEXT NOT NULL,
    "slugname" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiOutput_pkey" PRIMARY KEY ("id")
);
