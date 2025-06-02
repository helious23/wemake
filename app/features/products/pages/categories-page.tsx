import { Hero } from "~/common/components/hero";
import { CategoryCard } from "~/features/products/components/category-card";
import type { Route } from "./+types/categories-page";

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    { title: `Categories | wemake` },
    {
      name: "description",
      content: `Explore products in the categories`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  return { category: params.category };
};

export default function CategoryPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title={`Categories`} subtitle="Explore products in the category" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 11 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={`categoryId-${index}`}
            name={`Category ${index}`}
            description={`Category Description ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
