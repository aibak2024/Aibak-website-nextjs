"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const events = [
  {
    title: "Demo Event 1",
    date: "November 15, 2024",
    location: "Sylhet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, ",
  },
  {
    title: "Event 2",
    date: "November 20, 2024",
    location: "Sylhet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
  // {
  //   title: "Event 3",
  //   date: "December 5, 2024",
  //   location: "Sylhet",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  // },
];

export default function Events() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-32 w-full">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
        <p className="text-muted-foreground">
          Join our events to enhance your skills and expand your network.
        </p>
      </div>

      <div className="flex flex-wrap w-full gap-10 justify-center items-center">
        {events.map((event) => (
          <Card key={event.title} style={
            {
              backgroundImage: `url('https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/468549380_122124415370529652_1453389999241783636_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8S2pE-tXbQgQ7kNvgF8c6Pk&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=A9pBHmBXbbMpgLN16d-YT8i&oh=00_AYB5GPzUfGbEHwNV_BRBlFfGGTu_Jkxe4wVbdcp4YDQBiw&oe=6759D935')`
            }
          } className="w-4/5 md:w-2/5">
            <CardHeader>
            <img src="https://scontent.fdac184-1.fna.fbcdn.net/v/t39.30808-6/468549380_122124415370529652_1453389999241783636_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=8S2pE-tXbQgQ7kNvgF8c6Pk&_nc_zt=23&_nc_ht=scontent.fdac184-1.fna&_nc_gid=A9pBHmBXbbMpgLN16d-YT8i&oh=00_AYB5GPzUfGbEHwNV_BRBlFfGGTu_Jkxe4wVbdcp4YDQBiw&oe=6759D935" alt="Aibak" className="w-full h-full" />
              <CardTitle>{event.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground ">
                  <Calendar className="mr-2 h-4 w-4 text-white" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{event.location}</span>
                </div>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </CardContent>
            <Button size="lg" className="m-4 bg-transparent border w-3/5">
              Register
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
