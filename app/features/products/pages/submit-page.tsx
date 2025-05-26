import type { MetaFunction } from "react-router";
import type { Route } from "./+types/submit";

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Submit Product Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
