"use client"

import { useState } from "react"
import { KasLineChart } from "@/components/charts/kas-line-chart"

type Rekap = { deskripsi: string; pemasukan: number; pengeluaran: number }
type Arus = { nama: string; angkatan: number; pemasukan: number; pengeluaran: number; deskripsi: string }

const rekap: Rekap[] = [
  { deskripsi: "Kas", pemasukan: 8_000_000, pengeluaran: 0 },
  { deskripsi: "Sewa tempat reuni", pemasukan: 0, pengeluaran: 10_000_000 },
  { deskripsi: "Produksi merchandise", pemasukan: 0, pengeluaran: 3_000_000 },
  { deskripsi: "Konsumsi dan dekorasi acara", pemasukan: 0, pengeluaran: 3_500_000 },
  { deskripsi: "Donasi acara reuni akbar", pemasukan: 500_000, pengeluaran: 0 },
]

const arusKas: Arus[] = [
  { nama: "Andi Wijaya", angkatan: 2000, pemasukan: 200_000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Riko Lubis", angkatan: 1997, pemasukan: 100_000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Denny Wu", angkatan: 1992, pemasukan: 0, pengeluaran: 1_000_000, deskripsi: "Operasional acara" },
  { nama: "Siti Muayana", angkatan: 2022, pemasukan: 100_000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Riandi Tahendung", angkatan: 2010, pemasukan: 0, pengeluaran: 500_000, deskripsi: "Operasional acara" },
  { nama: "Aldi Renaldi", angkatan: 1995, pemasukan: 150_000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Denada", angkatan: 1985, pemasukan: 50_000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Luhur Wicaksono", angkatan: 1992, pemasukan: 0, pengeluaran: 1_000_000, deskripsi: "Operasional acara" },
  { nama: "Suryo Anggoro", angkatan: 1982, pemasukan: 0, pengeluaran: 2_500_000, deskripsi: "Operasional acara" },
  { nama: "Hermanus Pelealu", angkatan: 2023, pemasukan: 300_000, pengeluaran: 0, deskripsi: "Untuk kas" },
]

const fmt = (n: number) => n.toLocaleString("id-ID")

export default function KeuanganPage() {
  const pemasukanTotal = rekap.reduce((a, b) => a + b.pemasukan, 0)
  const pengeluaranTotal = rekap.reduce((a, b) => a + b.pengeluaran, 0)
  const sisaSaldo = pemasukanTotal - pengeluaranTotal
  const [tab, setTab] = useState<"bulan" | "minggu">("bulan")

  return (
    <section className="bg-[#EAF1FF]">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-8 md:py-10 space-y-5 md:space-y-6">
        <h1 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-tight text-[#0F172A]">
          LAPORAN KEUANGAN
        </h1>
        <div className="rounded-xl overflow-hidden bg-white shadow-[0_6px_22px_rgba(0,0,0,0.06)]">
          <div className="bg-white px-3 md:px-4 py-2.5 md:py-3 text-[12.5px] md:text-[13px] font-medium text-[#0F172A] border-b border-[#E6ECF8]">
            Laporan Keuangan
          </div>
          <div className="p-0">
            <div className="-mx-3 px-3 md:mx-0 md:px-0 overflow-x-auto">
              <table className="w-full min-w-[680px] md:min-w-0 text-[12.5px] md:text-[13px]">
                <thead>
                  <tr className="bg-[#EEF3FF] text-left text-[#111827]">
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Deskripsi</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Pemasukan</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Pengeluaran</th>
                  </tr>
                </thead>
                <tbody>
                  {rekap.map((r) => (
                    <tr key={r.deskripsi} className="bg-white">
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{r.deskripsi}</td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6] text-[#0BA95B]">
                        {r.pemasukan ? fmt(r.pemasukan) : "-"}
                      </td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6] text-[#E24D4D]">
                        {r.pengeluaran ? fmt(r.pengeluaran) : "-"}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-white font-semibold">
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">Jumlah</td>
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{fmt(pemasukanTotal)}</td>
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{fmt(pengeluaranTotal)}</td>
                  </tr>
                  <tr className="bg-white font-semibold">
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">Sisa Saldo</td>
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6] text-[#0BA95B]">
                      {fmt(sisaSaldo)}
                    </td>
                    <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-3 px-3 md:px-4 py-3 text-[11.5px] md:text-[11px] text-[#6B7280] border-t border-[#E6ECF8]">
            <span>Menampilkan 1 sampai 10 dari 200 hasil</span>

            <div className="flex items-center gap-2">
              <span>per halaman</span>
              <select className="border rounded-md px-2 py-1 bg-white outline-none">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>

              <div className="ml-1 md:ml-3 flex items-center">
                {["1", "2", "3", "…", "20"].map((p, i) => (
                  <button
                    key={i}
                    className={
                      "h-7 w-7 grid place-items-center rounded border " +
                      (p === "1"
                        ? "bg-[#EAF1FF] text-[#2F80ED] border-[#CFE0FF]"
                        : "bg-white text-[#6B7280] border-[#E6ECF8]")
                    }
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden bg-white shadow-[0_6px_22px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-between border-b border-[#E6ECF8] px-3 md:px-4 py-2.5">
            <div className="text-[12.5px] md:text-[13px] font-medium text-[#0F172A]">Bulan</div>
            <div className="flex items-center gap-2 text-[12px]">
              <button
                onClick={() => setTab("bulan")}
                className={
                  "px-2 py-1 rounded " +
                  (tab === "bulan" ? "bg-[#EAF1FF] text-[#2F80ED]" : "text-[#6B7280] hover:text-[#2F80ED]")
                }
              >
                Bulan
              </button>
              <button
                onClick={() => setTab("minggu")}
                className={
                  "px-2 py-1 rounded " +
                  (tab === "minggu" ? "bg-[#EAF1FF] text-[#2F80ED]" : "text-[#6B7280] hover:text-[#2F80ED]")
                }
              >
                Minggu
              </button>
            </div>
          </div>

          <div className="px-3 md:px-4 py-4">
            <div className="h-[220px] sm:h-[250px] md:h-[250px] rounded-md border border-[#E6ECF8]">
              <KasLineChart />
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden bg-white shadow-[0_6px_22px_rgba(0,0,0,0.06)]">
          <div className="bg-white px-3 md:px-4 py-2.5 md:py-3 text-[12.5px] md:text-[13px] font-medium text-[#0F172A] border-b border-[#E6ECF8]">
            Arus Kas
          </div>

          <div className="p-0">
            <div className="-mx-3 px-3 md:mx-0 md:px-0 overflow-x-auto">
              <table className="w-full min-w-[760px] md:min-w-0 text-[12.5px] md:text-[13px]">
                <thead>
                  <tr className="bg-[#EEF3FF] text-left">
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Nama</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Angkatan</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Pemasukan</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Pengeluaran</th>
                    <th className="px-4 md:px-5 py-2.5 md:py-3 font-medium border-b border-[#E9EEF6]">Deskripsi</th>
                  </tr>
                </thead>
                <tbody>
                  {arusKas.map((r) => (
                    <tr key={r.nama} className="bg-white">
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{r.nama}</td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{r.angkatan}</td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6] text-[#0BA95B]">
                        {r.pemasukan ? fmt(r.pemasukan) : "-"}
                      </td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6] text-[#E24D4D]">
                        {r.pengeluaran ? fmt(r.pengeluaran) : "-"}
                      </td>
                      <td className="px-4 md:px-5 py-2.5 md:py-3 border-b border-[#E9EEF6]">{r.deskripsi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-3 md:px-4 py-3 text-[11.5px] md:text-[11px] text-[#6B7280] border-t border-[#E6ECF8]">
            <span>Menampilkan 1 sampai 10 dari 200 hasil</span>
            <div className="flex items-center gap-2">
              <span>per halaman</span>
              <select className="border rounded-md px-2 py-1 bg-white outline-none">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>

              <div className="ml-1 md:ml-3 flex items-center">
                {["1", "2", "3", "…", "20"].map((p, i) => (
                  <button
                    key={i}
                    className={
                      "h-7 w-7 grid place-items-center rounded border " +
                      (p === "1"
                        ? "bg-[#EAF1FF] text-[#2F80ED] border-[#CFE0FF]"
                        : "bg-white text-[#6B7280] border-[#E6ECF8]")
                    }
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
