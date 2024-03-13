import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const AnimePage = () => {
  const images = [
    {
      id: 1,
      src: "/images/image1.jpg",
      alt: "Image 1",
      width: 400,
      height: 300,
    },
    {
      id: 2,
      src: "/images/image2.jpg",
      alt: "Image 2",
      width: 300,
      height: 450,
    },
    {
      id: 3,
      src: "/images/image3.jpg",
      alt: "Image 3",
      width: 350,
      height: 250,
    },
    // Add more images
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 h-screen">
        <Head>
          <title>Image Gallery</title>
        </Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((image) => (
            <div key={image.id} className="relative bg-gray-600">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                style={{ aspectRatio: `${image.width}/${image.height}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimePage;
