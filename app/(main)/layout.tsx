// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import { AuthProvider } from "@/components/auth-provider"

export const metadata: Metadata = {
  title: "Kabel",
  description: "website pendataan alumni",
  generator: "Ragil Kurniawan",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const isLoggedIn = false
  const userName = "Randy"
  const avatarSrc = "/stylized-user-avatar.png"

  return (
    <html
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased scroll-smooth scroll-pt-16`}
    >
      <body className="font-sans bg-background text-foreground">
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <SiteHeader />
            <main className="min-h-[calc(100dvh-160px)]">{children}</main>
            <SiteFooter />
            <Analytics />
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  )
}
