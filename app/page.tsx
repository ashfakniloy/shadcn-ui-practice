import { CardDemo } from "@/components/Demo/CardDemo";
import { AccordionDemo } from "@/components/Demo/AccordionDemo";
import { AlertDemo } from "@/components/Demo/AlertDemo";
import { AlertDialogDemo } from "@/components/Demo/AlertDialogDemo";
import { AspectRatioDemo } from "@/components/Demo/AspectRatioDemo";
import { AvatarDemo } from "@/components/Demo/AvatarDemo";
import { BadgeDemo } from "@/components/Demo/BadgeDemo";
import { ButtonDemo } from "@/components/Demo/ButtonDemo";
import { CalendarDemo } from "@/components/Demo/CalendarDemo";
import { ComboboxDemo } from "@/components/Demo/ComboboxDemo";
import { ContextMenuDemo } from "@/components/Demo/ContextMenuDemo";
import DataTableDemo from "@/components/Demo/DataTableDemo";
import { DatePickerDemo } from "@/components/Demo/DatePickerDemo";
import { DatePickerWithRange } from "@/components/Demo/DateRangePickerDemo";
import { FormDemo } from "@/components/Demo/FormDemo";
import { ScrollAreaDemo } from "@/components/Demo/ScrollAreaDemo";
// import { SkeletonDemo } from "@/components/Demo/SkeletonDemo";
// import SkeletonDemo from "@/components/Demo/SkeletonDemo";
import Cards from "@/components/Demo/Cards";
import SkeletonDemo from "@/components/Demo/SkeletonDemo";
import { Suspense } from "react";
import { DialogDemo } from "@/components/Demo/DialogDemo";
import { TabsDemo } from "@/components/Demo/TabsDemo";
import { TooltipDemo } from "@/components/Demo/TooltipDemo";
import { ComboboxMultiSelectDemo } from "@/components/Demo/ComboboxMultiSelectDemo";
import { SelectDemo } from "@/components/Demo/SelectDemo";

function HomePage() {
  return (
    <div className="my-20 space-y-10">
      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Accordion</h1>
        <AccordionDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Alert</h1>
        <AlertDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">AlertDialog</h1>
        <AlertDialogDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Dialog</h1>
        <DialogDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Asepct Ratio</h1>
        <AspectRatioDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Avatar</h1>
        <AvatarDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Badge</h1>
        <BadgeDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Button</h1>
        <ButtonDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Calendar</h1>
        <CalendarDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Card</h1>
        <CardDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Combobox</h1>
        <ComboboxDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Combobox multiselect</h1>
        <ComboboxMultiSelectDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Select</h1>
        <SelectDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Context Menu</h1>
        <ContextMenuDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Data Table</h1>
        <DataTableDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Datepicker</h1>
        <div className="space-y-3">
          <DatePickerDemo />
          <DatePickerWithRange />
        </div>
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Form</h1>
        <FormDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Scroll Area</h1>
        <ScrollAreaDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Skeleton</h1>
        <Suspense fallback={<SkeletonDemo />}>
          <Cards />
        </Suspense>
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Tabs</h1>
        <TabsDemo />
      </div>

      <div className="">
        <h1 className="mb-5 text-2xl font-extrabold">Tooltip</h1>
        <TooltipDemo />
      </div>
    </div>
  );
}

export default HomePage;
