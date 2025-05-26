import type { MetaFunction } from "react-router";
import type { Route } from "./+types/promote";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Promote Product Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
