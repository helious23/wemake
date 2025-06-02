import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/promote-page";
import { Form } from "react-router";
import SelectPair from "~/common/components/select-pair";
import { Calendar } from "~/common/components/ui/calendar";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { DateTime } from "luxon";
import { Button } from "~/common/components/ui/button";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Promote Product | wemake" },
    { name: "description", content: "Promote your product" },
  ];
};

export default function PromotePage() {
  const [promotionPeriod, setPromotionPeriod] = useState<
    DateRange | undefined
  >();

  const totalDays =
    // from 과 to 가 둘 다 선택되었는지 확인
    promotionPeriod?.from && promotionPeriod?.to
      ? DateTime.fromJSDate(promotionPeriod.to).diff(
          // Luxon date로 변환하여 날짜 차이 계산
          DateTime.fromJSDate(promotionPeriod.from),
          "days"
        ).days
      : 0;
  return (
    <div className="space-y-20">
      <Hero
        title="Promote Your Product"
        subtitle="Boost your product's visibility"
      />
      <Form className="max-w-md mx-auto flex flex-col gap-4">
        <SelectPair
          label="Select a product"
          description="Select a product to promote"
          name="product"
          placeholder="Select a product"
          options={[
            { label: "AI Dark Mode Maker", value: "ai-dark-mode-maker" },
            {
              label: "Something Special Product",
              value: "something-special-product",
            },
            { label: "Another Special Thing", value: "another-special-thing" },
          ]}
        />
        <div className="flex flex-col gap-2 items-center w-full mt-4">
          <Label className="flex flex-col gap-2">
            Select a range of dates for promotion
            <small className="text-muted-foreground">
              Minimum duration is 3 days
            </small>
          </Label>

          <Calendar
            mode="range"
            selected={promotionPeriod}
            onSelect={setPromotionPeriod}
            min={3}
            disabled={{
              before: new Date(),
            }}
          />
          <Button disabled={totalDays === 0}>
            Go to checkout (${totalDays * 20})
          </Button>
        </div>
      </Form>
    </div>
  );
}
