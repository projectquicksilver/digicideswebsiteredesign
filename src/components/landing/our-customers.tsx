import Image from "next/image";
import { InfiniteSlider } from "../ui/infinte-slider";
import { ProgressiveBlur } from "../ui/progressive-blur";

const OurCustomers = () => {
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-start gap-8 pt-24 pb-4 text-foreground">
      <h1 className="text-center text-3xl md:text-4xl">
            Our
            <span className="rounded-md ml-2 bg-primary/10 px-2 text-primary">
              Customers
            </span>
          </h1>
      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-1/4 z-10 h-[200px] w-[100px] md:w-[200px]"
        direction="right"
        blurIntensity={1}
      />
      <InfiniteSlider className="flex h-full w-full items-center justify-center gap-12">
        <Image
          src="/slider/1.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/2.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/3.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/4.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/5.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/6.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/7.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/8.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/9.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/10.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/11.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/12.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/13.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/14.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/15.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/16.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/17.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/18.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
        <Image
          src="/slider/19.png"
          alt="1"
          width={100}
          height={100}
          className="flex h-[100px] w-full items-center justify-center object-cover"
        />
      </InfiniteSlider>
    </div>
  );
};

export default OurCustomers;
