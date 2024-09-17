import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="bg-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Contact Me</h2>
        <form className="mx-auto max-w-md space-y-6">
          <Input type="text" placeholder="Your Name" className="p-3" />
          <Input type="email" placeholder="Your Email" className="p-3" />
          <Textarea placeholder="Your Message" className="p-3" />
          <Button type="submit" className="w-full p-3">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}