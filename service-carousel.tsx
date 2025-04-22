"use client"

import { useState } from "react"
import Image from "next/image"
import { ServicePackage } from "./service-package"

interface ServiceCarouselProps {
  services: {
    title: string
    image: string
    description: string
  }[]
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleServices = 3
  const totalServices = services.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalServices)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalServices) % totalServices)
  }

  // Get the services to display based on current index
  const displayedServices = []
  for (let i = 0; i < visibleServices; i++) {
    const serviceIndex = (currentIndex + i) % totalServices
    displayedServices.push(services[serviceIndex])
  }

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        aria-label="Previous service"
      >
        <Image src="/images/arrow-left.png" alt="Previous" width={40} height={40} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
        {displayedServices.map((service, index) => (
          <ServicePackage
            key={`${service.title}-${index}`}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </div>

      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10" aria-label="Next service">
        <Image src="/images/arrow-right.png" alt="Next" width={40} height={40} />
      </button>
    </div>
  )
}
