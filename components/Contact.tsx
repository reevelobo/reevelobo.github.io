import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import Image from "next/image"
import contact from '../Assets/contact.jpg'

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-stone-950 mb-10 text-3xl font-bold sm:text-4xl md:ml-20">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <form className="w-full md:w-1/2 max-w-md space-y-6 md:ml-20">
            <Input type="text" placeholder="Your Name" className="p-3" />
            <Input type="email" placeholder="Your Email" className="p-3" />
            <Textarea placeholder="Your Message" className="p-3" />
            <Button type="submit" className="w-full p-3">
              Send Message
            </Button>
          </form>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-end md:mr-28">
            <Image
              src={contact.src}
              alt="Contact image"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}