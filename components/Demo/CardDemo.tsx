import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
          quisquam.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quis
          aspernatur quae ad, voluptate ullam veritatis nulla aperiam vitae vero
          sint deserunt, incidunt quod. Aut dignissimos ut harum nobis minima
          laboriosam minus. Harum dignissimos reprehenderit est, dolor quisquam
          quasi exercitationem. Sed maiores quos, tempora consequuntur
          reiciendis odit reprehenderit, voluptates, corporis vitae ad hic dolor
          nulla accusamus deserunt provident placeat mollitia illum?
          Necessitatibus totam architecto recusandae possimus quae quasi fugit
        </p>
      </CardContent>
      <CardFooter>
        <p>Card footer content Goes here</p>
      </CardFooter>
    </Card>
  );
}
