import { RunSheet, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<RunSheet[]> {
  return [
    {
      id: 0,
      tractId: '22-18S-25E-1 NW4 and SE4',
      titleExaminer: '',
      county: [],
      description: 'Northwest Quarter and Southeast Quarter of Section 22, Township 18S, Range 25E, Eddy County, New Mexico',
      titleRecords: [],
      project: ['NM Drill Site Title'],
      location: 'Eddy',
      grossAcres: 320,
      coversTo: new Date('2024-05-01'),
      coversFrom: new Date('1900-01-01'),
      deleted: false,
      status: '',
      created_at: new Date('2024-02-11'),
      updated_at: new Date('2024-02-11'),
    },
    {
      id: 1,
      tractId: '22-18S-25E-1',
      titleExaminer: '',
      county: [],
      description: 'Southwest Quarter and Northwest Quarter',
      titleRecords: [],
      project: ['NM Drill Site Title'],
      location: 'Eddy',
      grossAcres: 320,
      coversTo: new Date('2024-03-01'),
      coversFrom: new Date('1900-01-01'),
      deleted: false,
      status: '',
      created_at: new Date('2024-02-10'),
      updated_at: new Date('2024-02-11'),
    },
    {
      id: 2,
      tractId: 'GR-120-01',
      titleExaminer: '',
      county: [],
      description: 'Stuff In a Place',
      titleRecords: [],
      project: ['AC East'],
      location: 'Grimes',
      grossAcres: 720,
      coversTo: new Date('2024-01-30'),
      coversFrom: new Date('1988-07-25'),
      deleted: false,
      status: '',
      created_at: new Date('2024-01-30'),
      updated_at: new Date('2024-01-30'),
    },
    {
      id: 3,
      tractId: 'GR-420-69',
      titleExaminer: '',
      county: [],
      description: '',
      titleRecords: [],
      project: ['AC East'],
      location: 'Grimes',
      grossAcres: 101.69,
      coversTo: new Date('2023-11-16'),
      coversFrom: new Date('2023-11-16'),
      deleted: false,
      status: '',
      created_at: new Date('2023-11-16'),
      updated_at: new Date('2024-01-30'),
    },
    {
      id: 4,
      tractId: 'GR-069-069',
      titleExaminer: '',
      county: [],
      description: '',
      titleRecords: [],
      project: ['AC East'],
      location: 'Grimes',
      grossAcres: 320,
      coversTo: new Date('1900-01-01'),
      coversFrom: new Date('2023-01-01'),
      deleted: false,
      status: '',
      created_at: new Date('2023-10-10'),
      updated_at: new Date('2023-12-19'),
    }
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="  mx-auto p-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
