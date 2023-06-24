import { DataTable } from "../DataTable/components/data-table";
// import { tasks } from "../DataTable/data/tasks";
import { columns } from "../DataTable/components/columns";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { taskSchema } from "../DataTable/data/schema";

async function getData() {
  // Fetch data from your API here.
  // return tasks;

  const data = await fs.readFile(
    path.join(process.cwd(), "components/DataTable/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function DataTableDemo() {
  const data = await getData();

  return <DataTable columns={columns} data={data} />;
}
