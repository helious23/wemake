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
    { title: "Create Post | wemake" },
    { name: "description", content: "Create a new community post" },
  ];
};

export default function CreatePostPage(props: Route.ComponentProps) {
  return (
    <div>
      <h1>Create Post Page</h1>
      {/* Add your component content here */}
    </div>
  );
}
