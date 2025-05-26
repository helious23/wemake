import type { MetaFunction } from "react-router";
import type { Route } from "./+types/community";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Community | wemake" },
    { name: "description", content: "Explore community discussions" },
  ];
};

export default function CommunityPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Community Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
