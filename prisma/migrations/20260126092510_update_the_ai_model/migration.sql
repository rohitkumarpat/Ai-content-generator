/*
  Warnings:

  - You are about to drop the column `createdBy` on the `AiOutput` table. All the data in the column will be lost.
  - Added the required column `clerkid` to the `AiOutput` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AiOutput" DROP COLUMN "createdBy",
ADD COLUMN     "clerkid" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "AiOutput_clerkid_idx" ON "AiOutput"("clerkid");

-- AddForeignKey
ALTER TABLE "AiOutput" ADD CONSTRAINT "AiOutput_clerkid_fkey" FOREIGN KEY ("clerkid") REFERENCES "User"("clerkid") ON DELETE CASCADE ON UPDATE CASCADE;
