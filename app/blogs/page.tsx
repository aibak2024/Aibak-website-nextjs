"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const blogs = [
  {
    title: "Demo blog 1",
    date: "October 15, 2024",
    author: "Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    image: "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/461440736_122109474278529652_4564985921964684580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2vUV7zfPeS8Q7kNvgFZ8Trp&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=AL3Whx0LBnnuyaq41WFTJbP&oh=00_AYCCHP0lAqPhGbCKyDQignMidvEttMb-JUkvLlR94oIFUw&oe=67566F37",
  },
  {
    title: "Demo blog 2",
    date: "October 10, 2024",
    author: "Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    image: "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/461440736_122109474278529652_4564985921964684580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2vUV7zfPeS8Q7kNvgFZ8Trp&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=AL3Whx0LBnnuyaq41WFTJbP&oh=00_AYCCHP0lAqPhGbCKyDQignMidvEttMb-JUkvLlR94oIFUw&oe=67566F37",
  },
  {
    title: "Demo blog 3",
    date: "October 5, 2024",
    author: "Admin",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
    image: "https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/461440736_122109474278529652_4564985921964684580_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=2vUV7zfPeS8Q7kNvgFZ8Trp&_nc_zt=23&_nc_ht=scontent.fdac157-1.fna&_nc_gid=AL3Whx0LBnnuyaq41WFTJbP&oh=00_AYCCHP0lAqPhGbCKyDQignMidvEttMb-JUkvLlR94oIFUw&oe=67566F37",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-32">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Latest Insights</h1>
        <p className="text-muted-foreground">
          Explore our collection of articles on education, leadership, and personal growth.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.title} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="text-sm text-muted-foreground mb-2">
                {blog.date} • By {blog.author}
              </div>
              <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{blog.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}