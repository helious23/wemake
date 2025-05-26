import type { MetaFunction } from "react-router";
import type { Route } from "./+types/$category";

export function loader({ request, params }: Route.LoaderArgs) {
  const category = params.category;
  // Fetch data based on category
  return { category };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const category = params.category;
  return [
    { title: `Products in ${category} | wemake` },
    {
      name: "description",
      content: `Explore products in the ${category} category`,
    },
  ];
};

export default function CategoryPage(props: Route.ComponentProps) {
  const { category } = props.loaderData;
  return (
    <div>
      <h1>Products in {category}</h1>
      {/* Add your component content here */}
    </div>
  );
}
