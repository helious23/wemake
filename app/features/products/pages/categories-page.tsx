import type { MetaFunction } from "react-router";
import type { Route } from "./+types/categories";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Categories | wemake" },
    { name: "description", content: "Product categories" },
  ];
};

export default function CategoriesPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Categories Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
