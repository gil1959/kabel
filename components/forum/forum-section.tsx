function Question({
  title,
  author,
  stats,
  answers,
}: {
  title: string
  author: string
  stats: string
  answers: Array<{ author: string; body: string }>
}) {
  return (
    <article className="py-8 border-b border-border">
      <h3 className="text-2xl font-semibold text-brand">{title}</h3>
      <p className="mt-2 text-sm text-foreground/70">From: {author}</p>

      <div className="mt-4 rounded-md border border-panel">
        <div className="px-4 py-2 text-sm text-foreground/70 flex items-center justify-between">
          <span>Jawaban ({answers.length})</span>
        </div>
        <div className="px-4 py-4 space-y-6">
          {answers.map((a, i) => (
            <div key={i} className="text-sm leading-relaxed">
              <p className="font-medium">{a.author}</p>
              <p className="text-foreground/80">{a.body}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-2 text-xs text-foreground/60">{stats}</p>
    </article>
  )
}

export function ForumSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">FORUM ALUMNI</h2>

        <Question
          title="Bagaimana perjalanan karier Anda setelah lulus?"
          author="Naufal Kurnia (Angkatan 2020)"
          stats="1 bulan lalu · 40 suka · Balas"
          answers={[
            {
              author: "Riandi Tahendung (Angkatan 2015)",
              body: "Setelah lulus, saya bekerja di konsultan teknologi, lalu pindah ke industri energi. Sekarang memimpin tim riset.",
            },
            {
              author: "Suryo Anggoro (Angkatan 2012)",
              body: "Wih mantap! Semoga makin banyak alumni yang terinspirasi.",
            },
          ]}
        />

        <Question
          title="Bagaimana tips menghadapi wawancara kerja agar lebih percaya diri?"
          author="Elsa Tirana (Angkatan 2024)"
          stats="2 bulan lalu · 18 suka · Balas"
          answers={[
            {
              author: "Haposan Fernando (Angkatan 2013)",
              body: "Riset perusahaan & latihan simulasi dengan teman. Persiapan yang baik membuat jawab lebih natural dan tenang.",
            },
          ]}
        />

        <div className="mt-8 space-y-3">
          <p className="text-sm font-medium">Pertanyaan</p>
          {[
            "Kira-kira kegiatan apa yang seru untuk gathering alumni tahun depan?",
            "Siapa di sini yang masih rutin main futsal bareng alumni?",
            "Lebih baik berkarier di perusahaan besar atau startup? Kenapa?",
          ].map((q) => (
            <div key={q} className="flex items-center justify-between border-b border-border py-3">
              <span className="text-brand hover:underline">{q}</span>
              <span aria-hidden>›</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
