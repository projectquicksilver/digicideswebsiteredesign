import MarketCard from "./market-card";

export default function WhyChooseDigicides() {
    return (
        <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-20 sm:pt-32 md:pt-32 lg:pt-32 xl:pt-32 2xl:pt-32 text-foreground md:px-24 xl:px-44">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl">
            Why Choose{" "}
            <span className="rounded-md bg-primary/10 px-2 text-primary">Digicides ?</span>
          </h1>
          {/* <p className="text-center text-sm font-normal text-muted-foreground">
          Digicides is driven by a team of industry experts with deep experience in agritech, rural marketing, software development, and research. Our leadership brings a unique blend of technology and market expertise to revolutionize agri-business engagement
          </p> */}
          <div className="h-[1px] w-full bg-border" />
          <div className="flex w-full flex-col gap-3">
            <div className="flex w-full flex-col gap-3 md:flex-row">
              <MarketCard
                title="Saswati Bag"
                text="12 years of experience in research & consulting (agriculture). Currently oversees operations at Digicides. MBA graduate from IIMT"
                imagePath="/images/team/saswati.png"
              />
              <MarketCard
                title="Dean Dutta"
                text="17 years of experience in rural sales & marketing. Previously held key roles at startups like Zipdial & Knowlarity. MBA graduate from UIUC"
                imagePath="/images/team/dean.png"
              />
            </div>
            <div className="flex w-full flex-col gap-3 md:flex-row">
              <MarketCard
                title="Shailendra Singh"
                text=" IIT Kanpur with 12+ years in agritech. Previously Co-Founder at Yuktix and worked with Thinvent & Silverline Design INC"
                imagePath="/images/team/shailendra.png"
              />
              <MarketCard
                title="Rajeev Jha"
                text="IIT Kanpur & IIM Bangalore alumnus with 25 years in software development. Previously Founder at Yuktix and worked with Citrix, AOL, Oracle & Indigene"
                imagePath="/images/team/rajeev.png"
              />
            </div>
          </div>
        </div>
      );
}
