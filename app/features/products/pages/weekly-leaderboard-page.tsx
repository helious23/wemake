import { DateTime } from "luxon";
import type { Route } from "./+types/weekly-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProductPagination from "~/common/components/product-pagination";

const paramSchema = z.object({
  year: z.coerce.number(),
  week: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        error_message: "유효하지 않은 파라미터입니다.",
      },
      { status: 400 }
    );
  }

  const date = DateTime.fromObject({
    weekYear: parsedData.year,
    weekNumber: parsedData.week,
  }).setZone("Asia/Seoul");

  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "유효한 날짜가 아닙니다.",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("week");
  if (date > today) {
    throw data(
      {
        error_code: "FUTURE_DATE",
        error_message: "미래의 날짜입니다.",
      },
      { status: 400 }
    );
  }
  return {
    ...parsedData,
  };
};

export default function WeeklyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    weekYear: loaderData.year,
    weekNumber: loaderData.week,
  });
  const previousWeek = urlDate.minus({ weeks: 1 });
  const nextWeek = urlDate.plus({ weeks: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("week"));

  return (
    <div className="space-y-5">
      <Hero
        title={`Best of week ${urlDate
          .startOf("week")
          .toLocaleString(DateTime.DATE_SHORT)} - ${urlDate
          .endOf("week")
          .toLocaleString(DateTime.DATE_SHORT)}`}
      />
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <Button variant="secondary" asChild className="flex items-center gap-2">
          <Link
            to={`/products/leaderboards/weekly/${previousWeek.weekYear}/${previousWeek.weekNumber}`}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            {previousWeek.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button
            variant="secondary"
            asChild
            className="flex items-center gap-2"
          >
            <Link
              to={`/products/leaderboards/weekly/${nextWeek.weekYear}/${nextWeek.weekNumber}`}
            >
              {nextWeek.toLocaleString(DateTime.DATE_SHORT)}
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        )}
      </div>
      <div className="space-y-5 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name={`Product ${index}`}
            description={`Product Description ${index}`}
            commentCount={100}
            viewCount={100}
            upvoteCount={120}
          />
        ))}
        <ProductPagination totalPages={10} />
      </div>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.data.error_code}</h1>
        <p>{error.data.error_message}</p>
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
