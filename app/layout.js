import Footer from '../сomponents/Footer'
import Header from '../сomponents/Header'
import ScrollHeader from '@/сomponents/ScrollHeader'
import './globals.scss'
import Head from 'next/head'



export const metadata = {
  title: 'mile of Threads',
  description: '',
}






export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <script src="../scrollFunction.js" defer></script>
      </Head>

      <body>
        <ScrollHeader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
