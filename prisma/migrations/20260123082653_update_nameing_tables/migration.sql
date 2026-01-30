/*
  Warnings:

  - You are about to drop the column `activityLevel` on the `body_measurements` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionGoal` on the `body_measurements` table. All the data in the column will be lost.
  - You are about to drop the column `recipeIngredientid` on the `order_items` table. All the data in the column will be lost.
  - You are about to drop the column `pruce` on the `recipe_ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `oreder` on the `recipe_steps` table. All the data in the column will be lost.
  - Added the required column `recipe_ingredient_id` to the `order_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `recipe_ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `recipe_steps` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_recipeIngredientid_fkey";

-- AlterTable
ALTER TABLE "body_measurements" DROP COLUMN "activityLevel",
DROP COLUMN "nutritionGoal",
ADD COLUMN     "activity_level" "ActivityLevel",
ADD COLUMN     "nutrition_goal" "NutritionGoal";

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "recipeIngredientid",
ADD COLUMN     "recipe_ingredient_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" DROP COLUMN "pruce",
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "recipe_steps" DROP COLUMN "oreder",
ADD COLUMN     "order" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_recipe_ingredient_id_fkey" FOREIGN KEY ("recipe_ingredient_id") REFERENCES "recipe_ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
