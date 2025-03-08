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
  
  const filepath = path.join(process.cwd(), 'src', 'menus', 'top-menu.json')
  let menu = []

  if(fs.existsSync(filepath)){
    const fileContent = fs.readFileSync(filepath, 'utf8')
    const data = JSON.parse(fileContent)
    if(data.menu){
      menu = data.menu
    }
  }

  return (
    <html lang="en">
      <body>
        <Header data={menu} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
