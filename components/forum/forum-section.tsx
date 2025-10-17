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
          className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
        />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex-1 min-w-0"
        >
          <input
            type="text"
            placeholder="Apa yang ingin Anda tanyakan?"
            className="w-full h-11 rounded-lg border border-[#D7DEEA] bg-white px-3 pr-10 text-[15px] placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AFC8FF] sm:h-12 sm:px-4"
          />
          <label
            htmlFor="ask-image"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center h-8 w-8 rounded-md text-[#5B6B8C] hover:bg-slate-100 cursor-pointer"
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
    <article className="py-8 sm:py-10">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-2xl font-extrabold leading-snug text-brand sm:text-3xl md:text-4xl">
          {title}
        </h3>
      </div>
      <div className="mt-3 flex flex-col-reverse items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="mt-1 w-full sm:w-auto">
          <p className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-foreground/60 sm:text-[13px]">
            {stats.split(/·|\s{2,}/).map((item, i) => (
              <span key={i}>{item.trim()}</span>
            ))}
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <img src={avatar} alt={author} className="h-8 w-8 rounded-full object-cover sm:h-9 sm:w-9" />
          <p className="whitespace-nowrap text-[13px] sm:text-sm">
            From: <span className="font-bold text-[#0041C2]">{author}</span>
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center justify-center rounded-lg bg-[#E9EEFF] py-2 text-xs font-medium text-foreground/70 sm:text-sm">
          <span className="flex items-center gap-1">
            Jawaban ({answers.length})
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="space-y-6 px-1 py-5 sm:space-y-8 sm:px-2">
        {answers.map((a, i) => (
          <div key={i} className={showReplies && i > 0 ? "md:pl-12" : ""}>
            <div className="flex items-start gap-3">
              <img src={a.avatar} alt={a.author} className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11" />
              <div className="flex-1 min-w-0">
                <p className="leading-snug font-semibold text-foreground text-sm sm:text-[15px]">{a.author}</p>
                <p className="mt-1 leading-relaxed text-foreground/80 text-[13.5px] sm:text-sm">
                  {a.body}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-xs text-foreground/60">
                  {a.stats.split(/·|\s{2,}/).map((item, j) => (
                    <span key={j}>{item.trim()}</span>
                  ))}
                </div>

                {showReplies && i === 0 && (
                  <div className="mt-3 md:pl-12">
                    <div className="flex items-center gap-3 text-[13px] sm:text-sm">
                      <span className="h-px w-[60px] bg-border sm:w-[90px]" />
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
      <img
        src="/Frame%20367.png"
        alt=""
        aria-hidden
        className="mt-6 h-4 w-full object-cover"
      />
    </article>
  )
}

export function ForumSection() {
  return (
    <section className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-6">
        <h2 className="mb-6 text-lg font-semibold sm:text-xl md:text-2xl">FORUM ALUMNI</h2>
        <AskForm />
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
        <div className="mt-10 space-y-3">
          <p className="text-sm font-medium">Pertanyaan</p>
          {[
            "Kira-kira kegiatan apa yang seru untuk gathering alumni tahun depan?",
            "Siapa di sini yang masih rutin main futsal bareng alumni?",
            "Lebih baik memilih bekerja di perusahaan besar atau startup? Kenapa?",
          ].map((q) => (
            <div
              key={q}
              className="flex cursor-pointer items-center justify-between border-b border-border py-3 font-bold transition-colors hover:bg-muted/10"
            >
              <span className="text-base text-brand hover:underline">{q}</span>
              <span className="text-xl text-foreground/50">›</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
