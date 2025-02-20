'use client'

import { cn } from '@/lib/utils'

interface Author {
  name: string
  handle: string
  imageUrl: string
  logoUrl?: string
}

interface Testimonial {
  body: string
  author: Author
}

const featuredTestimonial: Testimonial = {
  body: 'The games from No Loafing are absolutely amazing! The attention to detail and creativity in each game is outstanding.',
  author: {
    name: 'Brenna Goyette',
    handle: 'brennagoyette',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80',
  },
}

const testimonials: Testimonial[][][] = [
  [
    [
      {
        body: 'No Loafing has created some of the most engaging Roblox experiences I\'ve ever played. Their games are truly next level!',
        author: {
          name: 'Leslie Alexander',
          handle: 'lesliealexander',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'The community support and constant updates make every No Loafing game a fresh and exciting experience.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80',
        },
      },
    ],
  ],
  [
    [
      {
        body: 'As a long-time Roblox player, I\'m impressed by the innovation and quality in every No Loafing release.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80',
        },
      },
    ],
    [
      {
        body: 'The attention to player feedback and continuous improvements show how much No Loafing cares about their community.',
        author: {
          name: 'Leonard Krasner',
          handle: 'leonardkrasner',
          imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80',
        },
      },
    ],
  ],
]

export function TestimonialsSection() {
  return (
    <div id="testimonials" className="relative bg-gray-900 pb-32 pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold text-[#3498db]">Testimonials</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            What Our Players Say
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm text-gray-200 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* Featured testimonial */}
          <figure className="rounded-2xl bg-gray-800/50 shadow-lg ring-1 ring-white/5 backdrop-blur-sm sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-white sm:p-12 sm:text-xl">
              <p>{`"${featuredTestimonial.body}"`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-white/10 px-6 py-4 sm:flex-nowrap">
              <img
                src={featuredTestimonial.author.imageUrl}
                alt=""
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold text-white">{featuredTestimonial.author.name}</div>
                <div className="text-gray-400">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>

          {/* Other testimonials */}
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={cn(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8'
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-gray-800/50 p-6 shadow-lg ring-1 ring-white/5 backdrop-blur-sm"
                    >
                      <blockquote className="text-white">
                        <p>{`"${testimonial.body}"`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img
                          src={testimonial.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div>
                          <div className="font-semibold text-white">{testimonial.author.name}</div>
                          <div className="text-gray-400">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}