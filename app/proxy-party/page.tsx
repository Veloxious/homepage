import { Metadata } from "next"

import { CreateUserForm } from "@/app/proxy-party/components/create-user-form"
import { UserAuthForm } from "@/app/proxy-party/components/user-auth-form"

import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
        <div className="mx-auto flex w-full h-screen flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in
            </h1>
            <UserAuthForm />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" >Create an Account</Button>
              </DialogTrigger>
              <CreateUserForm />
            </Dialog>
          </div>
        </div>
      </div >
    </>
  )
}
