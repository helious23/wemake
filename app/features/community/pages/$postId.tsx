import type { MetaFunction } from "react-router";
import type { Route } from "./+types/$postId";

export function loader({ request, params }: Route.LoaderArgs) {
  const postId = params.postId;
  // Fetch data based on postId
  return { postId };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const postId = params.postId;
  return [
    { title: `Post: ${postId} | wemake` },
    { name: "description", content: `Details for community post ${postId}` },
  ];
};

export default function PostPage(props: Route.ComponentProps) {
  const { postId } = props.loaderData;
  return (
    <div>
      <h1>Post Details for {postId}</h1>
      {/* Add your component content here */}
    </div>
  );
}
