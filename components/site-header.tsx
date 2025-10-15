"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "./auth-provider"
const navPrivate = [
  { href: "/dasbor", label: "Dasbor" },
  { href: "/berita", label: "Berita" },
  { href: "/forum", label: "Forum" },
  { href: "/kartu-alumni", label: "Kartu Alumni" },
  { href: "/keuangan", label: "Keuangan" },
]
const navPublic = [
  { href: "/#beranda", label: "Beranda", hash: "#beranda" },
  { href: "/#berita", label: "Berita", hash: "#berita" },
  { href: "/#forum", label: "Forum", hash: "#forum" },
]

export function SiteHeader() {
  const { user } = useAuth()
  const pathname = usePathname()

  // ⬇️ Tambah flag mount agar SSR dan client pertama kali konsisten
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  // Saat belum mounted, pakai asumsi "belum login" supaya cocok dengan SSR
  const isLoggedIn = mounted ? !!user : false
  const userName = mounted ? (user?.name ?? "Randy") : "Randy"

  const menu = isLoggedIn ? navPrivate : navPublic

  // Hash untuk anchor di homepage (hanya setelah mounted)
  const [currentHash, setCurrentHash] = useState<string>("")
  useEffect(() => {
    if (!mounted) return
    if (pathname !== "/") { setCurrentHash(""); return }
    const set = () => setCurrentHash(window.location.hash || "#beranda")
    set()
    window.addEventListener("hashchange", set)
    return () => window.removeEventListener("hashchange", set)
  }, [mounted, pathname])

  const isActive = (href: string, hash?: string) => {
    if (!mounted) return false // hindari perbedaan atribut saat SSR
    if (isLoggedIn) return pathname === href || pathname.startsWith(href + "/")
    if (pathname !== "/") return false
    return !!hash && (currentHash === hash || (!currentHash && hash === "#beranda"))
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 md:pr-8 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo1.png" alt="KABeL" className="h-8 w-auto" />
          <img src="/logo2.png" alt="KABeL" className="h-8 w-auto" />
        </Link>

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm">
            {menu.map((n) => {
              const active = isActive(n.href, (n as any).hash)
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  // ⬇️ hanya set aria-current setelah mounted
                  aria-current={mounted && active ? "page" : undefined}
                  className={cn(
                    "transition-colors hover:text-[#518CFF]",
                    active ? "text-[#518CFF] font-medium" : "text-foreground/80"
                  )}
                >
                  {n.label}
                </Link>
              )
            })}
          </nav>

          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-foreground/80">Hi, {userName}</span>
              <Avatar className="size-8">
                <AvatarImage src="/stylized-user-avatar.png" alt="Avatar" />
                <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
