import Footer from './footer'
import Header from './header'
import './globals.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      
      <body>
      {/* <div className='container'> */}

        <Header />
        <div className='content'>
          {children}
        </div>
        <Footer />
      {/* </div> */}
      </body>
    </html>
  )
}
