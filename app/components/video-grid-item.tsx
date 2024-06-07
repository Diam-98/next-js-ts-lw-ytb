import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type VideoGridItemProps = {
  id: string
  title: string
  channel: {
    id: string
    name: string
    profileUrl: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailUrl: string
  videoUrl: string
}

export default function VideoGridItem({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl,
}: VideoGridItemProps) {
  return (
    <div className='flex flex-col gap-2'>
      <Link href={`/watch?v=${id}`} className='relative aspect-video'>
        <Image
          src={thumbnailUrl}
          alt='ytb thumbnail'
          width='300'
          height='150'
          className='block w-full h-full object-cover rounded-xl'
        />
        <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-.5 rounded'>
          {duration}
        </div>
      </Link>
    </div>
  )
}
