/*
  Warnings:

  - Added the required column `group` to the `Grade` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Grade" ADD COLUMN     "group" TEXT NOT NULL;
