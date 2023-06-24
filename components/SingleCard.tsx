// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";

// type CardProps = {
//   data: {
//     title: string;
//     description: string;
//     content: string;
//     footer: string;
//   };
// };

// function SingleCard({
//   data: { title, description, content, footer },
// }: CardProps) {
//   return (
//     <Card className="w-[350px] shadow-md">
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <p>{content}</p>
//       </CardContent>
//       <CardFooter>
//         <p>{footer}</p>
//       </CardFooter>
//     </Card>
//   );
// }

// export default SingleCard;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type CardProps = {
  name: string;
  email: string;
  body: string;
};

function SingleCard({ name, email, body }: CardProps) {
  return (
    <Card className="w-[350px] shadow-md">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{email}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}

export default SingleCard;
