'use client'
import React, { useState } from 'react'
import Button from './button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type categoryPillProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: categoryPillProps) {
  const [translate, setTransLate] = useState(0)
  const [isLeftVisible, setIsLeftVisible] = useState(true)
  const [isRightVisible, setIsRightVisible] = useState(false)
  return (
    <div className='overflow-x-hidden relative'>
      <div
        className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map((category, index) => (
          <Button
            variant={selectedCategory == category ? 'dark' : 'default'}
            className='py-1 px-3 rounded-lg whitespace-nowrap'
            key={index}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className='absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'>
          <Button
            variant='ghost'
            size='icon'
            className='h-full aspect-square w-auto'
            onClick={() =>
              setTransLate((translate) => {
                const newTranslate = translate - TRANSLATE_AMOUNT
                if (newTranslate <= 0) return 0
                return newTranslate
              })
            }
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'>
          <Button
            variant='ghost'
            size='icon'
            className='h-full aspect-square w-auto'
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}
