"use client";
import Link from "next/link"
import { useState, useEffect } from "react"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="font-bold transition-colors px-4 py-2 text-sm duration-200 bg-transparent text-slate-50 hover:text-purple-600"
    >
      {children}
    </Link>
  ) 
}

export function Header() {
  const [opacity, setOpacity] = useState(0.1)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const newOpacity = Math.min(0.9, 0.1 + (currentScrollY / maxScroll) * 3)
      setOpacity(newOpacity)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md`} style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground dark:text-white">
            DevPortfolio
          </Link>
          <div className="space-x-2">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}