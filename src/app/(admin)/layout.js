import '@/app/base.css'
import '@/app/(admin)/custom.scss'

export default ({ children }) => {
    return <html lang="en">
        <body>
            {children}
        </body>
    </html>
}