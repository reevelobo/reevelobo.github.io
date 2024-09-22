import Image from "next/image"
import aboutme from '../assets/about.jpeg'

export function About() {
  return (
    <section id="about" className="bg-white text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="flex justify-center">
            <Image
              src={aboutme.src}
              alt="Developer portrait"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl text-black">About Me</h2>
            <p className="text-lg text-black">
              I'm a passionate developer with expertise in Next.js, React, and modern web technologies. With years
              of experience in building scalable and performant applications, I strive to create exceptional
              user experiences.
            </p>
            <p className="text-lg text-black">
              My skills include front-end development, back-end integration, database management, and cloud
              deployment. I'm always eager to learn new technologies and tackle challenging projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}