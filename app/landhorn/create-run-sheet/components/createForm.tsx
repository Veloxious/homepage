"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

const formSchema = z.object({
  tractID: z.string().min(2).max(50),
  tractLocation: z.string().min(2).max(50),
  titleExaminer: z.string().min(2).max(50),
  grossAcres: z.coerce.number().min(0).max(1000),
  coversFrom: z.date(),
  coversTo: z.date(),
  description: z.string().min(2).max(500),
})

export default function CreateForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  const form = useForm<z.infer<typeof formSchema>>({
    shouldUnregister: false,
    resolver: zodResolver(formSchema),
    defaultValues: {
      tractID: "",
      tractLocation: "",
      titleExaminer: "",
      coversFrom: new Date(),
      coversTo: new Date(),
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    const formData = new FormData()
    formData.append("tractID", data.tractID)
    formData.append("location", data.tractLocation)
    formData.append("titleExaminer", data.titleExaminer)
    formData.append("grossAcres", data.grossAcres.toString())
    formData.append("coversFrom", data.coversFrom.toISOString())
    formData.append("coversTo", data.coversTo.toISOString())
    formData.append("description", data.description)
    formData.append("deleted", "false")
    formData.append("status", '')
    formData.append("created_at", new Date().toISOString())
    formData.append("updated_at", new Date().toISOString())

    action(formData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="tractID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tract ID</FormLabel>
                  <FormControl>
                    <Input placeholder="Tract ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="titleExaminer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title Examiner</FormLabel>
                  <FormControl>
                    <Input placeholder="Examiner" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coversFrom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Covers From</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="tractLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tract Location</FormLabel>
                  <FormControl>
                    <Input placeholder="San Francisco, CA" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grossAcres"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gross Acres</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coversTo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Covers To</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormMessage />
        <div className="w-1/2 m-auto flex justify-between">
          <Button type="submit" size="lg">Submit</Button>
          <Button type="button" size="lg" variant="destructive">Cancel</Button>
        </div>
      </form>
    </Form>
  )
}
