// 'use client'

// import {useState} from "react";
// import { Column } from "@tanstack/react-table";
// import { Check, LucideIcon, PlusCircle } from "lucide-react";

// import { cn } from "@/lib/utils";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
//   CommandSeparator,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Separator } from "@/components/ui/separator";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ];

// export function ComboboxMultipleDemo() {
//   const [open, setOpen] = useState(false);
//   const [values, setValues] = useState([]);

//   return (
//     <Popover  open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button variant="outline" size="sm" className="h-8 border-dashed">
//           <PlusCircle className="w-4 h-4 mr-2" />
//           Select multiple values
//           {values?.length > 0 && (
//             <>
//               <Separator orientation="vertical" className="h-4 mx-2" />
//               <Badge
//                 variant="secondary"
//                 className="px-1 font-normal rounded-sm lg:hidden"
//               >
//                 {values.length}
//               </Badge>
//               <div className="hidden space-x-1 lg:flex">
//                 {values.length > 2 ? (
//                   <Badge
//                     variant="secondary"
//                     className="px-1 font-normal rounded-sm"
//                   >
//                     {values.length} selected
//                   </Badge>
//                 ) : (
//                   options
//                     .filter((option) => selectedValues.has(option.value))
//                     .map((option) => (
//                       <Badge
//                         variant="secondary"
//                         key={option.value}
//                         className="px-1 font-normal rounded-sm"
//                       >
//                         {option.label}
//                       </Badge>
//                     ))
//                 )}
//               </div>
//             </>
//           )}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent className="w-[200px] p-0" align="start">
//         <Command>
//           <CommandInput placeholder='Select multiple values' />
//           <CommandList>
//             <CommandEmpty>No results found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((option) => {
//                 const isSelected = values.has(option.value);
//                 return (
//                   <CommandItem
//                     key={option.value}
//                     onSelect={() => {
//                       if (isSelected) {
//                         // values.delete(option.value);
//                         values.filter((value) => value !== option.value)
//                       } else {
//                         // values.add(option.value);
//                         values.push(option.value)
//                       }
//                       const filterValues = Array.from(values);
//                       column?.setFilterValue(
//                         filterValues.length ? filterValues : undefined
//                       );
//                     }}
//                   >
//                     <div
//                       className={cn(
//                         "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
//                         isSelected
//                           ? "bg-primary text-primary-foreground"
//                           : "opacity-50 [&_svg]:invisible"
//                       )}
//                     >
//                       <Check className={cn("h-4 w-4")} />
//                     </div>
//                     {option.icon && (
//                       <option.icon className="w-4 h-4 mr-2 text-muted-foreground" />
//                     )}
//                     <span>{option.label}</span>
//                     {facets?.get(option.value) && (
//                       <span className="flex items-center justify-center w-4 h-4 ml-auto font-mono text-xs">
//                         {facets.get(option.value)}
//                       </span>
//                     )}
//                   </CommandItem>
//                 );
//               })}
//             </CommandGroup>
//             {selectedValues.size > 0 && (
//               <>
//                 <CommandSeparator />
//                 <CommandGroup>
//                   <CommandItem
//                     onSelect={() => column?.setFilterValue(undefined)}
//                     className="justify-center text-center"
//                   >
//                     Clear filters
//                   </CommandItem>
//                 </CommandGroup>
//               </>
//             )}
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }

"use client";

import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Framework {
  value: string;
  label: string;
}

const frameworks: Framework[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ComboboxMultiSelectDemo() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {values.length > 0
              ? `${values.length} selected`
              : "Select framework..."}
            {/* {values.length > 0
              ? values
                  .map(
                    (value) =>
                      frameworks.find((framework) => framework.value === value)
                        ?.label
                  )
                  .join(", ")
              : "Select framework..."} */}
            <ChevronsUpDown className="w-4 h-4 ml-2 opacity-50 shrink-0" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command className="">
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  onSelect={(currentValue: string) => {
                    const isSelected = values.includes(currentValue);
                    if (isSelected) {
                      setValues(
                        values.filter((value) => value !== currentValue)
                      );
                    } else {
                      setValues([...values, currentValue]);
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      values.includes(framework.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <Button
        className="ml-3"
        variant="outline"
        size="default"
        onClick={() => {
          console.log("selected values", values);
          setValues([]);
        }}
      >
        Submit
      </Button>
    </>
  );
}
