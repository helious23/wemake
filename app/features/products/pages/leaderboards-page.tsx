import type { MetaFunction } from "react-router";
import type { Route } from "./+types/leaderboards";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Leaderboards | wemake" },
    { name: "description", content: "Product leaderboards" },
  ];
};

export default function LeaderboardsPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Leaderboards Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
