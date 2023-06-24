import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useFormContext } from "react-hook-form";

type RadioFieldProps = {
  name: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
  description?: string;
};

export function RadioField({
  name,
  label,
  options,
  description,
}: RadioFieldProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="flex flex-col space-y-1"
            >
              {options.map((option, i) => (
                <FormItem
                  key={i}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">{option.label}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className="absolute !mt-1 text-red-500" />
        </FormItem>
      )}
    />
  );
}
