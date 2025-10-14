export default function Hero() {
  return (
    <section className="bg-white">
      {/* Banner background */}
      <div className="relative overflow-hidden">
        <img
          src="frame 281.png"
          alt="Banner"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* CONTENT STRIP UNDER BANNER */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-2 md:py-12">

        {/* Left copy + CTA */}
        <div>
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Platform tempat kita kembali terhubung, berbagi inspirasi, dan membuka peluang baru.
          </h2>
          <p className="mt-3 text-slate-600">
            Di sini, setiap cerita perjalananmu menjadi bagian dari jaringan yang hidup, saling mendukung, dan terus berkembang.
            Mari bersama kita tumbuhkan semangat kolaborasi, karena masa depan yang kuat dimulai dari koneksi yang hangat.
          </p>
          <a
            href="/login"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-white shadow hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Masuk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right lightning + slogan (tulisan di tengah petir) */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Petir */}
          <img
            src="Vector 332.png"
            alt="Petir Halilintar"
            className="h-64 w-auto"
          />

          {/* Teks di tengah petir */}
          <h1 className="absolute text-center text-2xl font-extrabold uppercase text-black bg-white">
            GO HALILINTAR ELEKTRO !
          </h1>
        </div>
      </div>
    </section>
  );
}
