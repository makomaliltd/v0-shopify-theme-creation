'use client'

import { useState } from 'react'
import { Star, Upload, Image as ImageIcon, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'

export function CustomerReviewsSection() {
  const [rating, setRating] = useState(0)

  const existingReviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      review: 'Absolutely love this brush! My skin has never felt so smooth. The back massage feature is a game changer.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-1-16JJXhKJWVt725PFojH51UwDWL9uwa.jpg',
      ],
      verified: true,
    },
    {
      id: 2,
      name: 'Emma Williams',
      rating: 5,
      date: '1 month ago',
      review: 'Best investment for my self-care routine. The different brush heads are perfect for different areas. Highly recommend!',
      images: [],
      verified: true,
    },
    {
      id: 3,
      name: 'Jessica Brown',
      rating: 4,
      date: '3 weeks ago',
      review: 'Great product! Very relaxing and effective. The only thing is I wish the handle was slightly longer.',
      images: [
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-2-VOGRPhR6seW9lpy14LX4cdfcSa052M.jpg',
      ],
      verified: true,
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Customer Reviews
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Real experiences from our MakoCare community
          </p>
        </div>

        {/* Review Form */}
        <div className="mx-auto max-w-3xl mb-16 bg-card rounded-2xl p-8 shadow-sm border border-border">
          <h3 className="font-serif text-2xl font-semibold mb-6">Share Your Experience</h3>
          
          <div className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="transition-colors duration-200"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <Input placeholder="Enter your name" />
            </div>

            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Review</label>
              <Textarea
                placeholder="Share your experience with MakoCare..."
                rows={5}
                className="resize-none"
              />
            </div>

            {/* Photo/Video Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Add Photos or Videos (Optional)</label>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Upload Photos
                </Button>
                <Button variant="outline" className="flex-1">
                  <Video className="w-4 h-4 mr-2" />
                  Upload Video
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Max file size: 10MB. Formats: JPG, PNG, MP4
              </p>
            </div>

            {/* Submit Button */}
            <Button className="w-full" size="lg">
              <Upload className="w-4 h-4 mr-2" />
              Submit Review
            </Button>
          </div>
        </div>

        {/* Existing Reviews */}
        <div className="space-y-6">
          {existingReviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{review.name}</h4>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= review.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">{review.review}</p>

              {review.images.length > 0 && (
                <div className="flex gap-2">
                  {review.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={`Review from ${review.name}`}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
