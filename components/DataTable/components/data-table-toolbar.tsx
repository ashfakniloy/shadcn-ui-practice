"use client";

import { Table } from "@tanstack/react-table";
import { X, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { priorities, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Task } from "../data/schema";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered =
    table.getPreFilteredRowModel().rows.length >
    table.getFilteredRowModel().rows.length;

  const handleDeleteRows = () => {
    const taskId = table
      .getSelectedRowModel()
      .flatRows.map((row) => (row.original as Task).id);

    // const taskId = table
    //   .getSelectedRowModel()
    //   .rows.map((row) => (row.original as Task).id);

    console.log("delete", taskId);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Filter tasks..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] outline-none focus:border-gray-500"
        />

        {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )}
        {table.getSelectedRowModel().flatRows.length > 0 && (
          <Button
            variant="outline"
            onClick={handleDeleteRows}
            className="h-8 px-3"
          >
            <Trash2 className="w-4 h-4 " />
            {/* Delete selected rows */}
          </Button>
        )}
        <div className="text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>

        {/* alternative */}
        {/* {Object.values(rowSelection).some((isSelected) => isSelected) && (
          <Button
            variant="destructive"
            onClick={handleDeleteRows}
            className="h-8 px-3"
          >
            Delete
          </Button>
        )} */}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <X className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>

      <DataTableViewOptions table={table} />
    </div>
  );
}
