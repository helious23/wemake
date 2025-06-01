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

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Submit Product | wemake" },
    { name: "description", content: "Submit a new product" },
  ];
};

export default function SubmitPage() {
  return (
    <div>
      <Hero
        title="Submit Your Product"
        subtitle="Share your product with the world"
      />
      <Form>
        <div className="grid grid-cols-2 max-w-screen-lg mx-auto gap-10">
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
              description="(60 characters or less)"
              name="tagline"
              id="tagline"
              placeholder="A concise description of your product"
              required
              type="text"
            />
            <InputPair
              label="URL"
              description="The URL of your product"
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
          </div>
        </div>
      </Form>
    </div>
  );
}
