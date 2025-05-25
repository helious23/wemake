import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import { Button } from "~/common/components/ui/button";
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  likeCount: number;
  createdAt: string;
  claimed?: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  likeCount,
  createdAt,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-primary/10 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className={cn("text-sm ")}>
            <span
              className={cn(
                claimed
                  ? "bg-muted-foreground selection:bg-muted-foreground text-muted-foreground"
                  : ""
              )}
            >
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <span className="flex items-center gap-1">
          <EyeIcon className="w-4 h-4" />
          <span>{viewCount}</span>
        </span>
        <DotIcon className="w-4 h-4" />
        <span>{createdAt}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" className="flex items-center gap-1">
          <HeartIcon className="w-4 h-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" disabled>
            <LockIcon className="size-4" />
            <span>Claimed</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
