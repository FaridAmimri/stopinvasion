/** @format */

import { Link } from 'react-router-dom'
import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'

const Hero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className='h-[calc(100vh-6rem)] flex flex-col p-8 pt-0 gap-6 lg:flex-row md:gap-10 md:h-[calc(100vh-7rem)]'>
      <div className='flex-1 flex flex-col justify-between md:justify-around'>
        <h2 className='text-4xl font-extrabold leading-normal md:text-7xl'>
          Meet The Best Cleaning Services
        </h2>
        <span className='text-lg text-gray-400 font-semibold my-6 md:w-2/3 2xl:text-3xl'>
          Chaque service que nous offrons rendra votre domicile plus propre et
          plus sain
        </span>
        <div className='flex justify-between text-lg md:w-2/3'>
          <button className='w-30 bg-yellow-500 rounded p-2 px-6 text-white md:w-40'>
            <a href='#booking'>Estimation</a>
          </button>

          <button className='w-30 border-sky-500 border-2 rounded p-2 px-6 text-sky-500 md:w-40'>
            <Link to='/contact'>Contacter</Link>
          </button>
        </div>
      </div>

      <div className='flex-1 overflow-hidden flex items-center justify-center'>
        <Carousel
          plugins={[plugin.current]}
          className='w-full max-w-xs'
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Card>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Hero
