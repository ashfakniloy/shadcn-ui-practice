import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type SelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  options: {
    name: string;
    value: string;
  }[];
  description?: string;
};

export function SelectField({
  name,
  label,
  placeholder,
  options,
  description,
}: SelectFieldProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="outline-none focus-visible:border-gray-700">
                {field.value && <SelectValue placeholder={placeholder} />}
                {!field.value && (
                  <p className="text-muted-foreground">{placeholder}</p>
                )}
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, i) => (
                <SelectItem key={i} value={option.value}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className="absolute !mt-0 text-red-500" />
        </FormItem>
      )}
    />
  );
}

// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";
// import { Check, ChevronsUpDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { useState } from "react";
// import { useFormContext } from "react-hook-form";

// type SelectFieldProps = {
//   name: string;
//   label: string;
//   placeholder: string;
//   options: {
//     name: string;
//     value: string;
//   }[];
//   description?: string;
// };

// export function SelectField({
//   name,
//   label,
//   placeholder,
//   options,
//   description,
// }: SelectFieldProps) {
//   const [open, setOpen] = useState(false);

//   const { setValue } = useFormContext();

//   return (
//     <FormField
//       name={name}
//       render={({ field }) => (
//         <FormItem className="relative">
//           <FormLabel>{label}</FormLabel>
//           <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//               <Button
//                 variant="outline"
//                 role="combobox"
//                 aria-expanded={open}
//                 // className="w-full justify-between"
//                 className={cn(
//                   "w-full justify-between",
//                   !field.value && "text-muted-foreground"
//                 )}
//               >
//                 {field.value
//                   ? options.find((option) => option.value === field.value)?.name
//                   : placeholder}
//                 <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//               </Button>
//             </PopoverTrigger>
//             {/* <PopoverContent className="w-[200px] p-0"> */}
//             <PopoverContent className="w-[400px] p-0">
//               <Command className="">
//                 {/* <CommandInput placeholder="Search framework..." /> */}
//                 {/* <CommandEmpty>No framework found.</CommandEmpty> */}
//                 <CommandGroup>
//                   {options.map((option) => (
//                     <CommandItem
//                       key={option.value}
//                       onSelect={(currentValue) => {
//                         // setValue(currentValue === value ? "" : currentValue);
//                         setValue(
//                           name,
//                           currentValue
//                           // currentValue === field.value ? "" : currentValue
//                         );
//                         setOpen(false);
//                       }}
//                       className={cn(
//                         "!bg-transparent hover:!bg-accent"
//                         // option.value === field.value && "!bg-accent"
//                       )}
//                     >
//                       <Check
//                         className={cn(
//                           "mr-2 h-4 w-4",
//                           field.value === option.value
//                             ? "opacity-100"
//                             : "opacity-0"
//                         )}
//                       />
//                       {option.name}
//                     </CommandItem>
//                   ))}
//                 </CommandGroup>
//               </Command>
//             </PopoverContent>
//           </Popover>
//           {/* <Select onValueChange={field.onChange} defaultValue={field.value}>
//             <FormControl>
//               <SelectTrigger className="outline-none focus-visible:border-gray-700">
//                 {field.value && <SelectValue placeholder={placeholder} />}
//                 {!field.value && (
//                   <p className="text-muted-foreground">{placeholder}</p>
//                 )}
//               </SelectTrigger>
//             </FormControl>
//             <SelectContent>
//               {options.map((option, i) => (
//                 <SelectItem key={i} value={option.value}>
//                   {option.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select> */}
//           {description && <FormDescription>{description}</FormDescription>}
//           <FormMessage className="absolute !mt-0 text-red-500" />
//         </FormItem>
//       )}
//     />
//   );
// }
