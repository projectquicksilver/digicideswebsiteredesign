import StepsCard from "../ui/steps-card";

const WhatDoWeDo = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-20 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32 text-foreground md:px-24 xl:px-44">
      <h1 className="text-center text-3xl md:text-4xl">
        What do we{" "}
        <span className="rounded-md bg-primary/10 px-2 text-primary">do?</span>
      </h1>
      <p className="text-center text-sm font-normal text-muted-foreground">
        We are a product-driven company dedicated exclusively to the agri
        industry. Our suite of advanced SaaS products and solutions helps
        businesses enhance marketing, communication, and customer
        engagement—ultimately leading to better sales and business growth.
      </p>
      <div className="h-[1px] w-full bg-border" />
      <h4 className="text-center text-xl font-normal text-foreground">
        Our Vision is to help businesses to…
      </h4>
      <div className="flex w-full flex-col gap-3">
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <StepsCard
            title="Discover"
            text="Industry-specific SaaS solutions designed exclusively for agriculture."
            imagePath="/images/discover.png"
          />
          <StepsCard
            title="Engage"
            text="Industry-specific SaaS solutions designed exclusively for agriculture."
            imagePath="/images/engage.png"
          />
        </div>
        <div className="flex w-full flex-col gap-3 md:flex-row">
          <StepsCard
            title="Convert"
            text="Industry-specific SaaS solutions designed exclusively for agriculture."
            imagePath="/images/convert.png"
          />
          <StepsCard
            title="Analyse"
            text="From lead generation to conversion tracking, we’ve got you covered."
            imagePath="/images/analyse.png"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
