import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Pricing() {
  return (
    <section id="pricing" className="bg-muted py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-stone-950 mb-10 text-3xl font-bold sm:text-4xl">Pricing</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Basic Package</CardTitle>
              <CardDescription>For small projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$20</p>
              <ul className="space-y-2">
                <li>5-page website</li>
                <li>Responsive design</li>
                <li>Basic SEO optimization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Pro Package</CardTitle>
              <CardDescription>For medium-sized projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$50</p>
              <ul className="space-y-2">
                <li>10-page website</li>
                <li>Responsive design</li>
                <li>Advanced SEO optimization</li>
                <li>E-commerce integration</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Enterprise Package</CardTitle>
              <CardDescription>For large-scale projects</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">Custom</p>
              <ul className="space-y-2">
                <li>Custom web application</li>
                <li>Advanced features and integrations</li>
                <li>Dedicated support</li>
                <li>Performance optimization</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Contact for Quote</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}