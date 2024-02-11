"use client"

import React from "react"

import { cn } from "@/lib/utils"

import { Icons } from "@/components/icons"
import { PasswordInput } from "@/components/passwordInput"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CreateUserFormProps extends React.HTMLAttributes<HTMLDivElement> { }

export function CreateUserForm({ className, ...props }: CreateUserFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <DialogContent onOpenAutoFocus={e => e.preventDefault()}>
      <div className="mx-auto flex w-full h-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center my-4">
          <DialogHeader>
            <DialogTitle>Creat an Account</DialogTitle>
            <DialogDescription>Enter your email below to create your account</DialogDescription>
          </DialogHeader>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6">
            <div className={cn("grid gap-6", className)} {...props}>
              <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                  <div className="grid gap-2">
                    <Label className="sr-only" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="name@example.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect="off"
                      autoFocus={false}
                      disabled={isLoading}
                    />
                    <PasswordInput id="new-password" autoComplete="new-password" />
                    <PasswordInput id="confirm-password" autoComplete="new-password" />
                  </div>
                  <Button disabled={isLoading} type="button">
                    {isLoading && (
                      <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Create Account
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  )
}
