"use client"

import { Button } from "@/components/ui/button"

export default function KartuAlumniPage() {
  return (
    <section className="relative bg-[#EAF1FF]">
      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -bottom-px -left-px z-10 h-28 w-[520px] hidden md:block"
      />
      <img
        src="/Vector269.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-px -right-px z-10 h-28 w-[520px] rotate-180 transform-gpu hidden md:block"
      />
      <div className="relative min-h-screen w-full overflow-hidden justify-center bg-[#EAF2FF] flex flex-col gap-24">
        <div className="flex items-center ml-36 gap-4 sm:ml-0">
          <h1 className="text-[22px] md:text-2xl font-semibold text-[#0F172A]">Kartu Alumni</h1>
        </div>
        <div className=" flex flex-wrap items-start gap-10 justify-center ">
          <div className="rounded-xl">
            <div
              className="
     relative w-[250px] sm:w-[260px] md:w-[280px] aspect-[7/11] 
                rounded-[14px] overflow-hidden bg-transparent  shadow
    "
            >
              <img
                src="/bg1.jpg"
                alt="Background kartu depan"
                className="absolute -inset-[3px]             
                  w-[calc(100%+6px)] h-[calc(100%+6px)]
                  object-cover block select-none
                  transform-gpu will-change-transform scale-[1.01]"
                draggable={false}
              />

              <div className="relative h-full flex flex-col justify-center gap-5">
                <div className="flex items-center gap-10 justify-center">
                  <img src="/logo2.png" alt="" className="h-6 w-auto object-contain" />
                  <img src="/logo1.png" alt="" className="h-8 w-auto object-contain" />
                </div>

                <div className="mt-3 mx-auto w-[120px] h-[150px] rounded-md overflow-hidden bg-white/70 border border-white/70 shadow-sm">
                  <img src="/pp.png" alt="Foto" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-">
                  <p className="mt-3 text-[14px] font-semibold text-[#4577D8] text-center">
                    Randy Dwi Pranaputra, ST, MM
                  </p>

                  <div className=" flex items-end justify-center gap-5 p-3">
                    <div className="text-[9px] leading-[1.1] text-[#4577D8]  px-1.5 py-1 rounded">
                      <p>ANGKATAN 2025</p>
                      <p>UNIVERSITAS PANCASILA</p>
                    </div>
                    <div className="w-[70px] h-[70px]  rounded-[6px] grid place-items-center shadow-sm">
                      <img src="/qrcode.png" alt="QR" className="w-20 h-28 object-contain" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="rounded-xl">
            <div
              className="
                relative w-[250px] sm:w-[260px] md:w-[280px] aspect-[7/11]
                rounded-[14px] overflow-hidden
                bg-transparent
                shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                "
            >
              <img
                src="/bg2.jpg"
                alt="Background kartu belakang"
                className="absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)]
             object-cover block transform-gpu will-change-transform scale-[1.01]"
                draggable={false}
              />
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            className="bg-white border-[#BDD4FF] text-[#2F80ED] hover:bg-[#2F80ED] hover:text-white gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Unduh PDF
          </Button>
        </div>
      </div>
    </section>
  )
}
