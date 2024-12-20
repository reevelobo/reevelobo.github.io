// import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
// import { Testimonials } from '@/components/Testimonials'
// import { Pricing } from '@/components/Pricing'
import { Blog } from '@/components/Blog'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import TechWheel from '@/components/TechStack'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <About />
        <TechWheel />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}