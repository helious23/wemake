import { Hero } from "~/common/components/hero";
import type { Route } from "./+types/submit-page";
import { Form } from "react-router";
import InputPair from "~/common/components/input-pair";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/common/components/ui/select";
import SelectPair from "~/common/components/select-pair";
import { Button } from "~/common/components/ui/button";
import { Input } from "~/common/components/ui/input";
import { Label } from "~/common/components/ui/label";
import { useState } from "react";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage() {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // file이 있는지 확인
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      // browser memory 에 있는 파일을 url로 저장
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div className="space-y-20">
      <Hero
        title="Submit Your Product"
        subtitle="Share your product with the world"
      />
      <Form className="grid grid-cols-2 max-w-screen-lg mx-auto gap-10">
        <div className="space-y-5">
          <InputPair
            label="Product Name"
            description="The name of your product. This is how it will appear on the platform."
            name="name"
            id="name"
            placeholder="Enter your product name"
            required
            type="text"
          />
          <InputPair
            label="Tagline"
            description="A word or phrase that describes your product (60 characters or less)"
            name="tagline"
            id="tagline"
            placeholder="Enter your product tagline"
            required
            type="text"
          />
          <InputPair
            label="URL"
            description="The URL of your product (e.g. https://example.com)"
            name="url"
            id="url"
            placeholder="https://example.com"
            required
            type="url"
          />
          <InputPair
            label="Description"
            description="A detailed description of your product (1000 characters or less)"
            name="description"
            id="description"
            placeholder="Enter your product description"
            required
            textarea
            maxLength={1000}
          />
          <SelectPair
            label="Category"
            description="The category of your product"
            name="category"
            placeholder="Select a category"
            options={[
              { label: "Productivity", value: "productivity" },
              { label: "Marketing", value: "marketing" },
              { label: "Design", value: "design" },
              { label: "Development", value: "development" },
              { label: "Other", value: "other" },
            ]}
          />
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="space-y-2 flex flex-col items-center justify-baseline">
          <div className="size-40 rounded-xl shadow-xl bg-muted overflow-hidden">
            {icon && (
              <img
                src={icon}
                alt="icon"
                className="size-full object-cover object-center"
              />
            )}
          </div>
          <Label className="flex flex-col items-start gap-1">
            Logo
            <small className="text-muted-foreground">
              This is how it will appear on the platform.
            </small>
          </Label>
          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
            id="icon"
            multiple
          />
          <div className="flex flex-col gap-1 text-xs text-muted-foreground">
            <span>Recommended size: 128x128px</span>
            <span>Allowed formats: PNG, JPG, GIF, SVG</span>
            <span>Maximum file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
