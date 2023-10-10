/** @format */

import { useState } from 'react'
import { MenuType, MenuItemType } from '../types/types'
import { Link } from 'react-router-dom'

const menu: MenuType = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'About us', link: '/about' },
  { id: 4, name: 'Contact', link: '/contact' }
]

const Header = () => {
  const [activeMenu, setActiveMenu] = useState('Home')

  return (
    <div className='flex items-center p-6 w-screen justify-between'>
      <div className='flex-1 text-xl font-bold'>StopInvasion</div>
      <div className='flex-2 flex gap-6'>
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
      <div className='flex-1 text-right'>
        <button className='bg-yellow-500 rounded p-2 px-6 text-white'>
          Book now
        </button>
      </div>
    </div>
  )
}

export default Header
