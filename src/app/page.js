import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Clients from '@/components/Clients'
import Edge from '@/components/Edge'
import React from 'react'
import DomainExpertise from '@/components/Domain'
import CourseSegmentation from '@/components/CourseSegmentation'
import WhoShouldJoin from '@/components/WhoShouldJoin'
import CATFramework from '@/components/CAT'
import HowWeDeliver from '@/components/HowWeDeliver'
import FAQSection from '@/components/Faq'
import Testimonials from '@/components/testimonials'
import TrainingCTA from '@/components/TrainingCTA'


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
      <CourseSegmentation/>
      <WhoShouldJoin/>

      <section id="cat" className="relative w-full ...">
     <CATFramework/>
      </section>
      <section id="how-it-works" className="relative w-full ...">
    <HowWeDeliver/>
      </section>

      <section id="faqs" className="relative w-full ...">
        <FAQSection/>
      </section>
      <section id="testimonials" className="relative w-full ...">
        <Testimonials/>
      </section>

      <TrainingCTA/>
      
    </div>
  )
}
