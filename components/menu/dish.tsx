import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Dish } from "@/types/dishes";

export default function DishMeal({ dish }: { dish: Dish }) {
  return (
    <Card>
      <CardContent>
        <Image
          alt="Appetizer"
          className="mb-4 rounded-lg object-cover"
          height={150}
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/150",
            objectFit: "cover",
          }}
          width={200}
        />
        <h3 className="mb-2 text-lg font-semibold">{dish.name}</h3>
        <p className="text-gray-500 dark:text-gray-400">{dish.description}</p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          COOKING TIME: {dish.cooking_time}
        </p>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex flex-col gap-2">
          <h2>INGREDIENTS:</h2>
          <div className=" flex flex-wrap gap-2">
            {dish.ingredients.map((ingredient, index) => (
              <h1>{ingredient},</h1>
            ))}
          </div>
        </div>
        <p className="mt-4 font-semibold">${dish.price}</p>
      </CardContent>
    </Card>
  );
}
