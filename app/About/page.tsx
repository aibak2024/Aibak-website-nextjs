import React from "react";

export default function About() {
  return (
    <main className="w-full bg-red flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl font-bold">About Us</h1>

      <div className="flex flex-col-reverse lg:flex-row w-4/5 bg-[#F9F1DE] items-center justify-center">
        <div className="p-4 flex flex-col justify-start items-center gap-2">
          <h1 className="font-extrabold text-2xl lg:text-4xl">Nice to meet you</h1>
          <p className="w-full lg:w-4/6">
            Our simple goal to make learning fun has grown into a dynamic
            community where knowledge meets excitement. we believe that every
            quiz is a chance to challenge yourself, face real knowledge
            challenges, and celebrate your achievements. Join us on this journey
            to learn, grow, and win
          </p>
        </div>
        <div>
          <img src="/about.jpg"></img>
        </div>
      </div>
    </main>
  );
}
