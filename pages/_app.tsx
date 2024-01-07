import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'


export default function App({ Component, pageProps }: AppProps) {

  return <>
         <div className='w-screen'>
          <ul className='flex gap-3 text-3xl justify-center w-full items-center'>
            <Link href="/"><li>home</li></Link>
            <Link href="/about"><li>about</li></Link>
            <Link href="/blog"><li>blog</li></Link>
            <Link href="/contact"><li>contact</li></Link>
          </ul>
        </div>
  <Component {...pageProps} />
  
  </>
}
