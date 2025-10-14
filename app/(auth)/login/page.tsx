"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"


export default function LoginPage() {
  const [show, setShow] = useState(false)
  const router = useRouter()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // ✅ set cookie simple (7 hari)
    document.cookie = `loggedIn=1; path=/; max-age=${7 * 24 * 60 * 60}`
    document.cookie = `userName=Randy; path=/; max-age=${7 * 24 * 60 * 60}` // optional
    router.push("/dasbor")
  }


  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#EAF2FF] grid place-items-center">
      {/* ====== Decorative blobs (tidak interaktif) ====== */}
      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-px -left-px h-28
             w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] z-10"
      />
      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-px -right-px h-28
             w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] rotate-180 transform-gpu z-10"
      />

      {/* ====== Card wrapper ====== */}
      <div className="relative mx-auto w-full max-w-[620px] px-4 mt-20">
        {/* Ilustrasi ditempel di belakang card */}
        <img
          src="/Group 402.png"
          alt="Ilustrasi alumni"
          className="
      pointer-events-none select-none
      absolute -top-36 left-1/2 -translate-x-1/2
      h-[240px] w-auto object-contain
      z-0 drop-shadow-sm
    "
        />

        {/* Card harus punya z-index di atas gambar */}
        <Card className="relative z-10 rounded-xl border-0 bg-[#CDDEFF] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <CardContent className="p-6 md:p-8">
            <form className="grid gap-4" onSubmit={onSubmit}>
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email" className="text-slate-700">
                  Email
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                    {/* icon mail */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M4 4h16v16H4z" fill="none" />
                      <path d="M4 8l8 5 8-5" stroke="#64748b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="4" y="6" width="16" height="12" rx="2" ry="2" stroke="#64748b" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    className="pl-10 h-10 bg-white/95 border border-white/60 focus-visible:ring-[#518CFF]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-slate-700">
                  Password
                </Label>
                <div className="relative">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-500">
                    {/* icon lock */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="9" rx="2" stroke="#64748b" strokeWidth="1.6" />
                      <path d="M8 11V8a4 4 0 1 1 8 0v3" stroke="#64748b" strokeWidth="1.6" />
                    </svg>
                  </span>

                  <Input
                    id="password"
                    type={show ? "text" : "password"}
                    className="pl-10 pr-10 h-10 bg-white/95 border border-white/60 focus-visible:ring-[#518CFF]"
                  />

                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    aria-label={show ? "Sembunyikan sandi" : "Tampilkan sandi"}
                    className="absolute inset-y-0 right-2 grid place-items-center px-2 text-slate-500 hover:text-slate-700"
                  >
                    {/* eye / eye-off */}
                    {show ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 3l18 18" stroke="#64748b" strokeWidth="1.7" />
                        <path d="M10.58 10.58A3 3 0 0 0 12 15a3 3 0 0 0 2.83-3.95" stroke="#64748b" strokeWidth="1.7" />
                        <path d="M10.73 5.08A10.94 10.94 0 0 1 12 5c5 0 9.27 3.11 11 7- .38.86-.9 1.66-1.54 2.38" stroke="#64748b" strokeWidth="1.7" />
                        <path d="M6.35 6.35C4.27 7.49 2.66 9.07 1 12c1.73 3.89 6 7 11 7 1.47 0 2.87-.24 4.16-.68" stroke="#64748b" strokeWidth="1.7" />
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

              {/* Remember + Forgot */}
              <div className="mt-1 flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <Checkbox id="remember" className="border-slate-300 data-[state=checked]:bg-[#518CFF] data-[state=checked]:text-white" />
                  Remember Me
                </label>
                <a href="#" className="text-sm text-[#518CFF] hover:underline">
                  Forgot Password?
                </a>
              </div>

              {/* Google + Login */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="h-10 bg-white text-slate-800 border border-slate-200 hover:bg-slate-50"
                >
                  <span className="mr-2 inline-flex">
                    {/* Google 'G' logo */}
                    <svg width="18" height="18" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.6 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
                      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.4 16.2 18.8 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4 16.1 4 9.2 8.4 6.3 14.7z" />
                      <path fill="#4CAF50" d="M24 44c5 0 9.6-1.9 13-5.1l-6-4.9C29.8 35.3 27 36 24 36c-5.1 0-9.5-3.3-11.1-8l-6.6 5C9.2 39.6 16.1 44 24 44z" />
                      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.3 3.6-5.7 8-11.3 8-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.9 6.1 29.2 4 24 4c-11.1 0-20 8.9-20 20s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z" />
                    </svg>
                  </span>
                  Login with Google
                </Button>

                <Button
                  type="submit"
                  className="h-10 rounded-lg bg-[#58A8FF] hover:bg-[#4b9dff] text-white shadow"
                >
                  Login
                </Button>
              </div>

              {/* Sign up link */}
              <p className="text-center text-sm text-slate-700">
                Don&apos;t have an account?{" "}
                <a className="text-[#518CFF] hover:underline" href="#">
                  Sign Up
                </a>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
