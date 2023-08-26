import { logo } from '../assets'
import { navLinks } from '../constants'
import LoginBtn from './LoginBtn'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex justify-between'>
            <img src={logo} alt="logo" className='w-9 h-9' />
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
        </nav>
    )
}

export default Navbar