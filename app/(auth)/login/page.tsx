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

    const ok = await login(email, password)       // ← ubah state AuthProvider
    if (ok) {
      router.push("/dasbor")                      // ← pindah ke dashboard
    } else {
      alert("Email atau password salah.\nCoba: bodro@example.com / 123456")
    }
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EAF2FF] grid place-items-center">
      {/* DECORATIVE VECTORS (biarkan sesuai punyamu) */}
      <img src="/Vector269.png" alt="" aria-hidden
        className="pointer-events-none select-none absolute -bottom-px -left-px h-28
                      w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] z-10" />
      <img src="/Vector269.png" alt="" aria-hidden
        className="pointer-events-none select-none absolute -top-px -right-px h-28
                      w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] rotate-180 transform-gpu z-10" />

      <div className="relative mx-auto w-full max-w-[620px] px-4 mt-20">
        {/* ilustrasi di belakang card */}
        <img
          src="/Group 402.png"
          alt="Ilustrasi alumni"
          className="pointer-events-none select-none absolute -top-36 left-1/2 -translate-x-1/2
                     h-[240px] w-auto object-contain z-0 drop-shadow-sm"
        />
        {/* CARD (desain tetap) */}
        <Card className="relative z-10 rounded-xl border-0 bg-[#CDDEFF] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={onSubmit}>
              {/* Email */}
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

              {/* Password */}
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
                    {/* ikon mata — biarkan sesuai punyamu */}
                    {show ? /* eye-off */ (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="#64748b" strokeWidth="1.7" />
                        <path d="M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.83-3.95" stroke="#64748b" strokeWidth="1.7" />
                      </svg>
                    ) : /* eye */ (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M1 12c1.73-3.89 6-7 11-7s9.27 3.11 11 7c-1.73 3.89-6 7-11 7S2.73 15.89 1 12Z" stroke="#64748b" strokeWidth="1.7" />
                        <circle cx="12" cy="12" r="3" stroke="#64748b" strokeWidth="1.7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember + Forgot (biarkan) */}
              <div className="mt-1 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-[#518CFF] data-[state=checked]:text-white" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-[#518CFF] hover:underline">Forgot Password?</a>
              </div>

              {/* Buttons (biarkan) */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button type="button" variant="outline" className="h-10 bg-white text-slate-800 border border-slate-200 hover:bg-slate-50">
                  <span className="mr-2 inline-flex">{/* Google icon ... */}</span>
                  Login with Google
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
