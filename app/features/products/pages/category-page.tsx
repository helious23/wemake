import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import type { Route } from "./+types/category-page";
import ProductPagination from "~/common/components/product-pagination";

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Developer Tools | wemake` },
    {
      name: "description",
      content: `Browse Developer Tools for building products faster`,
    },
  ];
};

export default function CategoryPage() {
  return (
    <div className="space-y-5">
      <Hero
        title="Developer Tools"
        subtitle="Tools for developers to build products faster"
      />
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name={`Product ${index}`}
            description={`Product Description ${index}`}
            commentCount={100}
            viewCount={100}
            upvoteCount={120}
          />
        ))}
        <ProductPagination totalPages={10} />
      </div>
    </div>
  );
}
