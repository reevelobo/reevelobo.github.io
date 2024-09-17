import Image from "next/image"
import { Button } from "@/components/ui/button"
import Herobg from '@/assets/Herobg.jpg'

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden h-[50vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={Herobg.src}
          alt="Hero background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl text-white">
          Welcome to My Developer Portfolio
        </h1>
        <p className="mb-8 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto">
          Building amazing web experiences with modern technologies
        </p>
        <Button size="lg" className="text-lg px-8 py-3">
          View My Work
        </Button>
      </div>
    </section>
  )
}