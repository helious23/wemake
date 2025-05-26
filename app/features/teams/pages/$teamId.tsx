import type { MetaFunction } from "react-router";
import type { Route } from "./+types/$teamId";

export function loader({ request, params }: Route.LoaderArgs) {
  const teamId = params.teamId;
  // Fetch data based on teamId
  return { teamId };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const teamId = params.teamId;
  return [
    { title: `Team: ${teamId} | wemake` },
    { name: "description", content: `Details for team ${teamId}` },
  ];
};

export default function TeamPage(props: Route.ComponentProps) {
  const { teamId } = props.loaderData;
  return (
    <div>
      <h1>Team Details for {teamId}</h1>
      {/* Add your component content here */}
    </div>
  );
}
