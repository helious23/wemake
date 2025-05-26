import type { MetaFunction } from "react-router";
import type { Route } from "./+types/create";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Create Team | wemake" },
    { name: "description", content: "Create a new team" },
  ];
};

export default function CreateTeamPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Create Team Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
