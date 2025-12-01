import Link from 'next/link'
import { IconAlertTriangle } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 border-b border-black min-h-[85vh]">
        <div className="border-r border-black p-12 lg:p-24 flex flex-col justify-center bg-white">
          <div className="inline-block self-start px-4 py-2 border border-black text-xs font-bold uppercase tracking-widest mb-8 bg-purple-600 text-white">404 Error</div>
          <h1 className="text-5xl lg:text-8xl font-medium leading-[0.9] tracking-tighter mb-8 uppercase">
            Page<br />
            Not<br />
            Found
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-md leading-relaxed mb-12 font-normal">
            The page you are looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>
          <Link href="/">
            <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors border border-black w-full sm:w-auto">
              Return Home
            </button>
          </Link>
        </div>
        
        <div className="relative bg-gray-50 border-t lg:border-t-0 border-black flex items-center justify-center overflow-hidden p-12">
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <IconAlertTriangle stroke={1} className="w-64 h-64 text-purple-600 opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12rem] font-bold text-black opacity-5 select-none">404</span>
            </div>
        </div>
      </div>
    </main>
  )
}
