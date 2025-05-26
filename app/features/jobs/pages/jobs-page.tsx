import type { MetaFunction } from "react-router";
import type { Route } from "./+types/jobs";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Jobs | wemake" },
    { name: "description", content: "Explore job listings" },
  ];
};

export default function JobsPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Jobs Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
