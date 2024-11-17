'use client';

import { useState } from 'react'
import { Button } from "./ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { getBlogPosts } from '../lib/blogs'
import Link from "next/link"

export function Blog() {
  const [isExpanded, setIsExpanded] = useState(false)

  // Add your blog posts data here

  return (
    <section id="blog" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="mb-10 text-3xl font-bold sm:text-4xl">Blog</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {getBlogPosts().slice(0, isExpanded ? undefined : 4).map((post) => (
          <Card key={post.slug} className="flex flex-col mb-8">
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button size="lg" className="text-lg px-8 py-3">
                <Link href={post.link || '#'}> {/* Fallback to '#' if link is undefined */}
                  Read More
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 text-center">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center mt-8 cursor-pointer"
        >
          {isExpanded ? (
            <ChevronUp className="h-6 w-6" />
          ) : (
            <ChevronDown className="h-6 w-6" />
          )}
        </div>
      </div>
    </section>
  )
}
