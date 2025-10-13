import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sideNews = [
  {
    title: "Keluarga Alumni Universitas Pancasila (KAUP) Berbagi",
    excerpt: "Membangun Kebaikan Dari Kampus Sampai ke Masyarakat...",
  },
  { title: "Alumni Peduli: Donasi Laptop", excerpt: "Komunitas alumni Teknik Elektro UP menginisiasi program..." },
  {
    title: "Alumni UP gerakkan kampus antinarkoba",
    excerpt: "Kami serius dan sangat tegas dalam penyalahgunaan narkoba...",
  },
]

export function NewsSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">BERITA DAN INFORMASI</h2>

        <div className="rounded-xl bg-panel p-4 md:p-6">
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8">
            <Card className="shadow-card">
              <CardContent className="p-4 md:p-6">
                <img
                  src="/alumni-event-photo.jpg"
                  alt="Berita utama"
                  className="w-full rounded-lg object-cover mb-4"
                />
                <h3 className="text-lg md:text-xl font-semibold">
                  Sufmi Dasco Ahmad Dikukuhkan jadi Ketua Alumni Universitas Pancasila
                </h3>
                <p className="mt-2 text-foreground/80 leading-relaxed">
                  Pengukuhan ini menandai babak baru dalam perjalanan organisasi alumni Universitas Pancasila yang
                  diharapkan dapat memperkuat peran alumni dalam pembangunan bangsa.
                </p>
                <Button asChild variant="outline" className="mt-4 bg-transparent">
                  <Link href="#">Selengkapnya</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {sideNews.map((n, i) => (
                <Card key={i} className="shadow-card">
                  <CardHeader className="p-4">
                    <CardTitle className="text-base">{n.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4 px-4 text-foreground/80">{n.excerpt}</CardContent>
                </Card>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                LAINNYA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
