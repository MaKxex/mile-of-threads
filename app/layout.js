import Footer from '../сomponents/Footer'
import Header from '../сomponents/Header'
import './globals.scss'

export const metadata = {
  title: 'mile of Threads',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
