"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const menu = [
  "Edit Profil",
  "Notifikasi",
  "Pembayaran Kas",
  "Transaksi",
  "Ubah Email",
  "Ubah Password",
  "Notifikasi",
  "Keluar",
]

export default function ProfilPage() {
  const [open, setOpen] = useState(false)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-[280px,1fr] gap-6">
      <Card className="shadow-card">
        <CardContent className="p-0">
          <ul className="divide-y divide-border">
            {menu.map((m) => (
              <li key={m}>
                <button
                  className="w-full text-left px-4 py-3 hover:bg-panel"
                  onClick={() => (m === "Keluar" ? setOpen(true) : undefined)}
                >
                  {m}
                </button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Info Personal</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2 text-sm">
            <p>
              <strong>Nama Lengkap</strong> — Randy Dwi Pranaputra
            </p>
            <p>
              <strong>Angkatan</strong> — 2005
            </p>
            <p>
              <strong>Email</strong> — Randy@gmail.com
            </p>
            <p>
              <strong>Kontak</strong> — 0812 9294 1805
            </p>
          </CardContent>
        </Card>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 bg-black/40 grid place-items-center p-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full">
            <p className="font-medium text-center">Yakin ingin keluar?</p>
            <div className="mt-5 flex gap-3 justify-center">
              <Button className="bg-[var(--brand-blue)] text-white hover:opacity-90">Iya</Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Tidak
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
