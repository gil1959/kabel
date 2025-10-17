export default function Hero() {
  return (
    <section className="bg-white">
      {/* HERO */}
      <div className="relative overflow-hidden">
        <img
          src="bghero.png"
          alt="Banner"
          loading="lazy"
          className="w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[500px] object-cover object-center"
        />


        <div className="absolute inset-0 z-10">
          <div className="mx-auto h-full max-w-6xl px-4 sm:px-6">
            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              {/* Kiri: Group 402 dibesarkan & ditempel ke bawah */}
              <div className="relative flex items-end">
                <img
                  src="Group 402.png"
                  alt="KABeL"
                  loading="lazy"
                  className="absolute bottom-0 left-0 w-[95%] sm:w-[90%] md:w-[110%] max-w-none object-contain translate-y-2 sm:translate-y-0"
                  style={{ maxHeight: "100%" }}
                />
              </div>

              {/* Kanan: teks kiri (bukan kanan) */}
              <div className="relative flex items-center justify-start md:justify-start ml-20 w-[800px] ">
                <p className="text-white font-bold text-sm sm:text-base md:text-2xl  leading-snug ">
                  SELAMAT DATANG DI SISTEM <br></br>
                  PENDATAAN ALUMNI BERBASIS WEBSITE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GRID BAWAH */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-6 py-6 sm:py-8 md:grid-cols-2 md:py-12">
        <div>
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-slate-900">
            Platform tempat kita kembali terhubung, berbagi inspirasi, dan membuka peluang baru.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Di sini, setiap cerita perjalananmu menjadi bagian dari jaringan yang hidup, saling mendukung, dan terus berkembang.
            Mari bersama kita tumbuhkan semangat kolaborasi, karena masa depan yang kuat dimulai dari koneksi yang hangat.
          </p>
          <a
            href="/login"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 sm:px-5 py-2.5 text-white text-sm sm:text-base shadow hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Masuk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Kanan: 3 petir + teks tengah */}
        <div className="relative flex items-center justify-center"> <img src="Vector 332.png" alt="Petir Halilintar" className="w-20 h-48 md:h-48 object-contain " /> <img src="Vector 332.png" alt="Petir Halilintar" className="w-auto h-48 md:h-64 object-contain " /> <img src="Vector 332.png" alt="Petir Halilintar" className="w-20 h-48 md:h-48 object-contain " /> <h1 className="absolute text-center text-base md:text-2xl font-extrabold uppercase text-black bg-white px-2"> GO HALILINTAR ELEKTRO ! </h1> </div>
      </div>
    </section>
  );
}
