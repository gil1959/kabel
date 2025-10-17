"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"

export default function ProfilPage() {
  const [openLogout, setOpenLogout] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState<string>("/pp.png")
  const fileRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const { logout } = useAuth()

  useEffect(() => {
    const saved = localStorage.getItem("kabel_avatar")
    if (saved) setAvatarUrl(saved)
  }, [])

  function openPicker() {
    fileRef.current?.click()
  }

  function handleConfirmLogout() {
    try { logout() } catch { }
    document.cookie = "loggedIn=; Max-Age=0; path=/"
    document.cookie = "userName=; Max-Age=0; path=/"
    router.replace("/login")
  }

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = String(reader.result || "")
      setAvatarUrl(dataUrl)
      localStorage.setItem("kabel_avatar", dataUrl)
    }
    reader.readAsDataURL(file)
    e.target.value = ""
  }

  return (
    <section className="bg-[#EAF2FF] ">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 md:py-10 justify-center gap-4 md:gap-6 flex flex-col md:flex-row md:grid-cols-[280px,1fr]">
        <aside className="md:mr-0">
          <Card className="rounded-xl border-0 bg-white shadow-[0_8px_24px_rgba(16,24,40,0.04)]">
            <CardContent className="p-0">
              <nav className="text-[14px] sm:text-[15px] p-4 sm:p-5 py-6 sm:py-[35px]">

                <div className="px-3 sm:px-5 py-3 sm:py-4 font-medium text-[#0F172A]">Profil</div>
                <ul className="px-1 sm:px-2">
                  <SidebarItem icon={IconUser} label="Edit Profil" />
                  <SidebarItem icon={IconBell} label="Notifikasi" />
                </ul>
                <div className="px-3 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3 font-medium text-[#0F172A]">
                  Bantuan & Dukungan
                </div>
                <ul className="px-1 sm:px-2">
                  <SidebarItem icon={IconWallet} label="Pembayaran Kas" />
                  <SidebarItem icon={IconReceipt} label="Transaksi" />
                </ul>
                <div className="px-3 sm:px-5 pt-3 sm:pt-4 pb-2 sm:pb-3 font-medium text-[#0F172A]">
                  Pengaturan & Privasi
                </div>
                <ul className="px-1 sm:px-2">
                  <SidebarItem icon={IconMail} label="Ubah Email" />
                  <SidebarItem icon={IconLock} label="Ubah Password" />
                  <SidebarItem icon={IconBell} label="Notifikasi" />
                </ul>
                <ul className="px-1 sm:px-2 pb-4">
                  <SidebarItem
                    icon={IconLogout}
                    label="Keluar"
                    onClick={() => setOpenLogout(true)}
                  />
                </ul>
              </nav>
            </CardContent>
          </Card>
        </aside>

        <div className="flex flex-col">
          <Card className="rounded-xl bg-[#EAF2FF] border-0 shadow-none">
            <CardContent className="p-4 md:p-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={avatarUrl}
                    alt="Foto profil"
                    className="rounded-full bg-[#CDDEFF] object-cover h-24 w-24 md:h-30 md:w-30"
                  />
                </div>
                <div className="flex flex-col gap-3 justify-center">
                  <div>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={onPick}
                    />

                    <Button
                      type="button"
                      variant="outline"
                      onClick={openPicker}
                      className="h-9 gap-2 rounded-md border-[#D7E2FF] bg-white text-[#2F80ED] hover:bg-[#2F80ED] hover:text-white"
                    >
                      <IconUpload className="h-4 w-4" />
                      Upload Foto
                    </Button>
                  </div>
                  <p className="text-[13px] md:text-sm leading-relaxed text-[#64748B]">
                    Foto profil dan avatar dapat dilihat oleh semua orang di dalam platform
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4 md:mt-0 rounded-xl border-0 bg-white shadow-[0_8px_24px_rgba(16,24,40,0.04)]">
            <CardContent className="p-4 md:p-6">
              <h3 className="mb-4 text-[15px] md:text-base font-semibold text-[#0F172A]">Info Personal</h3>
              <div className="grid gap-y-4 gap-x-6 sm:gap-y-5 sm:gap-x-8 md:grid-cols-2">
                <Field label="Nama Lengkap" value="Randy Dwi Pranaputra" />
                <Field label="Angkatan" value="2005" />
                <Field label="Perusahaan" value="-" />
                <Field label="Jabatan" value="-" />
                <Field label="Kontak" value="0812 9294 1805" />
                <Field label="Email" value="Randy@gmail.com" />
                <Field label="LinkedIn" value="Randy Dwi P" />
              </div>

              <a
                href="#"
                className="mt-5 inline-flex items-center text-sm font-medium text-[#2F80ED] hover:underline"
              >
                Lihat angkatan bersama <span className="ml-1">›</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
      {openLogout && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 md:p-6 shadow-lg">
            <p className="text-center font-medium">Yakin ingin keluar?</p>
            <div className="mt-5 flex justify-center gap-3">
              <Button
                className="rounded-md bg-[#2F80ED] text-white hover:opacity-90"
                onClick={handleConfirmLogout}
              >
                Iya
              </Button>
              <Button variant="outline" onClick={() => setOpenLogout(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function SidebarItem({
  icon: Icon,
  label,
  onClick,
}: {
  icon: (p: React.SVGProps<SVGSVGElement>) => JSX.Element
  label: string
  onClick?: () => void
}) {
  return (
    <li>
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[14px] sm:text-[15px] text-[#0F172A] hover:bg-[#F4F7FF]"
      >
        <Icon className="h-4 w-4 text-[#0F172A]" />
        <span className="truncate">{label}</span>
      </button>
    </li>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5 sm:gap-1">
      <span className="text-[13px] sm:text-sm font-medium text-[#0F172A]">{label}</span>
      <span className="text-[13px] sm:text-sm text-[#334155]">{value}</span>
    </div>
  )
}
function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 20c1.6-3.5 5-5 8-5s6.4 1.5 8 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconBell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 17H9l-1 1H5l1.3-1.7A7 7 0 0 1 6 13V10a6 6 0 1 1 12 0v3a7 7 0 0 1-.3 3.3L19 18h-3l-1-1Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M16 12h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconReceipt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M7 3h10v18l-3-2-2 2-2-2-3 2V3Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 8h6M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
function IconLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M15 17l5-5-5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 12H9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M13 5V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  )
}
function IconUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M12 16V7m0 0l-3 3m3-3 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
