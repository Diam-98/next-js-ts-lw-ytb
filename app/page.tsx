'use client'
import PageHeader from './components/page-header'
import CategoryPills from './components/CategoryPills'
import { categories, videos } from './data/home'
import { useState } from 'react'
import VideoGridItem from './components/video-grid-item'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  return (
    <main className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto'>
        <div>Sidebar</div>
        <div className='overflow-x-hidden px-8 pb-4'>
          <div className='sticky top-0 bg-white z-10 pb-4'>
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
            {videos.map((video) => (
              <VideoGridItem key={video.id} {...video} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
