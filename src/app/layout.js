import './base.css'
import './custom.css'

export const metadata = {
  title: 'RimayManta - Salasaka',
  description: 'Ñukuchik pushtu rimarinku.'
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
