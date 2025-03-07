import './base.css'
import './custom.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import path from 'path'
import fs from 'fs'

export const metadata = {
  title: 'RimayManta - Salasaka',
  description: 'Ñukuchik pushtu rimarinku.'
}

export default function RootLayout({ children }) {

  const rootDir = process.cwd()
  const pal = path.join(rootDir, 'src', 'index')
  const apl = fs.readdirSync(pal)

  return (
    <html lang="en">
      <body link={apl}>
        <Header root={rootDir} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
