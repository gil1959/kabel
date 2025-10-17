"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useAuth } from "../auth-provider"

const sideNews = [
  { img: "/news1.png", title: "Keluarga Alumni Universitas Pancasila (KAUP) Berbagi", excerpt: "Membangun Kebaikan Dari Kampus Sampai ke Masyarakat..." },
  { img: "/news2.png", title: "Alumni Peduli: Donasi Laptop untuk Mahasiswa Kurang Mampu", excerpt: "Komunitas alumni Teknik Elektro UP menginisiasi program..." },
  { img: "/news3.png", title: "Alumni Universitas Pancasila gerakkan kampus antinarkoba", excerpt: "Kami serius dan sangat tegas dalam penyalahgunaan narkoba..." },
]

export default function NewsSection() {
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className="relative bg-[#EAF1FF] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 className="text-[22px] md:text-[24px] font-semibold text-black mb-6">
          BERITA DAN INFORMASI
        </h2>
        {mounted && user && (
          <div className="mb-8">
            <button
              type="button"
              className="w-full text-left flex items-center gap-3 rounded-lg border border-[#D5DADF] bg-white px-4 py-3 text-[15px] text-slate-600 shadow-sm hover:bg-slate-50"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-slate-300 text-slate-600">+</span>
              Tambahkan konten
            </button>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img src="/image 361.png" alt="Sufmi Dasco Ahmad Dikukuhkan" className="w-full aspect-[16/9] object-cover" />
            <div className="mt-5 space-y-3 max-w-[90%]">
              <h3 className="text-[18px] font-semibold text-black leading-[1.35]">
                Sufmi Dasco Ahmad Dikukuhkan jadi Ketua Alumni Universitas Pancasila
              </h3>
              <p className="text-[15px] leading-relaxed text-black/90">
                Pengukuhan ini menandai babak baru dalam perjalanan organisasi alumni Universitas Pancasila…
              </p>
              <Link
                href="#"
                className="inline-flex items-center border border-[#A9C8FF] text-[#2F80ED] hover:bg-[#2F80ED] hover:text-white transition-all duration-200 rounded-md px-5 py-2 text-[14px] font-medium"
              >
                Selengkapnya
                <span className="ml-3 inline-flex w-6 h-6 items-center justify-center rounded-full border border-current text-[14px]">›</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              {sideNews.map((news, i) => (
                <div key={i} className="flex gap-4 items-start border-b border-[#D9D9D9] pb-6 last:border-0">
                  <img src={news.img} alt={news.title} className="w-[132px] h-[88px] object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-[15px] font-semibold text-black leading-snug">{news.title}</h4>
                    <p className="text-[13px] text-black/70 mt-2 leading-snug">{news.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-8 w-full border border-[#D5DADF] text-[#8A8F98] rounded-md py-3 text-[14px] font-semibold tracking-wide uppercase hover:bg-[#F3F4F6] transition"
            >
              Lainnya
            </button>
          </div>
        </div>
      </div>
      <img src="/Vector269.png" alt="" aria-hidden className="pointer-events-none select-none absolute -bottom-px -left-px h-28 w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] -z-0" />
      <img src="/Vector269.png" alt="" aria-hidden className="pointer-events-none select-none absolute -top-px -right-px h-28 w-[260px] sm:w-[320px] md:w-[420px] lg:w-[520px] rotate-180 transform-gpu -z-0" />
    </section>
  )
}
