import type { MetaFunction } from "react-router";
import type { Route } from "./+types/monthly.$year.$month";

export function loader({ request, params }: Route.LoaderArgs) {
  const year = params.year;
  const month = params.month;
  // Fetch data based on year and month
  return { year, month };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const year = params.year;
  const month = params.month;
  return [
    { title: `Monthly Leaderboard ${month}/${year} | wemake` },
    {
      name: "description",
      content: `Product leaderboard for ${month}/${year}`,
    },
  ];
};

export default function MonthlyLeaderboardPage(props: Route.ComponentProps) {
  const { year, month } = props.loaderData;
  return (
    <div>
      <h1>
        Monthly Leaderboard for {month}/{year}
      </h1>
      {/* Add your component content here */}
    </div>
  );
}
