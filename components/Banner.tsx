import Image from "next/image";
import banner from "@/public/banner.webp";

const Banner = () => {
  return (
    <div className="w-full">
      <div className="relative w-full flex items-center justify-center h-full">
        <div className="absolute h-full  w-full flex items-center justify-center">
          <span className=" pointer-events-none text-center text-3xl md:text-6xl lg:text-8xl font-semibold bg-clip-text text-transparent bg-gradient-to-br from-black via-white to-amber-700">
            The best free Ai images, free images generated by users.
          </span>
        </div>
        <Image
          src={banner}
          alt="banner"
          className="aspect-video"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Banner;