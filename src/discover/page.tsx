import ContactUs from "@/components/ContactUs";
import Image from "next/image";

export default function MissedCallSolutionPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-16 md:pb-24">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/5 to-transparent pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
                Missed Call Solution for Agri Lead Generation
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                The Best Lead Generation Tool - Start Offline. Engage Online. Deliver Results.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Turn a missed call into a conversation. Collect leads, validate farmer data, and start rich communication.
              </p>
              <a
                href="#contact-us"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Try a Demo
              </a>
            </div>
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src="/images/missed-call-hero.png"
                alt="Missed Call Solution Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
        <h3 className="text-center text-sm font-medium text-muted-foreground mb-8">
          TRUSTED BY LEADING AGRI BRANDS
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {/* Add client logos here */}
        </div>
      </section>

      {/* What It Does Section */}
      <section className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/images/missed-call-discover.png"
              alt="Why Missed Call Works"
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
              Why Missed Call Solution Works for Agri Marketing
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>Farmers don't fill out long forms—they prefer a missed call.</strong>
            </p>
            <p className="text-muted-foreground mb-4">
              Unlike traditional form-filling, door-to-door surveys, or app-based campaigns, our missed call platform instantly captures the farmer's number and location. It then triggers follow-up via WhatsApp, SMS, or IVR in the farmer's preferred regional language—automatically.
            </p>
            <p className="text-muted-foreground">
              Whether your goal is lead generation, survey data collection, or field team activation, DigiTrack helps you do it faster, cheaper, and more reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Instant Data Capture
              </h3>
              <p className="text-muted-foreground">
                Verified phone numbers and locations in seconds
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                WhatsApp Integration
              </h3>
              <p className="text-muted-foreground">
                Multimedia messages in 14 regional languages
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Survey Automation
              </h3>
              <p className="text-muted-foreground">
                Collect structured crop & farm data
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Real-Time Reporting
              </h3>
              <p className="text-muted-foreground">
                View farmer data as it comes in
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Scalable & Efficient
              </h3>
              <p className="text-muted-foreground">
                Handles 100+ calls/minute, 24/7
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                Multichannel Automation
              </h3>
              <p className="text-muted-foreground">
                Missed Call + SMS + WhatsApp integration
              </p>
            </div>
          </div>
          <div className="mt-12 relative h-[400px]">
            <Image
              src="/images/features-dashboard.png"
              alt="Features Dashboard"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
          How the Missed Call Lead Capture System Works
        </h2>
        <div className="relative h-[500px] mb-12">
          <Image
            src="/images/how-it-works-flow.png"
            alt="How It Works Flow"
            fill
            className="object-contain"
          />
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium mb-4">
              1
            </div>
            <p className="text-muted-foreground">
              Farmer gives a missed call on your campaign number (virtual SIM-less)
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium mb-4">
              2
            </div>
            <p className="text-muted-foreground">
              Phone number & location are captured and validated instantly
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium mb-4">
              3
            </div>
            <p className="text-muted-foreground">
              Auto communication is sent in regional language via various channels
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium mb-4">
              4
            </div>
            <p className="text-muted-foreground">
              BOT/Landing Page/Form collects rich information about farmers
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-medium mb-4">
              5
            </div>
            <p className="text-muted-foreground">
              Data appears in your dashboard in real-time for sales/field teams
            </p>
          </div>
        </div>
      </section>

      {/* Supporting Services */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
            Supporting Communication Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-medium text-foreground mb-3">SMS</h3>
              <p className="text-muted-foreground">
                Deliver links (informative, tutorial, promotional, etc.), OTPs, and coupon codes directly via SMS.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-medium text-foreground mb-3">WhatsApp</h3>
              <p className="text-muted-foreground">
                Instantly reach farmers through WhatsApp/WhatsApp BOT to capture rich, interactive data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-medium text-foreground mb-3">OBD/IVR</h3>
              <p className="text-muted-foreground">
                Use recorded outbound calls to gauge interest and capture relevant inputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
          Success Story
        </h2>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Challenge</h3>
                <p className="text-muted-foreground">
                  An agri brand needed to capture large volumes of verified farmer leads quickly, but faced low connectivity, slow manual data collection, and poor response rates.
                </p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-medium text-foreground mb-4">Solution</h3>
                <p className="text-muted-foreground">
                  Launched a missed call campaign that auto-captured phone numbers and locations, then triggered WhatsApp surveys in local languages. Field teams received real-time data for instant follow-up.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-foreground mb-4">Result</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-primary mr-3 text-2xl">📊</span>
                    <span className="text-muted-foreground">20,000+ captures in 7 days</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-3 text-2xl">💬</span>
                    <span className="text-muted-foreground">75% WhatsApp survey response rate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-primary mr-3 text-2xl">📈</span>
                    <span className="text-muted-foreground">60% jump in field visits from instant lead sharing</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/case-study-thumbnail.jpg"
              >
                <source src="/videos/customer-experience.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Digicides */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="2xl:max-w-7xl max-w-5xl px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
            Why Choose Digicides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🧠</div>
              <p className="text-muted-foreground font-medium">
                Deep agri market expertise
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📊</div>
              <p className="text-muted-foreground font-medium">
                Access to Digicides Data & Smart Targeting
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🤖</div>
              <p className="text-muted-foreground font-medium">
                Missed Call + Integrated Communication Channels
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">🌐</div>
              <p className="text-muted-foreground font-medium">
                Regional language support
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">📈</div>
              <p className="text-muted-foreground font-medium">
                Real-time insights for sales enablement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="2xl:max-w-7xl max-w-5xl px-4 mx-auto text-center">
        <h2 className="text-4xl font-medium text-foreground text-center mb-6">
          Ready to Generate Verified Farmer Leads?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's turn every missed call into a real opportunity.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact-us" className="-mt-32 md:-mt-52">
        <ContactUs />
      </section>
    </div>
  );
}