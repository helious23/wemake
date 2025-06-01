import { DateTime } from "luxon";
import type { Route } from "./+types/daily-leaderboard-page";
import { data, isRouteErrorResponse, Link } from "react-router";
import { z } from "zod";
import { Hero } from "~/common/components/hero";
import { ProductCard } from "../components/product-card";
import { Button } from "~/common/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import ProductPagination from "~/common/components/product-pagination";

// Zod를 사용하여 파라미터를 검증합니다.
// z.coerce.number(): 입력 값을 숫자로 변환을 시도한 후 숫자인지 검증합니다. URL 파라미터는 문자열로 들어오므로, 여기서는 문자열을 숫자로 변환합니다.
const paramSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const meta: Route.MetaFunction = ({ params }) => {
  const date = DateTime.fromObject({
    year: Number(params.year),
    month: Number(params.month),
    day: Number(params.day),
  })
    .setZone("Asia/Seoul")
    .setLocale("ko");
  return [
    {
      title: `Best of ${date.toLocaleString(DateTime.DATE_MED)} | wemake`,
    },
    {
      name: "description",
      content: `Best of ${date.toLocaleString(DateTime.DATE_MED)}`,
    },
  ];
};

export const loader = ({ params }: Route.LoaderArgs) => {
  // paramSchema.safeParse(params) 는 파라미터를 검증하고, 검증 결과를 반환합니다.
  // 검증 결과는 { success: boolean, data: T | undefined } 형태로 반환됩니다.
  // 검증 결과가 success 가 false 인 경우, 검증 실패한 이유를 반환합니다.
  // 검증 결과가 success 가 true 인 경우, 검증 성공한 파라미터를 반환합니다.
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

  // DateTime.fromObject(parsedData) 는 파라미터를 날짜 객체로 변환합니다.
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");

  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        error_message: "유효한 날짜가 아닙니다.",
      },
      { status: 400 }
    );
  }
  // startOf("day") 는 해당 날짜의 시작 시간을 반환합니다.
  // 예를 들어, 2025-05-28 12:00:00 인 경우, 2025-05-28 00:00:00 을 반환합니다.
  // 이를 통해 오늘 날짜의 시작 시간을 구할 수 있습니다.
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  // 현재 날짜가 오늘 날짜보다 미래인 경우, 오류를 발생시킵니다.
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

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  const urlDate = DateTime.fromObject({
    year: loaderData.year,
    month: loaderData.month,
    day: loaderData.day,
  });
  const previousDay = urlDate.minus({ days: 1 });
  const nextDay = urlDate.plus({ days: 1 });
  const isToday = urlDate.equals(DateTime.now().startOf("day"));

  return (
    <div className="space-y-5">
      <Hero title={`Best of ${urlDate.toLocaleString(DateTime.DATE_MED)}`} />
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <Button variant="secondary" asChild className="flex items-center gap-2">
          <Link
            to={`/products/leaderboards/daily/${previousDay.year}/${previousDay.month}/${previousDay.day}`}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            {previousDay.toLocaleString(DateTime.DATE_SHORT)}
          </Link>
        </Button>
        {!isToday && (
          <Button
            variant="secondary"
            asChild
            className="flex items-center gap-2"
          >
            <Link
              to={`/products/leaderboards/daily/${nextDay.year}/${nextDay.month}/${nextDay.day}`}
            >
              {nextDay.toLocaleString(DateTime.DATE_SHORT)}
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
// ErrorBoundary 는 최대한 가까운 error 를 처리하는 컴포넌트입니다.
// 예를 들어, 현재 컴포넌트에서 발생한 error 는 현재 컴포넌트에서 처리하고,
// 현재 컴포넌트에서 발생한 error 를 처리하지 못한 경우, 상위 컴포넌트에서 처리합니다.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  // isRouteErrorResponse(error) 는 error 가 react-router 에서 발생한 error 인지 검증합니다.
  // 현재 컴포넌트에서 발생한 error 는 react-router 에서 발생한 error 가 아니므로, false 를 반환합니다.
  // 현재 컴포넌트에서 발생한 error 가 react-router 에서 발생한 error 인 경우, true 를 반환합니다.
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.data.error_code}</h1>
        <p>{error.data.error_message}</p>
      </div>
    );
  }
  // error instanceof Error 는 error 가 Error 클래스의 인스턴스인지 검증합니다.
  // 현재 컴포넌트에서 발생한 error 가 Error 클래스의 인스턴스가 아니므로, false 를 반환합니다.
  // 현재 컴포넌트에서 발생한 error 가 Error 클래스의 인스턴스인 경우, true 를 반환합니다.
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown error</div>;
}
