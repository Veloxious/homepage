import { RunSheet, columns } from "./columns"
import { DataTable } from "./data-table"
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

async function getData() {
  const d1 = getRequestContext().env.DB;
  const { results } = await d1.prepare('SELECT * FROM runsheets').all<RunSheet>();

  return results;
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="  mx-auto p-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
