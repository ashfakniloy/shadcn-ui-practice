"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type SwithchFieldProps = {
  name: string;
  label: string;
  description: string;
};

export function SwitchField({ name, label, description }: SwithchFieldProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <FormMessage className="absolute !mt-1 text-red-500" />
        </FormItem>
      )}
    />
    // <FormField

    //   name="security_emails"
    //   render={({ field }) => (
    //     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
    //       <div className="space-y-0.5">
    //         <FormLabel className="text-base">Security emails</FormLabel>
    //         <FormDescription>
    //           Receive emails about your account security.
    //         </FormDescription>
    //       </div>
    //       <FormControl>
    //         <Switch
    //           checked={field.value}
    //           onCheckedChange={field.onChange}
    //           disabled
    //           aria-readonly
    //         />
    //       </FormControl>
    //     </FormItem>
    //   )}
    // />
  );
}

// "use client";

// import Link from "next/link";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Switch } from "@/components/ui/switch";

// import {
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "../ui/form";

// type SwithchFieldProps = {
//   name: string;
//   label: string;
//   options: {
//     label: string;
//     value: string;
//     description: string;
//   }[];
//   description?: string;
// };

// export function SwitchField({
//   name,
//   label,
//   description,
//   options,
// }: SwithchFieldProps) {
//   return (
//     <FormField
//       name={name}
//       render={({ field }) => (
//         <FormItem className="relative">
//           <FormLabel>{label}</FormLabel>
//           <FormControl>
//             {options.map((option, i) => (
//               <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                 <div className="space-y-0.5">
//                   <FormLabel className="text-base">{option.label}</FormLabel>
//                   <FormDescription>{option.description}</FormDescription>
//                 </div>
//                 <FormControl>
//                   <Switch
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                   />
//                 </FormControl>
//                 {/* <FormMessage className="absolute !mt-1 text-red-500" /> */}
//               </FormItem>
//             ))}
//           </FormControl>
//         </FormItem>

//       )}
//     />

//   );
// }
