import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabsItems = [
  {
    value: "account",
    name: "Account",
    content: "Make changes to your account here.",
  },
  {
    value: "password",
    name: "Password",
    content: "Change your password here.",
  },
  {
    value: "password2",
    name: "Password2",
    content: "Change your password here2.",
  },
  {
    value: "password3",
    name: "Password3",
    content: "Change your password here3.",
  },
  {
    value: "password4",
    name: "Password4",
    content: "Change your password here4.",
  },
];

export function TabsDemo() {
  return (
    <Tabs defaultValue={tabsItems[0].value} className="w-[800px]">
      <TabsList className={`p-1 bg-gray-200 dark:bg-gray-800/50 flex w-full`}>
        {tabsItems.map((tab, i) => (
          <TabsTrigger key={i} value={tab.value} className="flex-1">
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabsItems.map((tab, i) => (
        <TabsContent value={tab.value}>{tab.content}</TabsContent>
      ))}
    </Tabs>
  );
}
