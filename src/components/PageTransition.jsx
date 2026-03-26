'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 1, clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ opacity: 0, clipPath: 'circle(150% at 50% 50%)' }}
          exit={{ opacity: 1, clipPath: 'circle(0% at 50% 50%)' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="fixed top-0 left-0 w-full h-full bg-yellow-500 z-50 pointer-events-none"
        />
      </AnimatePresence>

      {children}
    </>
  )
}
