import Logo from "../../public/logo.svg"
import fs from 'fs'
import path from 'path'

export default function Header(){

    const filePath = path.join('src', 'menus', 'top-menu.json')
    let menu = {}

    if(fs.existsSync(filePath)){
        const fileContent = fs.readFileSync(filePath, 'utf8')
        menu = JSON.parse(fileContent)
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
                        <li><a href="/">Kallarik</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}