// ForumSection.tsx
"use client"

import { useEffect, useState } from "react"
import { useAuth } from "../auth-provider"

type Answer = {
  author: string
  body: string
  avatar: string
  stats: string
}

function AskForm() {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted || !user) return null

  return (
    <div className="mb-6">
      <div className="flex items-center gap-3">
        <img
          src={(user as any)?.avatar || "/stylized-user-avatar.png"}
          alt={user.name}
          className="w-9 h-9 rounded-full object-cover"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex-1"
        >
          <input
            type="text"
            placeholder="Apa yang ingin Anda tanyakan?"
            className="w-full h-12 rounded-lg border border-[#D7DEEA] bg-white px-4 pr-10 text-[15px] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AFC8FF]"
          />

          {/* tombol upload gambar di kanan */}
          <label
            htmlFor="ask-image"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-8 h-8 rounded-md text-[#5B6B8C] hover:bg-slate-100 cursor-pointer"
            title="Unggah gambar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 17l4.5-4.5 3 3L17 10l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
            </svg>
          </label>
          <input id="ask-image" type="file" accept="image/*" className="hidden" />
        </form>
      </div>
    </div>
  )
}

function Question({
  title,
  author,
  stats,
  avatar,
  answers,
  showReplies = true,
}: {
  title: string
  author: string
  stats: string
  avatar: string
  answers: Answer[]
  showReplies?: boolean
}) {
  return (
    <article className="py-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-3xl md:text-4xl font-extrabold text-brand leading-snug">
          {title}
        </h3>
      </div>

      <div className="flex justify-between">
        {/* stats header (tanpa titik, berjarak) */}
        <div className="mt-1">
          <p className="mt-2 flex items-center gap-6 text-xs text-foreground/60">
            {stats.split(/·|\s{2,}/).map((item, i) => (
              <span key={i}>{item.trim()}</span>
            ))}
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <img src={avatar} alt={author} className="w-8 h-8 rounded-full object-cover" />
          <p className="whitespace-nowrap">
            From: <span className="text-[#0041C2] font-bold">{author}</span>
          </p>
        </div>
      </div>

      {/* Bar "Jawaban (x)" */}
      <div className="mt-5">
        <div className="bg-[#E9EEFF] rounded-lg py-2 flex items-center justify-center text-sm text-foreground/70 font-medium">
          <span className="flex items-center gap-1">
            Jawaban ({answers.length})
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* List jawaban */}
      <div className="px-4 py-5 space-y-8">
        {answers.map((a, i) => (
          <div key={i} className={showReplies && i > 0 ? "pl-12" : ""}>
            <div className="flex items-start gap-3">
              <img src={a.avatar} alt={a.author} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <p className="font-semibold text-foreground leading-snug">{a.author}</p>
                <p className="mt-1 text-foreground/80 leading-relaxed">{a.body}</p>

                <div className="mt-2 flex items-center gap-6 text-xs text-foreground/60">
                  {a.stats.split(/·|\s{2,}/).map((item, j) => (
                    <span key={j}>{item.trim()}</span>
                  ))}
                </div>

                {showReplies && i === 0 && (
                  <div className="mt-3 pl-12">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="h-px bg-border w-[90px]" />
                      <button type="button" className="text-foreground/70 hover:text-brand">
                        Lihat Balasan (15)
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* separator gambar */}
      <img
        src="/Frame%20367.png"
        alt=""
        aria-hidden
        className="w-full h-[20px] object-cover mt-6"
      />
    </article>
  )
}

export function ForumSection() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">FORUM ALUMNI</h2>

        {/* Form tanya – hanya muncul saat user login */}
        <AskForm />

        {/* Pertanyaan 1 */}
        <Question
          title="Bagaimana perjalanan karier Anda setelah lulus?"
          author="Naufal Kurnia (Angkatan 2020)"
          avatar="/Mask group.png"
          stats="1 bulan lalu      40 suka      Balas"
          showReplies={true}
          answers={[
            {
              author: "Riandi Tahendung (Angkatan 2015)",
              body:
                "Setelah lulus, saya bekerja di konsultan teknologi, lalu pindah ke industri energi. Sekarang saya memimpin tim riset. Perjalanan penuh tantangan, tapi sangat berharga.",
              avatar: "/Mask group2.png",
              stats: "3 minggu lalu      25 suka      Balas",
            },
            {
              author: "Suryo Anggoro (Angkatan 2012)",
              body:
                "Wihh mantap!! semoga makin banyak alumni yang bisa mengikuti jejak sukses seperti ini.",
              avatar: "/Mask group3.png",
              stats: "3 minggu lalu      1 suka      Balas",
            },
          ]}
        />

        {/* Pertanyaan 2 */}
        <Question
          title="Bagaimana tips menghadapi wawancara kerja agar lebih percaya diri?"
          author="Elsa Tirana (Angkatan 2024)"
          avatar="/Mask group4.png"
          stats="2 bulan lalu      18 suka      Balas"
          showReplies={false}
          answers={[
            {
              author: "Haposan Fernando (Angkatan 2013)",
              body:
                "Usahakan belajar untuk selalu riset dulu tentang perusahaan dan menyiapkan jawaban untuk pertanyaan umum. Saya juga latihan simulasi dengan teman. Hasilnya, jauh lebih tenang dan bisa ngobrol lebih natural dengan pewawancara. Jadi menurut saya, kuncinya ada di persiapan dan latihan. Begitu sudah siap, rasa percaya diri otomatis ikut naik.",
              avatar: "/Mask group5.png",
              stats: "1 bulan lalu      10 suka      Balas",
            },
          ]}
        />

        {/* List pertanyaan singkat */}
        <div className="mt-10 space-y-3">
          <p className="text-sm font-medium">Pertanyaan</p>
          {[
            "Kira-kira kegiatan apa yang seru untuk gathering alumni tahun depan?",
            "Siapa di sini yang masih rutin main futsal bareng alumni?",
            "Lebih baik memilih bekerja di perusahaan besar atau startup? Kenapa?",
          ].map((q) => (
            <div
              key={q}
              className="flex font-bold items-center justify-between border-b border-border py-3 hover:bg-muted/10 transition-colors cursor-pointer"
            >
              <span className="text-brand hover:underline text-base">{q}</span>
              <span className="text-xl text-foreground/50">›</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
