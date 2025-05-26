import type { MetaFunction } from "react-router";
import type { Route } from "./+types/products";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Products | wemake" },
    { name: "description", content: "Explore products" },
  ];
};

export default function ProductsPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Products Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
