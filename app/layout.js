import Footer from '../сomponents/Footer'
import Header from '../сomponents/Header'
import ScrollHeader from '@/сomponents/ScrollHeader'
import './globals.scss'

export const metadata = {
  title: 'Mile of Threads',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ScrollHeader /> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
