import Hero from "@/components/hero"
import { NewsSection } from "@/components/news/news-section"
import { ForumSection } from "@/components/forum/forum-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsSection />
      <ForumSection />
    </>
  )
}
