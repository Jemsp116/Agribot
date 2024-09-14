"use client"
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { carouselItems } from '@/data/carousel'
import Image from 'next/image'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Autoplay from 'embla-carousel-autoplay'
import { ArrowLeft01Icon, ArrowRight01Icon } from './icons'
import { DotButton, useDotButton } from '@/components/EmblaDotButton'
import Link from 'next/link'

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla w-full h-[80vh] md:h-screen flex justify-center">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {carouselItems.map((item, index) => (
            <div key={index} className="embla__slide flex justify-center items-center relative">
              <Image
                width={1080}
                height={1080}
                src={item.img}
                alt='carousel-img'
                className='w-screen h-[80vh] md:h-screen object-cover'
              />
              <div className="overlay absolute w-full z-30 top-0 h-full bg-[#00000030]"><p className='text-xs italic z-50 absolute bottom-1 right-2 text-white font-light'>© Arvind Karthik</p></div>
              <div className="content flex flex-col justify-center items-center text-white z-50 absolute mx-auto  md:left-[25%] max-w-[90vw] md:w-[50%]">
                <motion.h1
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  initial={{ y: 80, opacity: 0, scale: .9 }}
                  transition={{ duration: .6, delay: .2 }}
                  className="font-bold text-3xl md:text-5xl text-secondary mb-2 md:mb-6">
                  {item.title}
                </motion.h1>
                <motion.p
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  initial={{ y: 80, opacity: 0, scale: .9 }}
                  transition={{ duration: .6, delay: .4 }}
                  className='mb-8 text-sm md:text-xl font-semibold text-[#eee]'>
                  {item.description}
                </motion.p>
                {item.btn1 && <motion.div
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  initial={{ y: 80, opacity: 0, scale: .9 }}
                  transition={{ duration: .8, delay: .6 }}
                  className='flex gap-4'>
                  <Link href={item?.href1}>
                    <Button
                      className='font-semibold tracking-widest'
                      variant='solid'
                      color='primary'
                      radius='none'
                    >
                      {item.btn1}
                    </Button>
                  </Link>
                  {item?.btn2 && <Link href={item.href2}>
                    <Button
                      className='font-semibold tracking-widest text-white'
                      variant='bordered'
                      color='primary'
                      radius='none'>
                      {item.btn2}
                    </Button>
                  </Link>}
                </motion.div>}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev absolute hidden md:block rounded-full p-4 bg-[#000c] top-[50%] left-5" onClick={scrollPrev}>
        <ArrowLeft01Icon />
      </button>
      <button className="embla__next absolute hidden md:block rounded-full p-4 bg-[#00000070] top-[50%] right-5" onClick={scrollNext}>
        <ArrowRight01Icon />
      </button>

      <div className="embla__controls absolute -bottom-6 md:-bottom-16">
        <div className="embla__dots z-50  flex gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;
