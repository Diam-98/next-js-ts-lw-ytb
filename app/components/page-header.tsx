'use client'

import {
  ArrowLeft,
  Bell,
  MenuIcon,
  Mic,
  Search,
  Upload,
  User,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './button'

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className='flex gap-10 lg:gap-20 justify-between  pt-2 mb-6 mx-4'>
      <div
        className={`flex items-center gap-4 flex-shrink-0 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button variant='ghost' size='icon'>
          <MenuIcon />
        </Button>
        <Link href='/123'>
          <Image src='/Logo.png' alt='logo' width='100' height='100' />
        </Link>
      </div>
      <form
        className={`md:flex gap-4 flex-grow justify-center ${
          showFullWidthSearch ? 'flex' : 'hidden'
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type='button'
            size='icon'
            variant='ghost'
            className='flex-shrink-0'
          >
            <ArrowLeft />
          </Button>
        )}

        <div className='flex flex-grow max-w-[600px]'>
          <input
            type='search'
            placeholder='Rechercher'
            className='rounded-l-full border border-secondary shadow-inner py-1 px-4 text-lg w-full outline-none shadow-secondary focus:border-blue-500'
          />
          <Button className='py-2 px-4 rounded-r-full border border-secondary border-l-0 flex-shrink-0'>
            <Search />
          </Button>
        </div>
        <Button variant='ghost' size='icon' className='flex-shrink-0'>
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? 'hidden' : 'flex'
        }`}
      >
        <Button
          variant='ghost'
          size='icon'
          className='md:hidden'
          onClick={() => setShowFullWidthSearch(true)}
        >
          <Search />
        </Button>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <Mic />
        </Button>
        <Button variant='ghost' size='icon'>
          <Upload />
        </Button>
        <Button variant='ghost' size='icon'>
          <Bell />
        </Button>
        <Button variant='ghost' size='icon'>
          <User />
        </Button>
      </div>
    </div>
  )
}
