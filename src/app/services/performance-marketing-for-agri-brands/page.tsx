import ContactUs from "@/components/landing/contact-us";
import OurCustomers from "@/components/landing/our-customers";


export default function PerformanceMarketingAndSeoServices() {
  return (
    <div>
      <OurCustomers />
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl text-center text-foreground mb-12">
            Performance Marketing & SEO, Built for Agri Brands
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
            We turn agri marketing into measurable results with custom Google and Meta ad campaigns, SEO, and lead generation—all tuned to your region, crop cycle, and buyer behavior.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Google Ads & YouTube",
                description: "Targeted campaigns to reach farmers searching for solutions like yours",
                icon: "🔍"
              },
              {
                title: "Meta Ads",
                description: "Facebook & Instagram campaigns to build brand awareness and engagement",
                icon: "📱"
              },
              {
                title: "SEO Services",
                description: "Rank higher in search results when farmers look for agricultural solutions",
                icon: "📈"
              },
              {
                title: "Lead Generation",
                description: "Convert visitors into qualified leads with optimized landing pages",
                icon: "🎯"
              },
              {
                title: "Social Media Management",
                description: "Build your brand's presence where your customers spend their time",
                icon: "💬"
              }
            ].map((service, index) => (
              <div key={index} className="bg-[#FEF4E8] p-6 rounded-xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-medium text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl text-center text-foreground mb-12">
            Smart Strategy. Strong Results.
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
            Our process ensures every rupee you spend delivers value—whether it's visibility, engagement, or verified leads.
          </p>
          <div className="flex flex-col md:flex-row">
            {[
              {
                step: "01",
                title: "Understand Your Goals",
                description: "We start by identifying what matters most—awareness, engagement, or lead generation?"
              },
              {
                step: "02",
                title: "Create the Strategy",
                description: "From media planning to content creation, we build a roadmap for your success"
              },
              {
                step: "03",
                title: "Launch Campaigns",
                description: "SEO + Paid Media = Wider Reach. We implement your strategy across platforms"
              },
              {
                step: "04",
                title: "Optimize Continuously",
                description: "With keyword research, competitor analysis, and real-time reporting"
              }
            ].map((step, index) => (
              <div key={index} className="relative mb-8 md:mb-0 md:flex-1">
                <div className="border-l-4 border-[#FEF4E8] pl-4 md:border-l-0 md:border-t-4 md:pt-4 md:pl-0">
                  <div className="absolute top-0 -left-3 md:-top-3 md:left-0 bg-[#FEF4E8] text-foreground text-sm font-medium rounded-full size-9 flex items-center justify-center">
                    {step.step}
                  </div>
                  <h3 className="font-medium text-xl text-foreground mb-2 mt-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm pr-4">{step.description}</p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl text-center text-foreground mb-6">
            Services We Offer
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-5xl mx-auto">We turn agri marketing into measurable results with custom Google and Meta ad campaigns, SEO, and lead generation — All-in-One Digital Growth Suite.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl">
              <h3 className="text-2xl font-medium text-foreground mb-6">Performance Marketing Services</h3>
              <ul className="space-y-4">
                {[
                  "Google Ads (Search, Display, YouTube)",
                  "Facebook & Instagram Ads",
                  "Lead Generation Campaigns",
                  "WhatsApp & Missed Call Integrations",
                  "Landing Page Design + A/B Testing – Pages that convert"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-xl">
              <h3 className="text-2xl font-medium text-foreground mb-6">SEO Services</h3>
              <ul className="space-y-4">
                {[
                  "On-Page & Off-Page SEO",
                  "Local SEO for Dealers & Distributors",
                  "Keyword Research + Competitor Analysis",
                  "Technical SEO & Speed Optimization",
                  "YouTube Optimization & Blog Content Strategy"
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl text-center text-foreground mb-12">
            We Know Agri. We Deliver Results.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Specialists in Agri Marketing",
                description: "We understand the unique challenges and opportunities in the agriculture sector"
              },
              {
                title: "Data-Driven Performance",
                description: "Every campaign is built on insights and optimized for measurable results"
              },
              {
                title: "Advanced SEO Services",
                description: "Technical expertise that helps you rank higher and get found online"
              },
              {
                title: "Smart, Scalable Strategy",
                description: "Marketing approaches that grow with your business needs"
              },
              {
                title: "Complete Support",
                description: "From planning to execution, we're with you every step of the way"
              },
              {
                title: "Rural Market Focus",
                description: "Specialized approaches to connect with farmers and rural communities"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#FEF4E8] p-6 rounded-xl transition duration-300">
                <h3 className="font-medium text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-medium md:text-4xl text-center text-foreground mb-12">
            Real Results with Real Impact
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Lead Generation Success",
                description: "Generated 5,000+ qualified leads for a micronutrient brand using Meta and Google Ads",
                icon: "📊"
              },
              {
                title: "SEO Traffic Growth",
                description: "Doubled website traffic for a seed company via Local SEO & keyword optimization",
                icon: "🚀"
              },
              {
                title: "Video Marketing Reach",
                description: "Achieved 1L+ video views through YouTube marketing services in rural belts",
                icon: "📹"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-[#FEF4E8] p-6 rounded-xl transition duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{caseStudy.icon}</div>
                <h3 className="font-medium text-xl text-foreground mb-2">{caseStudy.title}</h3>
                <p className="text-muted-foreground mb-4">{caseStudy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  )
}