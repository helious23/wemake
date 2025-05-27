import type { MetaFunction } from "react-router";
import type { Route } from "./+types/daily.$year.$month.$day";

export function loader({ request, params }: Route.LoaderArgs) {
  const year = params.year;
  const month = params.month;
  const day = params.day;
  // Fetch data based on year, month, and day
  return { year, month, day };
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export const meta: MetaFunction = ({ params }) => {
  const year = params.year;
  const month = params.month;
  const day = params.day;
  return [
    { title: `Daily Leaderboard ${year}/${month}/${day} | wemake` },
    {
      name: "description",
      content: `Product leaderboard for ${year}/${month}/${day}`,
    },
  ];
};

export default function DailyLeaderboardPage(props: Route.ComponentProps) {
  const { year, month, day } = props.loaderData;
  return (
    <div>
      <h1>
        Daily Leaderboard for {year}/{month}/{day}
      </h1>
      {/* Add your component content here */}
    </div>
  );
}
