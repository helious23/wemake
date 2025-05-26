import type { MetaFunction } from "react-router";
import type { Route } from "./+types/$ideaId";

export function loader({ request, params }: Route.LoaderArgs) {
  const ideaId = params.ideaId;
  // Fetch data based on ideaId
  return { ideaId };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const ideaId = params.ideaId;
  return [
    { title: `Idea: ${ideaId} | wemake` },
    { name: "description", content: `Details for idea ${ideaId}` },
  ];
};

export default function IdeaPage(props: Route.ComponentProps) {
  const { ideaId } = props.loaderData;
  return (
    <div>
      <h1>Idea Details for {ideaId}</h1>
      {/* Add your component content here */}
    </div>
  );
}
