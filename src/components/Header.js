import Logo from "../../public/logo.svg"
import fs from 'fs'
import path from 'path'

export default function Header(){

    const filePath = path.join(process.cwd(), 'src', 'menus', 'top-menu.json')
    console.log(filePath)
    /*const fileContent = fs.readFileSync(filePath, 'utf8')
    const menu = JSON.parse(fileContent)*/

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
                        <li><a href="/">Karallik</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
}