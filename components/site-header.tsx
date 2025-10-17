"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { useAuth } from "./auth-provider"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

type PublicItem = { href: string; label: string; hash?: `#${string}` }
type PrivateItem = { href: `/${string}`; label: string }

const navPrivate: PrivateItem[] = [
  { href: "/dasbor", label: "Beranda" },
  { href: "/berita", label: "Berita" },
  { href: "/forum", label: "Forum" },
  { href: "/kartu-alumni", label: "Kartu Alumni" },
  { href: "/keuangan", label: "Keuangan" },
]
const navPublic: PublicItem[] = [
  { href: "/#beranda", label: "Beranda", hash: "#beranda" },
  { href: "/#berita", label: "Berita", hash: "#berita" },
  { href: "/#forum", label: "Forum", hash: "#forum" },
]

export function SiteHeader() {
  const { user } = useAuth()
  const pathname = usePathname()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const isLoggedIn = mounted ? !!user : false
  const userName = mounted ? (user?.name ?? "Randy") : "Randy"
  const menu = (isLoggedIn ? navPrivate : navPublic) as (PublicItem | PrivateItem)[]

  const [currentHash, setCurrentHash] = useState<string>("")
  useEffect(() => {
    if (!mounted) return
    if (pathname !== "/") { setCurrentHash(""); return }

    const known = new Set(["#beranda", "#berita", "#forum"])
    if (!window.location.hash || !known.has(window.location.hash)) {
      window.history.replaceState(null, "", "#beranda")
    }

    const apply = () => setCurrentHash(window.location.hash || "#beranda")
    apply()
    window.addEventListener("hashchange", apply)
    return () => window.removeEventListener("hashchange", apply)
  }, [mounted, pathname])

  const clean = (p: string) => p.replace(/\/+$/, "")

  const isActive = (href: string, hash?: string) => {
    if (!mounted) return false

    if (isLoggedIn) {
      const cur = clean(pathname)
      const target = clean(href)
      return cur === target || cur.startsWith(target + "/")
    }
    if (pathname !== "/") return false
    return !!hash && (currentHash === hash || (!currentHash && hash === "#beranda"))
  }

  const [mobileOpen, setMobileOpen] = useState(false)
  const closeMobile = () => setMobileOpen(false)

  const handleItemClick = (href: string, hash?: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hash) {
      closeMobile()
      return
    }

    e.preventDefault()
    const targetHash = hash
    const id = targetHash.slice(1) || "beranda"

    if (pathname !== "/") {
      router.push(`/${targetHash}`)
      closeMobile()
      return
    }

    const el = document.getElementById(id)
    if (el) {
      const header = document.querySelector("header") as HTMLElement | null
      const offset = header?.offsetHeight ?? 0
      const top = el.getBoundingClientRect().top + window.scrollY - offset

      window.history.pushState(null, "", targetHash)
      setCurrentHash(targetHash)
      window.dispatchEvent(new HashChangeEvent("hashchange"))

      window.scrollTo({ top, behavior: "smooth" })
      closeMobile()
    } else {
      router.push(`/${targetHash}`)
      closeMobile()
    }
  }

  const linkClass = (active: boolean) =>
    cn(
      "transition-colors hover:text-[#518CFF] focus-visible:text-[#518CFF]",
      active ? "text-[#518CFF] font-semibold" : "text-foreground/80"
    )


  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 md:pr-8 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo1.png" alt="KABeL" className="h-8 w-auto" />
          <img src="/logo2.png" alt="KABeL" className="h-8 w-auto" />
        </Link>
        <div className="ml-auto hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm">
            {menu.map((n) => {
              const item = n as PublicItem
              const active = isActive(item.href, item.hash)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={("hash" in item) ? handleItemClick(item.href, item.hash) : undefined}
                  aria-current={mounted && active ? "page" : undefined}
                  className={linkClass(active)}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {isLoggedIn && (
            <Link
              href="/profil"
              className="hidden md:flex items-center gap-3 group"
              aria-label="Buka profil"
            >
              <span className="text-sm text-foreground/80 group-hover:text-[#518CFF]">
                Hi, {userName}
              </span>
              <Avatar className="size-8 ring-2 ring-transparent group-hover:ring-[#518CFF] transition">
                <AvatarImage src="/stylized-user-avatar.png" alt={`${userName} avatar`} />
                <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Link>
          )}
        </div>
        <div className="ml-auto md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:text-[#518CFF]" aria-label="Buka menu">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[320px]">
              <SheetHeader className="mb-2">
                <SheetTitle className="flex items-center gap-2">
                  <img src="/logo1.png" alt="KABeL" className="h-6 w-auto" />
                  <img src="/logo2.png" alt="KABeL" className="h-6 w-auto" />
                </SheetTitle>
              </SheetHeader>

              {isLoggedIn && (
                <Link
                  href="/profil"
                  onClick={() => closeMobile()}
                  className="mt-2 mb-4 flex items-center gap-3 group"
                >
                  <Avatar className="size-8 ring-2 ring-transparent group-hover:ring-[#518CFF] transition">
                    <AvatarImage src="/stylized-user-avatar.png" alt={`${userName} avatar`} />
                    <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-foreground/80 group-hover:text-[#518CFF]">
                    Hi, {userName}
                  </span>
                </Link>
              )}

              <nav className="grid gap-3 text-sm mt-2">
                {menu.map((n) => {
                  const item = n as PublicItem
                  const active = isActive(item.href, item.hash)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleItemClick(item.href, item.hash)}
                      aria-current={mounted && active ? "page" : undefined}
                      className={cn("px-1 py-2 rounded-md", linkClass(active))}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
