"use client"

import Logo from '../../public/logo.svg'
import Link from 'next/link'
import { useState } from 'react'

export default async function Header(path){

    const [isPictureVisible, setIsPictureVisible] = useState(false), togglePicture = () => {
        setIsPictureVisible(!isPictureVisible);
    };

    let menu = []

    const response = await fetch('https://raw.githubusercontent.com/runacast/runacast.github.io/refs/heads/main/src/menus/top-menu.json', {method: "GET"});
    
    if (response.ok) {
        const data = await response.json()
        menu = data.menu
    }

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