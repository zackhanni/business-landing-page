'use client'
import NavItems from './NavItems';
import React, { useState } from 'react';
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    function navItems() {
        return NavItems.map((item) => (
            <li className="px-4 text-xl duration-300 hover:text-orange-900" key={item.label} >
                <Link 
                    href={item.path}
                >
                    {item.label}
                </Link> 
            </li>
        ))
    }

    return (
    <div className="flex justify-between items-center p-4 h-24 bg-slate-400">
        <Link href="/">
            <h1>Business Page Logo Placeholder</h1>
        </Link>
        <ul className={ click ? "nav-menu flex active" :
    "nav-menu flex" }>

            {navItems()}
        </ul>
        <button className='nav-menu bg-orange-900 rounded-full px-5 py-3 duration-300 hover:bg-white hover:text-orange-900'>Get Started</button>
        <div className="hamburger hidden" onClick=
        {handleClick}>

            { click ? 
            (
                <FaTimes size={20} style={{ color: "white" }} />
            ) : (
                <FaBars size={20} style={{ color: "white" }} />
            )}

        </div>
    </div>
  );
};

export default Navbar