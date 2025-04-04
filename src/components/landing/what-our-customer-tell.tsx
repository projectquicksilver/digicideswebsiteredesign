import TestingCarousel from "../carousel/page";
import AwardLeft from "../ui/award-left";
import AwardRight from "../ui/award-right";

const WhatOurCustomerTell = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-start gap-8 text-foreground pt-48">
      <h1 className="text-center flex justify-center items-center gap-2 text-xl sm:text-3xl md:text-4xl">
        <AwardLeft />
        What our
        <span className="rounded-md bg-primary/10 px-2 text-primary">
          Customer
        </span>
        tell us
        <AwardRight />
      </h1>
      <div className="flex w-full flex-col gap-3">
        <TestingCarousel />
      </div>
    </div>
  );
};

export default WhatOurCustomerTell;
