import { Badge, badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

export function BadgeDemo() {
  return (
    <div className="space-x-5">
      <Badge variant={"destructive"}>Badge</Badge>
      <Link href="/#" className={badgeVariants({ variant: "secondary" })}>
        Badge
      </Link>
    </div>
  );
}
