import ContactUs from "@/components/landing/contact-us";
import MarketResearchHero from "@/components/market-research/hero";
import WhyChooseDigicides from "@/components/market-research/why-choose";
import Image from "next/image";

export default function MarketResearchAndCampaignExecution() {
  return (
    <div className="flex flex-col gap-20">
      <MarketResearchHero />
      <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-20 text-foreground sm:pt-32 md:px-24 md:pt-32 lg:pt-32 xl:px-44 xl:pt-32 2xl:pt-32">
        <h1 className="text-center text-3xl sm:text-4xl">
          Why Market Research Matters{" "}
          <span className="rounded-md bg-primary/10 px-2 text-primary">
            in Agri Marketing
          </span>
        </h1>
        <div className="h-[1px] w-full bg-border" />
        <p className="text-md text-center font-normal text-muted-foreground">
          Traditional surveys are{" "}
          <b>time-consuming, costly, and disconnected</b>. Agri brands need{" "}
          <b>fast, reliable, and actionable insights</b>—directly from the
          farmers they serve. Our approach combines survey marketing with
          digital engagement, letting you gather data while building brand
          awareness.
        </p>
        <Image
          src="/market-research/market-research-dashboard.png"
          alt="Market Research Dashboard"
          width={1000}
          height={1000}
          className="my-10"
        />
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-20 text-foreground sm:pt-32 md:px-24 md:pt-32 lg:pt-32 xl:px-44 xl:pt-32 2xl:pt-32">
        <h1 className="text-center text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
          Our Market Research &{" "}
          <span className="rounded-md bg-primary/10 px-2 text-primary">
            Campaign Execution Workflow
          </span>
        </h1>
        <p className="text-md text-center font-normal text-muted-foreground">
          We turn traditional market research surveys into powerful digital
          campaigns designed to collect data and create engagement—at scale.
        </p>
        <div className="h-[1px] w-full bg-border" />
        <div className="flex flex-col gap-10 text-center">
          • Audience-Centric Data Collection • Defining Your Campaign Objectives
          • Channel Planning & Strategy <br/> • Campaign Execution & Automation •
          Insightful Reporting & Feedback Loop
        </div>
      </div>
      <WhyChooseDigicides />
      <ContactUs />
    </div>
  );
}
