import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function AccordionDemo() {
  const accordionData = [
    {
      value: "item-1",
      title: "Is it accessible?",
      description: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      value: "item-2",
      title: "Is it styled??",
      description:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      value: "item-3",
      title: "Is it animated?",
      description:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
      value: "item-4",
      title: "Random accordian title",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste odit necessitatibus possimus, praesentium asperiores iusto natus maiores? Distinctio, numquam dolorem vero rem minus soluta aliquam labore quisquam harum, temporibus cum?",
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-[500px] bg-gray-50 shadow-md dark:bg-gray-800 p-5 rounded-lg divide-y divide-gray-300 dark:divide-gray-500"
    >
      {accordionData.map(({ value, title, description }, i) => (
        <AccordionItem key={i} value={value} className="border-b-0">
          <AccordionTrigger className="hover:no-underline">
            {title}
          </AccordionTrigger>
          <AccordionContent>{description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
