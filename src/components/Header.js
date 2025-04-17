"use client"

import Logo from '../../public/logo.svg'
import Link from 'next/link'
import { useState } from 'react'

export default function Header(path){

    const [isPictureVisible, setIsPictureVisible] = useState(false), togglePicture = () => {
        setIsPictureVisible(!isPictureVisible);
    };

    let menu = []

    fetch('https://raw.githubusercontent.com/runacast/runacast.github.io/refs/heads/main/src/menus/top-menu.json', {method: "GET"})
    .then((response) => {
        if (response.ok) {
            return response.json()
        }
    })
    .then((data) => {
        
        menu = data.menu
    })
    console.log(menu)
    /*if (fs.existsSync(path.path)) {
        const fileContent = fs.readFileSync(path.path, 'utf8')
        const data = JSON.parse(fileContent)
        if (data.menu) {
            menu = data.menu
        }
    }*/

    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <Link href='/'><Logo maxwidth={300} height={50} /></Link>
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
                        <li key={index}><Link href={item.slug}>{item.title}</Link></li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}