"use client"

import TopMenu from '@/menus/top-menu.json'
import Logo from '../../public/logo.svg'
import Link from 'next/link'
import { useState } from 'react'


export default function Header(){

    const [isVisible, setIsVisible] = useState(false), 
    toggle = () => {
        setIsVisible(!isVisible)
    }

    let menu = TopMenu.menu

    return <div id='header'>
        <div className='content'>
            <div className="navbar">
                <div className="nav-brand">
                    <Link href='/'><Logo className='logo' /></Link>
                </div>
                <div className="nav-side navbar-menu right">
                    <label id="menu-toggle">
                        <button className="menu-btn" onClick={toggle}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </label>
                </div>
                <div className={isVisible ? 'nav-side navbar-toggle show' : 'nav-side navbar-toggle'}>
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