"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import output from "@/public/banner.webp";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const Examples = () => {
  //   const [api, setApi] = useState<CarouselApi>();

  //   useEffect(() => {
  //     if (!api) {
  //       return;
  //     }

  //     api.on("select", () => {
  //       // Do something on select.
  //     });
  //   }, [api]);

  return (
    <div className="min-h-screen w-full flex bg-black items-center justify-center gap-10 p-10">
      <div className="flex-1">
        <h3 className="text-white text-xl md:text-2xl lg:text-4xl">
          Create original, realistic images and art from a text description. It
          can combine concepts, attributes, and styles.
        </h3>
      </div>
      {/* images box */}
      <div className="flex-1 flex flex-col min-h-[80vh] border border-gray-600">
        <div className=" border-b border-b-gray-600 p-4">
          <h4 className="text-gray-300 font-bold text-xl mb-6">Input</h4>
          <p className="text-gray-400 font-semibold text-lg">
            An astronaut riding a horse in photorealistic style.
          </p>
        </div>
        <div className="p-4 flex-1">
          <h4 className="text-gray-300 font-bold text-xl mb-6">Output</h4>
          <Carousel className="max-w-[90%] mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className="pl-2 md:pl-4">
                <Image src={output} alt="output" priority={true} />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4">
                <Image src={output} alt="output" priority={true} />
              </CarouselItem>
              <CarouselItem className="pl-2 md:pl-4">
                <Image src={output} alt="output" priority={true} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Examples;
