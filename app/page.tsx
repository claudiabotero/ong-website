import { Hero } from '@/components/Hero'
import { Mission } from '@/components/Mission'
import { Projects } from '@/components/Projects'
import { Impact } from '@/components/Impact'
import { Gallery } from '@/components/Gallery'
import { Newsletter } from '@/components/Newsletter'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Mission />
      <Projects />
      <Impact />
      <Gallery />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  )
}
