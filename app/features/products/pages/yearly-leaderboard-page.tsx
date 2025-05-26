import type { MetaFunction } from "react-router";
import type { Route } from "./+types/yearly.$year";

export function loader({ request, params }: Route.LoaderArgs) {
  const year = params.year;
  // Fetch data based on year
  return { year };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const year = params.year;
  return [
    { title: `Yearly Leaderboard ${year} | wemake` },
    {
      name: "description",
      content: `Product leaderboard for the year ${year}`,
    },
  ];
};

export default function YearlyLeaderboardPage(props: Route.ComponentProps) {
  const { year } = props.loaderData;
  return (
    <div>
      <h1>Yearly Leaderboard for {year}</h1>
      {/* Add your component content here */}
    </div>
  );
}
