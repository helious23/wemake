import type { MetaFunction } from "react-router";
import type { Route } from "./+types/teams";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Teams | wemake" },
    { name: "description", content: "Explore teams" },
  ];
};

export default function TeamsPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Teams Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
