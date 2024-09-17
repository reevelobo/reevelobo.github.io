import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary py-8 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">&copy; 2023 DevPortfolio. All rights reserved.</p>
        <div className="space-x-4">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}