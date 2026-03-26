'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    console.log('Navbar Loaded')
  const pathname = usePathname()

  const navItems = [
    { name: 'work', path: '/work' },
    { name: 'about', path: '/about' },
    { name: 'contact', path: '/contact' },
  ]

  return (
    <nav className="top-0 left-0 w-full flex justify-center gap-15 py-10 z-0">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`uppercase text-lg tracking-widest transition-transform duration-300 ${
            pathname === item.path ? 'text-yellow-500' : 'text-gray-500'
          } hover:text-yellow-500 hover:scale-110 hover:-translate-y-1`}
        >
          {item.name}
        </Link>
      ))}
    </nav>

  )
}
