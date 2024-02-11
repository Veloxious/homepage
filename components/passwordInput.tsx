import * as React from "react"

import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { cn } from "@/lib/utils"

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
}

const toTitleCase = (str: string) => str
  .toLowerCase()
  .replace('-', ' ')
  .split(' ')
  .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ className, type, ...props }, ref) => {

    return (
      <div className="flex w-full items-center relative">
        <Label className="sr-only" htmlFor={props.id}>
          {toTitleCase(props.id)}
        </Label>
        <Input
          {...props}
          id={props.id}
          placeholder={toTitleCase(props.id)}
          type="password"
          disabled={props.disabled}
          ref={ref}
        />
        <div
          className={cn(buttonVariants({ variant: "ghost" }), "absolute right-0")}
          onClick={() => {
            let el = document.getElementById(props.id) as HTMLInputElement
            el.type === "password"
              ? el.type = "text"
              : el.type = "password"
          }}
        >
          <Icons.showHide className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    )
  }
)
PasswordInput.displayName = "PasswordInput"

export { PasswordInput }
