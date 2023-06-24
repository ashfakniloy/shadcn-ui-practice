import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function SkeletonDemo() {
  return (
    <div className="grid grid-cols-3 gap-y-10">
      {/* {Array.from({ length: 5 }).map((_, i) => ( */}
      {[...Array(5)].map((_, i) => (
        <Card key={i} className="w-[350px] shadow-md">
          <CardHeader>
            <Skeleton className="h-[20px] w-full bg-gray-300 dark:bg-gray-800"></Skeleton>
            <Skeleton className="h-[16px] w-2/3 bg-gray-200 dark:bg-gray-900"></Skeleton>
          </CardHeader>
          <CardContent>
            <Skeleton className="h-[170px] w-full bg-gray-300 dark:bg-gray-800"></Skeleton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SkeletonDemo;
