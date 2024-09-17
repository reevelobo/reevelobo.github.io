import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>CEO, Tech Innovators</CardDescription>
          </CardHeader>
          <CardContent>
            "Working with this developer was an absolute pleasure. Their expertise and dedication resulted in an
            outstanding product that exceeded our expectations."
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Jane Smith</CardTitle>
            <CardDescription>CTO, Digital Solutions</CardDescription>
          </CardHeader>
          <CardContent>
            "The developer's attention to detail and problem-solving skills were impressive. They delivered a
            high-quality solution on time and within budget."
          </CardContent>
        </Card>
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Alex Johnson</CardTitle>
            <CardDescription>Founder, StartUp Success</CardDescription>
          </CardHeader>
          <CardContent>
            "I was blown away by the developer's ability to translate our vision into a functional and beautiful
            website. Their technical skills are top-notch!"
          </CardContent>
        </Card>
      </div>
    </section>
  )
}