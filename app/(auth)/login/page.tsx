"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const email = String(fd.get("email") || "")
    const password = String(fd.get("password") || "")

    const ok = await login(email, password)
    if (ok) {
      router.push("/dasbor")
    } else {
      alert("Email atau password salah.\nCoba: bodro@example.com / 123456")
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EAF2FF] grid place-items-center">
      <div className="absolute left-28 top-3 sm:left-6 sm:top-4 z-20 flex items-center gap-3">
        <img src="/logo1.png" alt="KABeL" className="h-7 sm:h-8 w-auto" />
        <img src="/logo2.png" alt="KABeL" className="h-7 sm:h-8 w-auto" />
      </div>
      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-px -left-px z-10 h-28 w-[520px] hidden md:block"
      />

      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-px -right-px z-10 h-28 w-[520px] rotate-180 transform-gpu hidden md:block"
      />

      <div className="relative mx-auto w-full max-w-[620px]  px-4 mt-20">
        <img
          src="/Group 402.png"
          alt="Ilustrasi alumni"
          className="
          pointer-events-none select-none
          absolute mt-10 -top-36 inset-x-0
          w-[98%] h-[300px]
          object-cover object-top     
          z-0 drop-shadow-sm
          "
        />
        <Card className="relative z-10 mt-[150px] h-[350px] rounded-xl border-0 bg-[#CDDEFF] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-slate-700">Email</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 8l8 5 8-5" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="4" y="6" width="16" height="12" rx="2" ry="2" stroke="#64748b" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <Input id="email" name="email" type="email" placeholder="bodro@example.com"
                    className="pl-10 h-10 bg-white/95 border border-white/60 focus-visible:ring-[#518CFF]" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-slate-700">Password</Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="#64748b" strokeWidth="1.6" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="#64748b" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <Input id="password" name="password" type={show ? "text" : "password"}
                    className="pl-10 pr-10 h-10 bg-white/95 border border-white/60 focus-visible:ring-[#518CFF]" />
                  <button type="button" onClick={() => setShow((s) => !s)}
                    aria-label={show ? "Sembunyikan sandi" : "Tampilkan sandi"}
                    className="absolute inset-y-0 right-2 grid place-items-center px-2 text-slate-500 hover:text-slate-700">
                    {show ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="#64748b" strokeWidth="1.7" />
                        <path d="M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.83-3.95" stroke="#64748b" strokeWidth="1.7" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12c1.73-3.89 6-7 11-7s9.27 3.11 11 7c-1.73 3.89-6 7-11 7S2.73 15.89 1 12Z" stroke="#64748b" strokeWidth="1.7" />
                        <circle cx="12" cy="12" r="3" stroke="#64748b" strokeWidth="1.7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-[#518CFF] data-[state=checked]:text-white" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-[#518CFF] hover:underline">Forgot Password?</a>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 px-5 flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 transition"
                  aria-label="Login dengan Google"
                >
                  <img
                    src="logogoogle.png"
                    alt="Google"
                    className="h-5 w-5 object-contain"
                  />
                  <span className="hidden sm:inline text-sm font-medium text-slate-700">
                    Login with Google
                  </span>
                </Button>

                <Button type="submit" className="h-10 rounded-lg bg-[#58A8FF] hover:bg-[#4b9dff] text-white shadow">
                  Login
                </Button>
              </div>

              <p className="text-center text-sm text-slate-700">
                Don&apos;t have an account? <a className="text-[#518CFF] hover:underline" href="#">Sign Up</a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
