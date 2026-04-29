import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Clients from '@/components/Clients'
import React from 'react'

export default function page() {
  return (
    <div>
      <section id="home" className="relative w-full ...">
      <Hero/>
      </section>
      <section id="stats" className="relative w-full ...">
      <Stats/>
      </section>
      <section id="clients" className="relative w-full ...">
      <Clients/>
      </section>
    </div>
  )
}
