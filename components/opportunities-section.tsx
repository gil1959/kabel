"use client";

export default function OpportunitiesSection() {
    return (
        <section className=" py-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl bg-[#EAF1FF] border border-[#E6ECF5] shadow-[0_8px_22px_rgba(0,0,0,0.06)] p-6 text-center">
                        <div className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-[#E9F1FF]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#518CFF]">
                                <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="1.8" />
                                <rect x="3" y="7" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-[#1C3C64]">Lowongan Kerja</h3>
                        <p className="mt-2 text-[13px] leading-snug text-slate-600">
                            Alumni dapat mencari dan membagikan peluang kerja sesuai bidang dan pengalaman.
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#EAF1FF] border border-[#E6ECF5] shadow-[0_8px_22px_rgba(0,0,0,0.06)] p-6 text-center">
                        <div className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-[#E9F1FF]">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#518CFF]">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" />
                                <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M20 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" />
                                <path d="M17.5 3.5A3.5 3.5 0 0 1 21 7" stroke="currentColor" strokeWidth="1.8" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-[#1C3C64]">Lowongan Magang</h3>
                        <p className="mt-2 text-[13px] leading-snug text-slate-600">
                            Alumni dan mahasiswa dapat mencari serta membagikan peluang magang sesuai bidang dan minat.
                        </p>
                    </div>

                    <div className="rounded-xl bg-[#EAF1FF] border border-[#E6ECF5] shadow-[0_8px_22px_rgba(0,0,0,0.06)] p-6 text-center">
                        <div className="mx-auto mb-4 grid place-items-center h-14 w-14 rounded-full bg-[#E9F1FF]">

                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#518CFF]">
                                <path d="M12 17l-3.5 2 1-3.9L6 11.5l4.1-.35L12 7.5l1.9 3.65 4.1.35-3.5 3.6 1 3.9L12 17z"
                                    stroke="currentColor" strokeWidth="1.8" fill="none" />
                            </svg>
                        </div>
                        <h3 className="font-semibold text-[#1C3C64]">Pelatihan dan Sertifikasi</h3>
                        <p className="mt-2 text-[13px] leading-snug text-slate-600">
                            Program pelatihan dan sertifikasi untuk meningkatkan keterampilan serta kompetensi profesional alumni.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}