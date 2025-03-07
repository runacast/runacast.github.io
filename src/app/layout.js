import './base.css'
import './custom.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { fileURLToPath } from 'url'
import path from 'path'

export const metadata = {
  title: 'RimayManta - Salasaka',
  description: 'Ñukuchik pushtu rimarinku.'
}

export default function RootLayout({ children }) {

  const rootDir = path.dirname(fileURLToPath(import.meta.url))

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
