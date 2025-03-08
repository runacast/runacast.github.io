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
  
  const filepath = path.join(process.cwd(), 'src', 'menus', 'top-menu.json')

  return (
    <html lang="en">
      <body>
        <Header path={filepath} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
