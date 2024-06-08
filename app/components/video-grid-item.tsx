import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import FormatDuration from '../utils/format-duration'
import { FormatTimeAgo } from '../utils/format-time-ago'

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

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: 'compact',
})

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
        <div className='absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded'>
          {FormatDuration(duration)}
        </div>
      </Link>
      <div className='flex gap-2'>
        <Link href={`/watch?v=${channel.id}`} className='flex-shrink-0'>
          <Image
            src={thumbnailUrl}
            alt='Chanel profile'
            className='w-12 h-12 rounded-full'
            width='50'
            height='50'
          />
        </Link>
        <div className='flex flex-col'>
          <Link href={`/watch?v=${channel.id}`} className='font-bold'>
            {title}
          </Link>
          <Link
            href={`/watch?v=${channel.id}`}
            className='text-secondary-text text-sm'
          >
            {channel.name}
          </Link>
          <div className='text-secondary-text text-sm'>
            {VIEW_FORMATTER.format(views)} Views • {FormatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  )
}
