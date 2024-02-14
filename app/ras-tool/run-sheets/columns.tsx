"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RunSheet = {
  id: number,
  titleExaminer: string,
  county: string[],
  description: string,
  titleRecords: string[],
  project: string[],
  location: string,
  tractId: string,
  grossAcres: number,
  status: string,
  coversTo: Date,
  coversFrom: Date,
  deleted: boolean,
  created_at: Date,
  updated_at: Date
}

export const columns: ColumnDef<RunSheet>[] = [
  {
    accessorKey: "tractId",
    header: "Tract TD",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "grossAcres",
    header: "Gross Acres",
  },
  {
    accessorKey: "updated_at",
    header: "Updated Date"
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tract = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(tract.tractId)}
            >
              Copy tract ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View tract details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
