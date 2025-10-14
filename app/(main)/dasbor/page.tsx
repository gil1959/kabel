import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MembersBarChart } from "@/components/charts/members-bar-chart"

const latest = [
  { nama: "Andi Wijaya", angkatan: 2000, pekerjaan: "Wiraswasta", kontak: "0812xxxxxxxx" },
  { nama: "Riko Lubis", angkatan: 1997, pekerjaan: "Usaha/Bisnis", kontak: "0858xxxxxxxx" },
  { nama: "Denny Wu", angkatan: 1992, pekerjaan: "Wiraswasta", kontak: "0821xxxxxxxx" },
]

export default function DasborPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2].map((i) => (
          <Card key={`chart-${i}`} className="shadow-card">
            <CardHeader>
              <CardTitle className="text-sm">Jumlah Anggota Per-Angkatan</CardTitle>
            </CardHeader>
            <CardContent>
              <MembersBarChart />
            </CardContent>
          </Card>
        ))}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Jumlah Anggota</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-semibold text-brand">3.112</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Jumlah Angkatan Aktif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-semibold text-brand">45</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader className="bg-panel rounded-t-xl">
          <CardTitle>Terakhir Terdaftar</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-4">Nama</th>
                <th className="p-4">Angkatan</th>
                <th className="p-4">Pekerjaan</th>
                <th className="p-4">Kontak</th>
              </tr>
            </thead>
            <tbody>
              {latest.map((r) => (
                <tr key={r.nama} className="border-t border-border">
                  <td className="p-4">{r.nama}</td>
                  <td className="p-4">{r.angkatan}</td>
                  <td className="p-4">{r.pekerjaan}</td>
                  <td className="p-4">{r.kontak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  )
}
