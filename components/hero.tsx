
export default function hero() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden ">
        <img
          src="frame 281.png"
          alt=""
          className=""
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
            Di sini, setiap cerita perjalananmu menjadi bagian dari jaringan yang hidup, saling mendukung, dan terus berkembang. Mari bersama kita tumbuhkan semangat kolaborasi, karena masa depan yang kuat dimulai dari koneksi yang hangat.
          </p>
          <a
            href="/masuk"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-whe shadow hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            Masuk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right lightning + slogan */}
        <div className="flex flex-col items-center justify-center">
          {/* Lightning SVG */}
          <svg
            viewBox="0 0 256 256"
            className="h-28 w-28"
            aria-hidden="true"
          >
            <path d="M150 12 44 156h64l-8 88 112-160h-64l2-72z" className="fill-yellow-400" />
          </svg>
          <p className="mt-3 text-center text-lg font-semibold uppercase tracking-wide text-slate-900">
            Go Halilintar Elektro!
          </p>
        </div>
      </div>
    </section>
  );
}