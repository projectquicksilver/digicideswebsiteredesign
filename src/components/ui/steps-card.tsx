import Image from "next/image";
import React from "react";
import Link from "next/link";

const StepsCard = ({
  title,
  text,
  imagePath,
}: {
  title: string;
  text: string;
  imagePath: string;
}) => {
  return (
    <div className="flex flex-row w-full min-h-[180px] rounded-xl bg-primary/10 p-4">
      <div className="relative w-full ">
        <Image 
          src={imagePath} 
          alt={title} 
          fill
          className="sm:object-contain" 
        />
      </div>
      <div className="flex flex-col text-left ml-2">
        <h3 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-medium text-primary">{title}</h3>
        <p className="text-sm sm:text-md md:text-md lg:text-lg xl:text-lg mt-2 text-gray-600">
          {text}
        </p>
        <Link href="/under-construction" className="flex items-center text-black font-bold mt-4">
        <button className="flex items-center text-black font-bold mt-4 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0">
          Know More ↗
        </button>
        </Link>
      </div>
    </div>
  );
};

export default StepsCard;
