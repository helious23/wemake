import type { MetaFunction } from "react-router";
import type { Route } from "./+types/weekly.$year.$week";

export function loader({ request, params }: Route.LoaderArgs) {
  const year = params.year;
  const week = params.week;
  // Fetch data based on year and week
  return { year, week };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const year = params.year;
  const week = params.week;
  return [
    { title: `Weekly Leaderboard Week ${week}, ${year} | wemake` },
    {
      name: "description",
      content: `Product leaderboard for week ${week} of ${year}`,
    },
  ];
};

export default function WeeklyLeaderboardPage(props: Route.ComponentProps) {
  const { year, week } = props.loaderData;
  return (
    <div>
      <h1>
        Weekly Leaderboard for Week {week}, {year}
      </h1>
      {/* Add your component content here */}
    </div>
  );
}
