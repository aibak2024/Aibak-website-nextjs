"use client";

import Events from "@/app/events/page";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";


const Hero = () => {
  const router = useRouter();
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center  items-center">
          <div className="">
       <img src="aibak.png" />
          </div>

          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Learn, Lead And <span className="text-primary">Empower</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Lead with confidence, and win through the power of knowledge!
            </p>
            <div
              className="mt-8 flex flex-wrap gap-4"
              onClick={() => router.push("/events")}
            >
              <Button size="lg">
                Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/blogs")}
              >
                Blogs
              </Button>
            </div>
          </div>
        </div>

        <Events/>
      </div>
    </section>
  );
};

export default Hero;
