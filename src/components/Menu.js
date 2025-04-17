import fs from 'fs'
import path from 'path'

export default function Menu(){

  const dipath = path.join(process.cwd(), 'menus','top-menu.js')
  console.log(dipath)

  return []
}

/*if (fs.existsSync(path.path)) {
        const fileContent = fs.readFileSync(path.path, 'utf8')
        const data = JSON.parse(fileContent)
        if (data.menu) {
            menu = data.menu
        }
    }*/