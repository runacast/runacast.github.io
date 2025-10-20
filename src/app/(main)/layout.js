import '@/app/base.css'
import '@/app/(main)/custom.scss'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'RimayManta - Salasaka',
  description: 'Ñukuchik pushtu rimarinku.'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
