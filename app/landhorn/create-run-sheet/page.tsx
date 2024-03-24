import * as React from "react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CreateForm from "./components/createForm"

export default function CardWithForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle>Create Run Sheet</CardTitle>
        </CardHeader>
        <CardContent>
          <CreateForm />
        </CardContent>
      </Card>
    </div>
  )
}
