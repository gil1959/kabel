export default function Hero() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden">
        <img
          src="bghero.png"
          alt="Banner"
          className="w-full object-cover h-[340px] md:h-[500px]"
        />

        <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 mt-8 md:mt-16 px-4">
          <img
            src="Group 402.png"
            alt="Banner"
            className="w-10/12 md:w-1/2 object-contain mb-2 md:mb-0"
          />
          <p className="text-white text-lg md:text-2xl font-bold text-center md:text-left">
            SELAMAT DATANG DI SISTEM <br className="hidden md:block" />
            PENDATAAN ALUMNI BERBASIS WEBSITE
          </p>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 py-8 md:grid-cols-2 md:py-12">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold text-slate-900">
            Platform tempat kita kembali terhubung, berbagi inspirasi, dan membuka peluang baru.
          </h2>
          <p className="mt-3 text-slate-600 text-sm md:text-base">
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

        <div className="relative flex  items-center justify-center">

          <img
            src="Vector 332.png"
            alt="Petir Halilintar"
            className="w-20 h-48 md:h-48 object-contain "
          />
          <img
            src="Vector 332.png"
            alt="Petir Halilintar"
            className="w-auto h-48 md:h-64 object-contain "
          />
          <img
            src="Vector 332.png"
            alt="Petir Halilintar"
            className="w-20 h-48 md:h-48 object-contain "
          />

          <h1 className="absolute text-center text-base md:text-2xl font-extrabold uppercase text-black bg-white px-2">
            GO HALILINTAR ELEKTRO !
          </h1>
        </div>
      </div>
    </section>
  );
}
