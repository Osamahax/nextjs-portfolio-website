import Hero from '@/components/views/Hero'
import TransitionEffect from '@/components/views/TransitionEffect'
import Image from 'next/image'

export default function Home() {
  return (
    <main >
      <TransitionEffect />
      <Hero/>
    </main>
  )
}
