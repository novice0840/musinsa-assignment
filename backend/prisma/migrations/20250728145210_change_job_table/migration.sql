/*
  Warnings:

  - You are about to drop the column `benefits` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `company` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `experience` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `requirements` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `salary` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `job` table. All the data in the column will be lost.
  - You are about to drop the column `workType` on the `job` table. All the data in the column will be lost.
  - Made the column `resumeUrl` on table `application` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `career` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employment` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `place` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subsidiary` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `application` MODIFY `resumeUrl` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `job` DROP COLUMN `benefits`,
    DROP COLUMN `company`,
    DROP COLUMN `experience`,
    DROP COLUMN `isActive`,
    DROP COLUMN `location`,
    DROP COLUMN `requirements`,
    DROP COLUMN `salary`,
    DROP COLUMN `title`,
    DROP COLUMN `workType`,
    ADD COLUMN `career` INTEGER NOT NULL,
    ADD COLUMN `employment` VARCHAR(191) NOT NULL,
    ADD COLUMN `job` VARCHAR(191) NOT NULL,
    ADD COLUMN `occupation` VARCHAR(191) NOT NULL,
    ADD COLUMN `place` VARCHAR(191) NOT NULL,
    ADD COLUMN `subsidiary` VARCHAR(191) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL;
