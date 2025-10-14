import Hero from "@/components/hero"
import NewsSection from "@/components/news/NewsSection"
import { ForumSection } from "@/components/forum/forum-section"

export default function HomePage() {
  return (
    <>
      <section id="beranda" className="scroll-mt-16">
        <Hero />
      </section>

      <section id="berita" className="scroll-mt-16">
        <NewsSection />
      </section>

      <section id="forum" className="scroll-mt-16">
        <ForumSection />
      </section>
    </>
  )
}
