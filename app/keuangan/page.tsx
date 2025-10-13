import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { KasLineChart } from "@/components/charts/kas-line-chart"

const rekap = [
  { deskripsi: "Kas", pemasukan: 8000000, pengeluaran: 0 },
  { deskripsi: "Sewa tempat reuni", pemasukan: 0, pengeluaran: 10000000 },
  { deskripsi: "Produksi merchandise", pemasukan: 0, pengeluaran: 3000000 },
  { deskripsi: "Donasi acara reuni akbar", pemasukan: 500000, pengeluaran: 0 },
]

const arusKas = [
  { nama: "Andi Wijaya", angkatan: 2000, pemasukan: 200000, pengeluaran: 0, deskripsi: "Untuk kas" },
  { nama: "Denny Wu", angkatan: 1992, pemasukan: 0, pengeluaran: 1000000, deskripsi: "Operasional acara" },
  { nama: "Hermanus Pelealu", angkatan: 2023, pemasukan: 300000, pengeluaran: 0, deskripsi: "Untuk kas" },
]

function currency(n: number) {
  return n.toLocaleString("id-ID")
}

export default function KeuanganPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <h1 className="text-2xl font-semibold">LAPORAN KEUANGAN</h1>

      <Card className="shadow-card">
        <CardHeader className="bg-panel rounded-t-xl">
          <CardTitle>Laporan Keuangan</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-4">Deskripsi</th>
                <th className="p-4">Pemasukan</th>
                <th className="p-4">Pengeluaran</th>
              </tr>
            </thead>
            <tbody>
              {rekap.map((r) => (
                <tr key={r.deskripsi} className="border-t border-border">
                  <td className="p-4">{r.deskripsi}</td>
                  <td className="p-4 text-[oklch(0.62_0.2_150)]">{r.pemasukan ? currency(r.pemasukan) : "-"}</td>
                  <td className="p-4 text-[oklch(0.6_0.2_24)]">{r.pengeluaran ? currency(r.pengeluaran) : "-"}</td>
                </tr>
              ))}
              <tr className="border-t border-border font-medium">
                <td className="p-4">Jumlah</td>
                <td className="p-4">{currency(rekap.reduce((a, b) => a + b.pemasukan, 0))}</td>
                <td className="p-4">{currency(rekap.reduce((a, b) => a + b.pengeluaran, 0))}</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader className="bg-panel rounded-t-xl">
          <CardTitle>Per Bulan</CardTitle>
        </CardHeader>
        <CardContent>
          <KasLineChart />
        </CardContent>
      </Card>

      <Card className="shadow-card">
        <CardHeader className="bg-panel rounded-t-xl">
          <CardTitle>Arus Kas</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-4">Nama</th>
                <th className="p-4">Angkatan</th>
                <th className="p-4">Pemasukan</th>
                <th className="p-4">Pengeluaran</th>
                <th className="p-4">Deskripsi</th>
              </tr>
            </thead>
            <tbody>
              {arusKas.map((r) => (
                <tr key={r.nama} className="border-t border-border">
                  <td className="p-4">{r.nama}</td>
                  <td className="p-4">{r.angkatan}</td>
                  <td className="p-4 text-[oklch(0.62_0.2_150)]">{r.pemasukan ? currency(r.pemasukan) : "-"}</td>
                  <td className="p-4 text-[oklch(0.6_0.2_24)]">{r.pengeluaran ? currency(r.pengeluaran) : "-"}</td>
                  <td className="p-4">{r.deskripsi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
