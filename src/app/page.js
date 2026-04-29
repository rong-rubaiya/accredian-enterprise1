import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Clients from '@/components/Clients'
import Edge from '@/components/Edge'
import React from 'react'
import DomainExpertise from '@/components/Domain'

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
      <section id="accredian-edge" className="relative w-full ...">
      <Edge/>
      </section>
      <DomainExpertise/>
    </div>
  )
}
