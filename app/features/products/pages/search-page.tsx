import z from "zod";
import type { Route } from "./+types/search-page";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import ProductPagination from "~/common/components/product-pagination";
import { Input } from "~/common/components/ui/input";
import { Form } from "react-router";
import { Button } from "~/common/components/ui/button";
import { SearchIcon } from "lucide-react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

const paramSchema = z.object({
  query: z.string().optional().default(""),
  page: z.coerce.number().optional().default(1),
});

// params: url을 통해 전달받음
// request: searchParams를 통해 전달받음
export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw new Error("Invalid parameters");
  }
  console.log(parsedData);
}

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-5">
      <Hero
        title="Search"
        subtitle="Search for products by title or description"
      />
      <Form className="flex justify-center max-w-screen-sm items-center mx-auto gap-2">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg font-medium"
        />
        <Button
          type="submit"
          variant="default"
          className="flex items-center gap-2"
        >
          <SearchIcon className="w-4 h-4" />
          Search
        </Button>
      </Form>
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
  );
}
