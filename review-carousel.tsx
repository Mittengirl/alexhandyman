"use client"

import { useState } from "react"
import Image from "next/image"
import { ReviewCard } from "./review-card"

interface ReviewCarouselProps {
  reviews: {
    name: string
    review: string
  }[]
}

export function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleReviews = 3
  const totalReviews = reviews.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews)
  }

  // Get the reviews to display based on current index
  const displayedReviews = []
  for (let i = 0; i < visibleReviews; i++) {
    const reviewIndex = (currentIndex + i) % totalReviews
    displayedReviews.push(reviews[reviewIndex])
  }

  return (
    <div className="relative">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
        aria-label="Previous review"
      >
        <Image src="/images/arrow-left.png" alt="Previous" width={40} height={40} />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
        {displayedReviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} name={review.name} review={review.review} />
        ))}
      </div>

      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 z-10" aria-label="Next review">
        <Image src="/images/arrow-right.png" alt="Next" width={40} height={40} />
      </button>
    </div>
  )
}
