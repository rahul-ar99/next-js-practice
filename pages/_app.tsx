import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'


export default function App({ Component, pageProps }: AppProps) {

  console.log("sogeogisajglkdsflk aslkf lsdkf l;sakf lskdfjla;skdf ")
  return <>
         <div>
          <ul>
            <Link href="/"><li>home</li></Link>
            <Link href="/about"><li>about</li></Link>
            <Link href="/blog"><li>blog</li></Link>
            <Link href="/contact"><li>contact</li></Link>
          </ul>
        </div>
  <Component {...pageProps} />
  
  </>
}
