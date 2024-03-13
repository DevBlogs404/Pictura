import StarsBackground from "./StarsBackground";
import Navbar from "./Navbar";

const Header = () => {
  return (
    // <div className="w-full p-[16px] flex items-center justify-between bg-white sticky top-0">
    //   <div className="flex items-center justify-center gap-4">
    //     <div className="flex items-center justify-center gap-2">
    //       <Link href={"/"}>
    //         <Image src={logo} alt="logo" height={60} width={60} />
    //       </Link>
    //       <h1 className="text-2xl font-bold text-[#716b67]">Pictura</h1>
    //     </div>
    //     <div className="p-1 px-2 rounded-md font-bold  hover:bg-[#d4cfcc] ">
    //       <Link href={"/"}>Explore</Link>
    //     </div>
    //   </div>
    //   <div className="flex items-center justify-center gap-4">
    //     <div className="p-1 px-2 rounded-md font-bold  hover:bg-[#d4cfcc] ">
    //       <Link href={"/"}>About</Link>
    //     </div>
    //     <button className="border-none outline-none px-4 py-2 bg-[#716b67] hover:bg-[#57514d] text-white font-bold rounded-xl">
    //       Log In
    //     </button>
    //     <button className="hover:underline font-bold hover:text-[#3b3836]">
    //       Sign Up
    //     </button>
    //   </div>
    // </div>
    <div className="sticky top-0 z-50">
      <div className="relative">
        {/* <StarsBackground /> */}
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
