import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  const options = ["Recent", "Popular"];
  return (
    <Select defaultValue={options?.[0]}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option, i) => (
            <SelectItem value={option}>{option}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
