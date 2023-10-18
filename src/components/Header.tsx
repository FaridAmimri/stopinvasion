/** @format */

import { useState } from 'react'
import { MenuItemType } from '../types/types'
import { Link } from 'react-router-dom'
import { menu } from '../utils/data'
import Menu from './Menu'

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Home')

  return (
    <div className='flex items-center p-8 justify-between'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src='/logo.png' alt='' width={36} height={36} />
        <span className='text-xl font-bold pl-1'>StopInvasion</span>
      </div>

      {/* Links */}
      <div className='hidden md:flex gap-12'>
        {menu.map((item) => {
          const isActive = item.name == activeMenu
          const textClass = `text-lg cursor-pointer ${
            isActive ? 'text-sky-500' : 'text-black'
          }`
          const handleClick = (item: MenuItemType) => {
            setActiveMenu(item.name)
          }
          return (
            <Link
              key={item.id}
              className={textClass}
              onClick={() => handleClick(item)}
              to={item.link}
            >
              {item.name}
            </Link>
          )
        })}
      </div>

      {/* Mobile Menu*/}
      <div className='md:hidden'>
        <Menu />
      </div>

      {/* Book Button */}
      <div className='hidden md:flex '>
        <button className='bg-yellow-500 rounded p-2 px-6 text-white'>
          Book now
        </button>
      </div>
    </div>
  )
}

export default Header
