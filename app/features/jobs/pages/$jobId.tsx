import type { MetaFunction } from "react-router";
import type { Route } from "./+types/$jobId";

export function loader({ request, params }: Route.LoaderArgs) {
  const jobId = params.jobId;
  // Fetch data based on jobId
  return { jobId };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const jobId = params.jobId;
  return [
    { title: `Job: ${jobId} | wemake` },
    { name: "description", content: `Details for job listing ${jobId}` },
  ];
};

export default function JobPage(props: Route.ComponentProps) {
  const { jobId } = props.loaderData;
  return (
    <div>
      <h1>Job Details for {jobId}</h1>
      {/* Add your component content here */}
    </div>
  );
}
