import { Button } from "@/components/ui/button";
import PixelBg from "@/components/ui/pixel-bg";
import RightElementMobile from "@/components/ui/right-element-mobile";
import Image from "next/image";
import Link from "next/link";

export default function MarketResearchHero() {
    return (
    <section className="container relative flex flex-col items-center gap-2 text-center text-foreground">
    <PixelBg />
    <h1 className="z-10 text-2xl font-normal tracking-tighter text-black sm:text-4xl md:text-5xl lg:leading-[1.1]">
      Market Research & Campaign Execution for Agri Brands
    </h1>

    <div className="block xl:hidden">
    <div className="-ml-16">
        <Image src="/market-research/market-research-hero.png" alt="Right Element" width={600} height={600} />
      </div>
    </div>
    <div className="flex flex-row">
      <div className="flex w-full flex-col gap-10 py-4 pt-16">
        <div className="text-left pt-20">
          <h2 className="text-6xl font-light tracking-tighter text-muted-foreground">
            Know Your <br/> Audience
          </h2>
          <h2 className="text-6xl font-normal tracking-tighter text-orange-500">
            Act with Precision
          </h2>
        </div>
        <p className="font-regular mx-auto max-w-2xl text-xl text-muted-foreground lg:mx-0 lg:text-left xl:mx-0 xl:text-left">
          Collect valuable insights directly from the field—while running
          digital campaigns that promote your brand and engage real farmers.
          At Digicides, we blend market research with campaign execution to
          help agri brands grow smarter.
        </p>
        <Link
          className="mx-auto h-[64px] w-[440px] lg:mx-0 xl:mx-0"
          href="mailto:connect@digicides.com"
        >
          <Button
            variant="secondary"
            size="lg"
            className="h-full w-full text-xl"
          >
            Start a Research-Driven Campaign
          </Button>
        </Link>
      </div>
      <div className="3xl:block 4xl:block 5xl:block 6xl:block 7xl:block 8xl:block 9xl:block 10xl:block">
        <div className="right-0 -mr-20 mt-20">
          <Image
            src="/market-research/market-research-hero.png"
            alt="Right Element"
            // layout="responsive"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  </section>
  );
}
