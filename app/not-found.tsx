import Link from "next/link";
import { Bot } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-6">
      <Bot size={200} color="#716b67" />
      <h2 className="text-2xl  text-[#716b67] md:text-4xl lg:text-8xl font-bold">
        Not Found
      </h2>
      <p className="font-semibold  text-[#716b67] text-xl md:text-2xl lg:text-4xl">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="underline text-[#716b67] font-extrabold text-xl md:text-2xl lg:text-4xl"
      >
        Return Home
      </Link>
    </div>
  );
}
