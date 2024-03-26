import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CreateForm from "./components/createForm"
import { getRequestContext } from '@cloudflare/next-on-pages';

export const runtime = 'edge';

async function createRunSheet(formData: FormData): Promise<void> {
  'use server'
  const d1 = getRequestContext().env.DB;
  const tractID = formData.get('tractID');
  const location = formData.get('location');
  const titleExaminer = formData.get('titleExaminer');
  const grossAcres = formData.get('grossAcres');
  const coversFrom = formData.get('coversFrom');
  const coversTo = formData.get('coversTo');
  const description = formData.get('description');
  const deleted = formData.get('deleted');
  const status = formData.get('status');
  const created_at = formData.get('created_at');
  const updated_at = formData.get('updated_at');
  // console.log(formData);
  await d1
    .prepare('INSERT INTO runsheets (tractID, location, titleExaminer, grossAcres, coversFrom, coversTo, description, deleted, status, created_at, updated_at) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
    .bind(tractID, location, titleExaminer, grossAcres, coversFrom, coversTo, description, deleted, status, created_at, updated_at)
    .run();
}

export default function CardWithForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Create Run Sheet</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateForm action={createRunSheet} />
        </CardContent>
      </Card>
    </div>
  )
}
