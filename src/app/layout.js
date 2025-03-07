import './base.css'
import './custom.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import path from 'path'

export const metadata = {
  title: 'RimayManta - Salasaka',
  description: 'Ñukuchik pushtu rimarinku.'
}

export default function RootLayout({ children }) {

  const rootDir = process.cwd()

  return (
    <html lang="en">
      <body>
        <Header root={rootDir} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
