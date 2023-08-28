import { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from '../constants'
import LoginBtn from './LoginBtn'
import Button from './Button'

const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='flex items-center justify-between'>
            <a href="home"><img src={logo} alt="logo" className='w-9 h-9 cursor-pointer' /></a>
            <div className='hidden flew-row space-x-6 md:flex'>
                <ul className="flex items-center space-x-6">
                    {navLinks.map((nav) => (
                        <li key={nav.id} className={`text-lightGray text-sm font-light hover:text-normalBlack`}>
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-row space-x-4'>
                    <LoginBtn />
                    <Button title={'Register'} />
                </div>
            </div>
            <div className="flex justify-end items-center md:hidden">
                <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain" onClick={() => setToggle((prev) => !prev)} />
                <div className={`${!toggle ? "hidden" : "flex"} w-full text-center flex-col p-6 absolute top-20 right-0 bg-white z-[5]`}>
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map((nav) =>(
                            <li key={nav.id} className={`font-medium cursor-pointer text-base ${active === nav.title ? "text-normalBlack" : "text-lightGray"}`} onClick={() => setActive(nav.title)}>
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-col space-y-4 mt-4'>
                        <LoginBtn />
                        <Button title={'Register'} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar