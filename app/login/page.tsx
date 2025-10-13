"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [show, setShow] = useState(false)
  return (
    <div className="min-h-[70dvh] bg-panel flex items-center">
      <div className="mx-auto max-w-xl w-full px-4">
        <div className="relative -mb-10 flex justify-center">
          <img src="/happy-diverse-people-illustration.jpg" alt="Ilustrasi alumni" className="h-[200px] w-auto object-contain" />
        </div>

        <Card className="shadow-card">
          <CardContent className="p-6 md:p-8">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="randy@gmail.com" type="email" />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="flex gap-2">
                  <Input id="password" type={show ? "text" : "password"} />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShow((s) => !s)}
                    aria-label="Tampilkan sandi"
                  >
                    {show ? "Sembunyi" : "Tampil"}
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox id="remember" /> Remember Me
                </label>
                <a className="text-sm text-brand hover:underline" href="#">
                  Forgot Password?
                </a>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button variant="outline">Login with Google</Button>
                <Button className="bg-[var(--brand-blue)] text-white hover:opacity-90">Login</Button>
              </div>

              <p className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a className="text-brand hover:underline" href="#">
                  Sign Up
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
