import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'
import { HorizontalCard } from './components/HorizontalCard'
import { VerticalCard } from './components/VerticalCard'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <HorizontalCard
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />

            <HorizontalCard 
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />

            <HorizontalCard 
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />

            <HorizontalCard 
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />

            <HorizontalCard 
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />

            <HorizontalCard 
              img={<Image src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title="Wasting Light"
              href=""
            />
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made For Tiago Martins</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
            <VerticalCard 
              img={<Image className="w-full" src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title='Daily 1'
              subtitle='Coin, girl and red more'
            />
            <VerticalCard 
              img={<Image className="w-full" src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title='Daily 1'
              subtitle='Coin, girl and red more'
            />
            <VerticalCard 
              img={<Image className="w-full" src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title='Daily 1'
              subtitle='Coin, girl and red more'
            />
            <VerticalCard 
              img={<Image className="w-full" src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title='Daily 1'
              subtitle='Coin, girl and red more'
            />
            <VerticalCard 
              img={<Image className="w-full" src="/album.jpg" width={104} height={104} alt="Capa"/>}
              title='Daily 1'
              subtitle='Coin, girl and red more'
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
