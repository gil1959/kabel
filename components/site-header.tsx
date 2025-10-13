"use client"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const nav = [
  { href: "/dasbor", label: "Dasbor" },
  { href: "/berita", label: "Berita" },
  { href: "/forum", label: "Forum" },
  { href: "/kartu-alumni", label: "Kartu Alumni" },
  { href: "/keuangan", label: "Keuangan" },
]

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded bg-panel" />
          <span className="font-semibold">KABeL</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "hover:text-brand/80 transition-colors",
                pathname === n.href ? "text-brand font-medium" : "text-foreground/80",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-sm text-foreground/80">Hi, Randy</span>
          <Avatar className="size-8">
            <AvatarImage src="/stylized-user-avatar.png" alt="Avatar" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
