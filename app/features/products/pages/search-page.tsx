import type { MetaFunction } from "react-router";
import type { Route } from "./+types/search";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Search Products | wemake" },
    { name: "description", content: "Search for products" },
  ];
};

export default function SearchPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Search Products Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
