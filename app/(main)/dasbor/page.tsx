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
    <div className="mx-auto max-w-6xl px-3 sm:px-4 py-6 md:py-10 space-y-5 md:space-y-6 flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <Card className="md:col-span-2 rounded-xl border border-[#E6EEFF] shadow-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Jumlah Anggota Per-Angkatan
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <MembersBarChart />
          </CardContent>
        </Card>
        <Card className="rounded-xl border border-[#E6EEFF] shadow-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Jumlah Anggota Per-Daerah
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <MembersBarChart />
          </CardContent>
        </Card>
        <Card className="md:col-span-2 rounded-xl border border-[#E6EEFF] shadow-card">
          <CardHeader className="py-3 px-4">
            <CardTitle className="text-[12px] font-medium text-slate-700">
              Karier & Pekerjaan
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            <MembersBarChart />
          </CardContent>
        </Card>
        <div className="grid gap-4 md:gap-6">
          <Card className="rounded-xl border border-[#E6EEFF] shadow-card">
            <CardHeader className="py-3 px-4">
              <CardTitle className="text-[12px] font-medium text-slate-700">
                Jumlah Anggota
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-6">
              <p className="text-5xl font-semibold text-[#2D6BFF] text-right leading-none">3.112</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border border-[#E6EEFF] shadow-card">
            <CardHeader className="py-3 px-4">
              <CardTitle className="text-[12px] font-medium text-slate-700">
                Jumlah Angkatan Aktif
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 py-6">
              <p className="text-5xl font-semibold text-[#2D6BFF] text-right leading-none">45</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="shadow-card border border-[#E6EEFF] rounded-xl overflow-hidden">
        <div className="bg-[#E9EEFF] px-3 md:px-4 py-2.5 md:py-3 border-b border-[#E6EEFF]">
          <h3 className="text-[12.5px] md:text-[13px] font-medium text-slate-800">Terakhir Terdaftar</h3>
        </div>
        <CardContent className="p-0">
          <div className="-mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto">
            <table className="w-full min-w-[720px] md:min-w-0 table-fixed text-[12.5px] md:text-[13px]">
              <colgroup>
                <col className="w-[40%] md:w-auto" />
                <col className="w-[18%] md:w-auto" />
                <col className="w-[26%] md:w-auto" />
                <col className="w-[16%] md:w-auto" />
              </colgroup>

              <thead>
                <tr className="text-left text-slate-600">
                  <th className="px-3 md:px-4 py-2.5 md:py-3 font-semibold">Nama</th>
                  <th className="px-3 md:px-4 py-2.5 md:py-3 font-semibold">Angkatan</th>
                  <th className="px-3 md:px-4 py-2.5 md:py-3 font-semibold">Pekerjaan</th>
                  <th className="px-3 md:px-4 py-2.5 md:py-3 font-semibold whitespace-nowrap">Kontak</th>
                </tr>
              </thead>

              <tbody>
                {latest.map((r) => (
                  <tr key={r.nama} className="border-t border-[#E9EDF8] hover:bg-[#F7FAFF]">
                    <td className="px-3 md:px-4 py-2.5 md:py-3 truncate">
                      {r.nama}
                    </td>
                    <td className="px-3 md:px-4 py-2.5 md:py-3">
                      {r.angkatan}
                    </td>
                    <td className="px-3 md:px-4 py-2.5 md:py-3 truncate">
                      {r.pekerjaan}
                    </td>
                    <td className="px-3 md:px-4 py-2.5 md:py-3 whitespace-nowrap">
                      {r.kontak}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 px-3 md:px-4 py-3 border-t border-[#E9EDF8] bg-white">
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

              <nav className="ml-1 md:ml-2 flex items-center gap-1">
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
