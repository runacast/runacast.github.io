import Logo from '../../public/logo.svg'
import { fileURLToPath } from 'url';
import fs from 'fs'
import path from 'path'

export default function Header(){

    const rootDir = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(rootDir, '..', 'menus', 'top-menu.json')

    let menu = []

    if(fs.existsSync(filePath)){
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const data = JSON.parse(fileContent)
        if(data.menu){
            menu = data.menu
        }
    }

    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <a href='/'><Logo maxwidth={300} height={50} /></a>
                </div>
                <div className="nav-side navbar-menu right">
                    <label id="menu-toggle">
                        <button className="menu-btn">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </label>
                </div>
                <div className="nav-side navbar-toggle">
                    <ul className="menu">
                    {menu.map((item, index) => (
                        <li key={index}><a href={item.slug}>{item.title}</a></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}