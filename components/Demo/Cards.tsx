import { Skeleton } from "@/components/ui/skeleton";
import SingleCard, { CardProps } from "../SingleCard";
import { cardsData } from "@/data/cardsData";
import { Suspense } from "react";

// import dynamic from "next/dynamic";
// const SingleCard = dynamic(() => import("../SingleCard"), {
//   ssr: false,
// });

const getCardData = async (): Promise<CardProps[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // return cardsData;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  );
  const data = await response.json();
  return data;
};

async function Cards() {
  const fetchedData = await getCardData();
  return (
    // <div className="flex items-center space-x-4">
    //   <Skeleton className="w-12 h-12 bg-gray-300 rounded-full dark:bg-gray-800" />
    //   <div className="space-y-2">
    //     <Skeleton className="h-4 w-[250px] bg-gray-300 dark:bg-gray-800" />
    //     <Skeleton className="h-4 w-[200px]  bg-gray-300 dark:bg-gray-800" />
    //   </div>
    // </div>
    <div className="grid grid-cols-3 gap-y-10">
      {fetchedData?.map((data, i) => (
        // <Suspense key={i} fallback={<p>Loading...</p>}>
        <SingleCard
          key={i}
          name={data.name}
          email={data.email}
          body={data.body}
        />
        // </Suspense>
      ))}
    </div>
  );
}

export default Cards;
