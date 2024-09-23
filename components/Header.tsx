"use client";

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      className="font-bold transition-colors px-4 py-2 text-sm duration-200 bg-transparent text-slate-50 hover:text-purple-600"
      onClick={onClick}
    >
      {children}
    </Link>
  ) 
}

export function Header() {
  const [opacity, setOpacity] = useState(0.1)
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

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

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-md`} style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}>
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-foreground dark:text-white">
            DevPortfolio
          </Link>
          <div className="hidden md:flex space-x-2">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-slate-50" /> : <Menu className="h-6 w-6 text-slate-50" />}
            </Button>
          </div>
        </nav>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md">
          <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col space-y-2">
            <NavLink href="#about" onClick={closeMenu}>About</NavLink>
            <NavLink href="#testimonials" onClick={closeMenu}>Testimonials</NavLink>
            <NavLink href="#pricing" onClick={closeMenu}>Pricing</NavLink>
            <NavLink href="#blog" onClick={closeMenu}>Blog</NavLink>
            <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}