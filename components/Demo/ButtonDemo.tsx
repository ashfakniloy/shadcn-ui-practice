import { Mail } from "lucide-react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function ButtonDemo() {
  return (
    <div className="space-x-5">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link" className="dark:text-white">
        Link
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/#">Login</Link>
      </Button>
    </div>
  );
}
