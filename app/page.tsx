import Image from 'next/image'
import PageHeader from './components/page-header'

export default function Home() {
  return (
    <main className='max-h-screen flex flex-col'>
      <PageHeader />
    </main>
  )
}
