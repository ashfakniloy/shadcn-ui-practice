import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Checkbox } from "../ui/checkbox";

type CheckboxFieldProps = {
  name: string;
  label: string;
};

export function CheckboxField({ name, label }: CheckboxFieldProps) {
  return (
    <FormField
      name={name}
      defaultValue={false}
      render={({ field }) => (
        <FormItem className="">
          <div className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>{label}</FormLabel>
          </div>
          <FormMessage className="absolute !mt-1 text-red-500" />
        </FormItem>
      )}
    />
  );
}
