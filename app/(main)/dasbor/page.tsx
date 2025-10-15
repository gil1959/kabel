import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MembersBarChart } from "@/components/charts/members-bar-chart"

const latest = [
  { nama: "Andi Wijaya", angkatan: 2000, pekerjaan: "Wiraswasta", kontak: "0812xxxxxxxx" },
  { nama: "Riko Lubis", angkatan: 1997, pekerjaan: "Usaha/Bisnis", kontak: "0858xxxxxxxx" },
  { nama: "Denny Wu", angkatan: 1992, pekerjaan: "Wiraswasta", kontak: "0821xxxxxxxx" },
  { nama: "Siti Musyawa", angkatan: 2022, pekerjaan: "Wiraswasta", kontak: "0895xxxxxxxx" },
  { nama: "Riandi Tahendung", angkatan: 2010, pekerjaan: "Freelancer", kontak: "0857xxxxxxxx" },
  { nama: "Akiel Renardi", angkatan: 1995, pekerjaan: "Wiraswasta", kontak: "0813xxxxxxxx" },
  { nama: "Deandra", angkatan: 1995, pekerjaan: "Wiraswasta", kontak: "0812xxxxxxxx" },
  { nama: "Luhur Wicaksono", angkatan: 1992, pekerjaan: "Usaha/Bisnis", kontak: "0822xxxxxxxx" },
  { nama: "Suryo Anggoro", angkatan: 1990, pekerjaan: "Usaha/Bisnis", kontak: "0812xxxxxxxx" },
  { nama: "Hermanus Pukaku", angkatan: 2023, pekerjaan: "Freelancer", kontak: "0857xxxxxxxx" },
]

export default function DasborPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:py-10 space-y-6">
      {/* ROW 1: 2 charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="shadow-card border border-[#E6EEFF] rounded-xl">
          <CardHeader className="py-3">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Jumlah Anggota Per-Angkatan
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-5">
            <MembersBarChart />
          </CardContent>
        </Card>

        <Card className="shadow-card border border-[#E6EEFF] rounded-xl">
          <CardHeader className="py-3">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Jumlah Anggota Per-Daerah
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-5">
            <MembersBarChart />
          </CardContent>
        </Card>
      </div>

      {/* ROW 2: big chart (span-2) + stats (stacked) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="md:col-span-2 shadow-card border border-[#E6EEFF] rounded-xl">
          <CardHeader className="py-3">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Karier & Pekerjaan
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-5">
            <MembersBarChart />
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="shadow-card border border-[#E6EEFF] rounded-xl">
            <CardHeader className="py-3">
              <CardTitle className="text-[12px] font-medium text-slate-700">
                Jumlah Anggota
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="text-5xl font-semibold text-[#2D6BFF] leading-none text-right">3.112</p>
            </CardContent>
          </Card>

          <Card className="shadow-card border border-[#E6EEFF] rounded-xl">
            <CardHeader className="py-3">
              <CardTitle className="text-[12px] font-medium text-slate-700">
                Jumlah Angkatan Aktif
              </CardTitle>
            </CardHeader>
            <CardContent className="py-6">
              <p className="text-5xl font-semibold text-[#2D6BFF] leading-none text-right">45</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* TABLE */}
      <Card className="shadow-card border border-[#E6EEFF] rounded-xl overflow-hidden">
        <div className="bg-[#E9EEFF] px-4 py-3 border-b border-[#E6EEFF]">
          <h3 className="text-[13px] font-medium text-slate-800">Terakhir Terdaftar</h3>
        </div>
        <CardContent className="p-0">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-left text-slate-600">
                <th className="px-4 py-3 font-semibold">Nama</th>
                <th className="px-4 py-3 font-semibold">Angkatan</th>
                <th className="px-4 py-3 font-semibold">Pekerjaan</th>
                <th className="px-4 py-3 font-semibold">Kontak</th>
              </tr>
            </thead>
            <tbody>
              {latest.map((r, i) => (
                <tr key={r.nama} className="border-t border-[#E9EDF8] hover:bg-[#F7FAFF]">
                  <td className="px-4 py-3">{r.nama}</td>
                  <td className="px-4 py-3">{r.angkatan}</td>
                  <td className="px-4 py-3">{r.pekerjaan}</td>
                  <td className="px-4 py-3">{r.kontak}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* table footer / pagination bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-[#E9EDF8] bg-white">
            <p className="text-[12px] text-slate-500">
              Menampilkan 10 entri • Data fiktif
            </p>

            <div className="flex items-center gap-2">
              <label className="text-[12px] text-slate-600">per halaman</label>
              <select className="h-8 rounded border border-[#DDE6FF] bg-white px-2 text-[12px]">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>

              <nav className="ml-2 flex items-center gap-1">
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px] px-2">‹</button>
                <button className="h-8 min-w-8 rounded border border-[#2D6BFF] bg-[#2D6BFF] text-white text-[12px]">1</button>
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px]">2</button>
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px]">3</button>
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px]">…</button>
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px]">30</button>
                <button className="h-8 min-w-8 rounded border border-[#DDE6FF] text-[12px]">›</button>
              </nav>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
