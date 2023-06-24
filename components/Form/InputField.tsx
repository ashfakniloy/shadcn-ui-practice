import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

import { Controller } from "react-hook-form";

type InputProps = {
  control?: any;
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  description?: string;
  autoComplete?: "on" | "off" | "true" | "false";
};

export function InputField({
  control,
  label,
  name,
  placeholder,
  type,
  description,
  autoComplete,
}: InputProps) {
  return (
    // <Controller
    //   // defaultValue={""}
    //   name={name}
    //   control={control}
    //   render={({ field }) => (
    //     <FormItem>
    //       <FormLabel>{label}</FormLabel>
    //       <FormControl>
    //         <Input placeholder={placeholder} {...field} />
    //       </FormControl>
    //       <FormDescription>{description}</FormDescription>
    //       <FormMessage />
    //     </FormItem>
    //   )}
    // />

    <FormField
      // control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={type}
              {...field}
              autoComplete={autoComplete}
              className="outline-none focus-visible:border-gray-700"
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className="absolute !mt-0 text-red-500" />
        </FormItem>
      )}
    />
  );
}
