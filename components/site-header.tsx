"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navPrivate = [
  { href: "/dasbor", label: "Dasbor" },
  { href: "/berita", label: "Berita" },
  { href: "/forum", label: "Forum" },
  { href: "/kartu-alumni", label: "Kartu Alumni" },
  { href: "/keuangan", label: "Keuangan" },
]

// PUBLIC pakai anchor ke homepage
const navPublic = [
  { href: "/#beranda", label: "Beranda", hash: "#beranda" },
  { href: "/#berita", label: "Berita", hash: "#berita" },
  { href: "/#forum", label: "Forum", hash: "#forum" },
]

type Props = {
  isLoggedIn?: boolean
  userName?: string
  avatarSrc?: string
}

export function SiteHeader({
  isLoggedIn = false,
  userName = "Randy",
  avatarSrc = "/stylized-user-avatar.png",
}: Props) {
  const pathname = usePathname()
  const menu = isLoggedIn ? navPrivate : navPublic

  // Track hash HANYA untuk public (anchor). Default aktif "beranda" kalau memang di "/".
  const [currentHash, setCurrentHash] = useState<string>("")
  useEffect(() => {
    const init = () => {
      if (typeof window === "undefined") return
      // Jika bukan homepage, jangan aktifkan apa pun untuk anchor
      if (pathname !== "/") {
        setCurrentHash("")
      } else {
        setCurrentHash(window.location.hash || "#beranda")
      }
    }
    init()
    const onHash = () => setCurrentHash(window.location.hash || "#beranda")
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [pathname])

  // Tentukan link aktif
  const isActive = (href: string, hash?: string) => {
    if (isLoggedIn) {
      // aktif untuk route saat ini (termasuk subpath)
      return pathname === href || pathname.startsWith(href + "/")
    }
    // Public/anchor: hanya aktif di homepage dan hash cocok
    if (pathname !== "/") return false
    return !!hash && (currentHash === hash || (!currentHash && hash === "#beranda"))
  }

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 md:pr-8 h-16 flex items-center">
        {/* LOGO: (biarkan sesuai punyamu) */}
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
                  aria-current={active ? "page" : undefined}
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
                <AvatarImage src={avatarSrc} alt="Avatar" />
                <AvatarFallback>{userName.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
