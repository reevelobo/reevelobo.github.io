const blogPosts = [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape the future of web development. From WebAssembly to AI-driven interfaces, discover what's on the horizon for developers and users alike.",
      date: "2023-05-15",
      slug: "future-of-web-development",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Mastering React Hooks",
      excerpt: "Dive deep into React Hooks and learn how to build more efficient and maintainable components. This comprehensive guide covers useState, useEffect, useContext, and custom hooks.",
      date: "2023-05-01",
      slug: "mastering-react-hooks",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Building Scalable APIs with GraphQL",
      excerpt: "Discover how GraphQL can revolutionize your API development. Learn best practices for schema design, resolvers, and integrating GraphQL with your existing backend.",
      date: "2023-04-18",
      slug: "building-scalable-apis-with-graphql",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "The Power of Serverless Architecture",
      excerpt: "Explore the benefits and challenges of serverless architecture. Learn how to build, deploy, and scale applications using popular serverless platforms like AWS Lambda and Azure Functions.",
      date: "2023-04-05",
      slug: "power-of-serverless-architecture",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Mastering CSS Grid Layout",
      excerpt: "Unlock the full potential of CSS Grid Layout in your web designs. This comprehensive guide covers everything from basic concepts to advanced techniques for creating complex, responsive layouts.",
      date: "2023-03-22",
      slug: "mastering-css-grid-layout",
      image: "/placeholder.svg?height=200&width=400"
    },
    {
      title: "Introduction to TypeScript",
      excerpt: "Get started with TypeScript and learn how it can improve your JavaScript development experience. Covers basic types, interfaces, generics, and integration with popular frameworks.",
      date: "2023-03-10",
      slug: "introduction-to-typescript",
      image: "/placeholder.svg?height=200&width=400"
    },
  ]

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}

export const getBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRecentBlogPosts = (count: number): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};