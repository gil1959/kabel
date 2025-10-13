import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function KartuAlumniPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">Kartu Alumni</h1>
      <div className="flex items-start justify-between gap-6">
        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="shadow-card">
              <CardContent className="p-4">
                <div className="w-[280px] h-[440px] rounded-xl bg-panel border border-panel mx-auto flex items-center justify-center">
                  <span className="text-sm text-foreground/60">Preview {i === 1 ? "Depan" : "Belakang"}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button variant="outline" className="whitespace-nowrap bg-transparent">
          Unduh PDF
        </Button>
      </div>
    </div>
  )
}
