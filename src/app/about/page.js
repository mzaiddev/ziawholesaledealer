"use client";
import Link from "next/link";
import MaterialIcon from "../../components/MaterialIcon";

export default function About() {
  return (
    <>
      {/* =========== MOBILE =========== */}
      <main className="md:hidden flex flex-col">
        {/* Hero */}
        <section className="relative min-h-[530px] flex items-center bg-inverse-surface overflow-hidden px-margin-mobile py-20">
          <div className="absolute inset-0 z-0">
            <div className="w-full h-full bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApALKdtgEoHw4KqnMnjIOX3GKMaTlacVkq_SgXNpsV0CWc2XlKUbqjiqdfSWp84hsrfWEDYbqI4g0VmpmkhDvQfINniY1FYMEO9xhKXKrjZ34YOw6LUpw-Tx5JzkZ-GBHcR4YeMEQnCENRnTCMWfsiPmgN5IwK3qKxUctchAyQFSYXqX-O1eX7VHnMoGW8Knf18B1myVeAIXD6MHL5A4dB8WnEorVWrI34Obykql_Wfe8M8kGfa8CiKQ')" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" />
          </div>
          <div className="relative z-10 w-full max-w-max-width mx-auto">
            <div className="inline-block px-3 py-1 bg-primary mb-6">
              <span className="text-white font-label-bold text-[12px] tracking-widest uppercase">ESTABLISHED 1996</span>
            </div>
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-6 uppercase tracking-tight">DEFINING THE STANDARD</h1>
            <p className="font-body-lg text-body-lg text-white/80 max-w-xl mb-8">
              Zia Wholesale has stood as a pillar of reliability in the high-performance hardware industry for nearly three decades. We bridge the gap between world-class manufacturers and the global market.
            </p>
            <div className="flex items-center gap-4 border-l-4 border-primary pl-6">
              <div>
                <div className="text-white font-headline-sm text-headline-sm">28+</div>
                <div className="text-white/60 font-label-bold text-[12px]">YEARS OF EXPERTISE</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-20 px-margin-mobile bg-surface">
          <div className="max-w-max-width mx-auto">
            <h2 className="font-headline-md text-headline-md mb-4 text-on-background uppercase">CORE PRINCIPLES</h2>
            <div className="w-16 h-1 bg-primary mb-12" />
            <div className="flex flex-col gap-6">
              <div className="bg-white border border-outline-variant p-8 transition-all hover:border-primary">
                <MaterialIcon name="verified" className="text-primary text-4xl mb-4" />
                <h3 className="font-headline-sm text-headline-sm mb-3 uppercase">UNCOMPROMISING QUALITY</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Every unit undergoes a rigorous multi-point inspection process before being certified for our wholesale catalog.</p>
              </div>
              <div className="bg-white border border-outline-variant p-8 transition-all hover:border-primary">
                <MaterialIcon name="handshake" className="text-primary text-4xl mb-4" />
                <h3 className="font-headline-sm text-headline-sm mb-3 uppercase">LEGACY TRUST</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Building enduring partnerships through transparency, competitive pricing, and logistical excellence since 1996.</p>
              </div>
              <div className="bg-white border border-outline-variant p-8 transition-all hover:border-primary">
                <MaterialIcon name="precision_manufacturing" className="text-primary text-4xl mb-4" />
                <h3 className="font-headline-sm text-headline-sm mb-3 uppercase">TECHNICAL EXPERTISE</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Our team consists of hardware specialists who understand the intricate specifications of high-end enterprise computing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* UK Procurement */}
        <section className="bg-surface-container-low py-20 px-margin-mobile">
          <div className="max-w-max-width mx-auto">
            <div className="grid grid-cols-1 gap-12">
              <div>
                <h2 className="font-headline-md text-headline-md mb-6 text-on-background uppercase">THE UK PROCUREMENT ADVANTAGE</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Strategically positioned in the heart of international trade, our UK headquarters serves as a critical hub for premium hardware sourcing. We leverage unique regional partnerships to secure first-batch access to the latest workstations and mobile computing technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 border border-outline-variant">
                    <div className="text-primary font-bold text-lg mb-1">Global Reach</div>
                    <div className="text-on-surface-variant text-sm">Serving 50+ countries.</div>
                  </div>
                  <div className="bg-white p-4 border border-outline-variant">
                    <div className="text-primary font-bold text-lg mb-1">Priority Stock</div>
                    <div className="text-on-surface-variant text-sm">Exclusive SKU access.</div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="w-full h-full bg-cover bg-center border-l-8 border-b-8 border-primary shadow-2xl" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCRC8I4DlXYkuiqy03Mo62WZsUUFf3jSfRcZQW3iFcUCFuBoxBQyE57fIK2GJjmnkwOZgLyYJ5-w0XsdIr-oufbHPJ88HsqfFRTquz9MgeLVdEPNZnrJDlYXRtmmiobYp9oJ1YurbNlboDz-ImXFfxQl8Ek1wcL1d2BCglGgv7LqlfLkAIPQV4jV0eOHgaRWSJnq-uaSSZEhtZp-FycMGsNZLkC4CqsxOTno-LMM630_hz9NY9icJX8Nw')" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Timeline */}
        <section className="py-20 px-margin-mobile bg-white">
          <div className="max-w-max-width mx-auto">
            <h2 className="font-headline-md text-headline-md mb-12 text-center text-on-background uppercase tracking-tight">OPERATIONAL EXCELLENCE</h2>
            <div className="flex flex-col gap-12 relative">
              {[
                ["01", "STRATEGIC SOURCING", "We identify and procure high-demand inventory directly from authorized European channels and manufacturers."],
                ["02", "RIGOROUS TESTING", "Our hardware lab conducts stress tests, component verification, and aesthetic grading on every single unit."],
                ["03", "PRECISION LOGISTICS", "Orders are packed using industrial-grade materials and dispatched via secure, tracked international carriers."],
                ["04", "POST-SALE SUPPORT", "Dedicated account managers provide technical assistance and warranty support to ensure long-term business continuity."],
              ].map(([num, title, desc]) => (
                <div key={num} className="step-line relative flex gap-6">
                  <div className="z-10 bg-primary w-8 h-8 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">{num}</div>
                  <div>
                    <h4 className="font-headline-sm text-[18px] mb-2 uppercase">{title}</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-inverse-surface py-20 px-margin-mobile text-center">
          <h2 className="font-headline-md text-headline-md text-white mb-6 uppercase">READY TO PARTNER?</h2>
          <p className="font-body-md text-body-md text-white/60 mb-10 max-w-md mx-auto">Join the global network of resellers who rely on Zia Wholesale for premium hardware and professional service.</p>
          <Link href="/wholesale" className="sharp-gradient-btn text-white font-label-bold py-4 px-10 uppercase tracking-widest shadow-lg inline-block">
            REQUEST WHOLESALE QUOTE
          </Link>
        </section>
      </main>

      {/* =========== DESKTOP =========== */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNwR7w_J-naCEUpnhN7KpN_OgdDG9aQosL8PgddVF3zzZzgZJgvqz8VD8Wl-UP1GTrFCQAzJPMi8oYykjRjqKoQlKyGIsqjWW8l5v2rzmA5h_LcxgOaFE9nk4AVj11QjSL4kHTGJb7WJpTYPSV15M2sRemeS4iRXQMe9Av1g8OrQAqrjWHoboyi5ZDKMbTvQ-Qt7pz5Hqoow1LdLY4ctGxRPb2BDnO7pNlywEJk0hj9JNnEljWjEkDaQ')" }} />
          <div className="absolute inset-0 hero-overlay" />
          <div className="relative z-10 px-margin-desktop max-w-max-width mx-auto w-full">
            <div className="max-w-2xl border-l-4 border-primary-container pl-8">
              <h1 className="font-display-lg text-display-lg text-white mb-6 uppercase">Trusted Wholesale Heritage Since 1996</h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-8">A legacy of quality, honesty, and nationwide supply of premium UK-imported laptops.</p>
              <div className="flex gap-4">
                <Link href="/products" className="sharp-gradient-btn px-8 py-4 font-label-bold text-label-bold text-white uppercase tracking-widest shadow-lg">Explore Inventory</Link>
                <Link href="/contact" className="border border-white text-white px-8 py-4 font-label-bold text-label-bold uppercase tracking-widest hover:bg-white hover:text-on-background transition-all">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* History */}
        <section className="py-24 bg-white border-b border-outline-variant">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
              <div>
                <span className="text-primary font-label-bold text-label-bold uppercase tracking-widest mb-4 block">Our Journey</span>
                <h2 className="font-headline-md text-headline-md mb-8">Defining the Standard for Wholesale Distribution for Over 28 Years</h2>
                <div className="space-y-6 font-body-md text-on-surface-variant">
                  <p>Founded in 1996, Zia Laptop Wholesale Dealer began with a singular focus: to bridge the gap between high-end international computing hardware and the growing demand for reliable technology in the local market. What started as a modest distribution hub has evolved into a nationwide leader in UK-imported hardware.</p>
                  <p>Our growth has been fueled by a commitment to technical precision. We don't just move boxes; we manage a sophisticated supply chain that ensures every unit meeting our inventory has been vetted through rigorous quality standards established over decades of operation.</p>
                </div>
              </div>
               <div className="grid grid-cols-2 gap-4">
                 <div className="border border-outline-variant p-1">
                   <img className="w-full aspect-square object-cover" src="/stock-image1.png" alt="Our History" />
                 </div>
                 <div className="border border-outline-variant p-1 mt-8">
                   <img className="w-full aspect-square object-cover" src="/stock-image2.png" alt="Our Story" />
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tighter">Core Values & Strategic Direction</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                ["target", "OUR MISSION", "To empower businesses and retailers by providing consistent access to tier-one computing hardware through a transparent, efficient, and quality-driven wholesale ecosystem."],
                ["visibility", "OUR VISION", "To be recognized as the definitive benchmark for imported technology distribution, setting the industry standard for integrity and technical excellence across the region."],
                ["verified", "OUR COMMITMENT", "We stand behind every unit we ship. Our 28-year reputation is built on the promise that \"Wholesale\" should never mean a compromise on quality or support."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-white p-10 border border-outline-variant group hover:border-primary transition-all duration-300">
                  <div className="w-16 h-16 bg-primary-container text-white flex items-center justify-center mb-8">
                    <MaterialIcon name={icon} className="text-4xl" />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-4">{title}</h3>
                  <p className="font-body-md text-on-surface-variant">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* UK Imports */}
        <section className="py-24 bg-inverse-surface text-white">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <img className="w-full aspect-video object-cover border-4 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC2NmNFcZJ_TW8NFlk0T6sWq3SCw1G5s7uLHMIfE3p6aXONt6BgDAaNZJeSrW7ohf5Zaee1IR-Apah0sQ-iMieq0GuzxNuFil0Z0JS5_R-OpXA2_5YWG3f69LWr5-rTCqx1Om7sCXMO1HHOPRV3vewSvboFWI3vE0ydvY09yfXjd-Qoc0ZLn9mrstATWxl0erIyZUzJeQNu6cJyrNX0EwgQuf6OPkH4oy_CRPX4vjnEoCK-VoQVf0WNQ" />
                  <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
                    <span className="font-display-lg text-white block leading-none">100%</span>
                    <span className="font-label-bold uppercase tracking-widest">UK Imported</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="font-headline-md text-headline-md mb-6 uppercase">The UK Procurement Advantage</h2>
                <p className="text-surface-variant font-body-lg mb-8 leading-relaxed">
                  By sourcing directly from major UK corporate channels, we ensure that our inventory consists of premium-grade equipment that has been maintained to the highest enterprise standards.
                </p>
                <ul className="space-y-4">
                  {["Authentic Grade-A Stock", "Ethical Sourcing", "Enterprise Configurations"].map((t) => (
                    <li key={t} className="flex items-start gap-4">
                      <MaterialIcon name="check_circle" className="text-primary" />
                      <div>
                        <h4 className="font-label-bold text-white">{t}</h4>
                        <p className="text-sm text-outline-variant">{t === "Authentic Grade-A Stock" ? "Only equipment meeting stringent cosmetic and functional criteria enters our supply chain." : t === "Ethical Sourcing" ? "Transparent procurement paths from established UK technology partners." : "Laptops built for performance, featuring professional-grade specs and durability."}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tighter">Our End-to-End Workflow</h2>
              <p className="text-on-surface-variant mt-2">The rigorous process behind every Zia Wholesale delivery.</p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2 hidden lg:block" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative z-10">
                {[
                  ["01", "flight_takeoff", "UK Procurement", "Strategic selection of premium enterprise stock from established UK corporate channels and liquidations."],
                  ["02", "inventory_2", "Secure Import", "Insured logistics and customs clearance through specialized handlers to ensure hardware integrity during transit."],
                  ["03", "fact_check", "Quality Inspection", "Rigorous 24-point hardware and software testing by our certified technicians at our local facility."],
                  ["04", "local_shipping", "Distribution", "Nationwide shipping to retailers and corporate clients with complete warranty documentation."],
                ].map(([num, icon, title, desc]) => (
                  <div key={num} className="group">
                    <div className="bg-white border-2 border-outline-variant p-8 relative transition-all duration-300 group-hover:border-primary group-hover:-translate-y-2">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-inverse-surface text-white flex items-center justify-center font-bold">{num}</div>
                      <div className="text-primary mb-4 flex justify-center"><MaterialIcon name={icon} className="text-5xl" /></div>
                      <h3 className="font-label-bold text-center mb-4 uppercase">{title}</h3>
                      <p className="text-sm text-center text-on-surface-variant">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-container">
          <div className="max-w-max-width mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <h2 className="font-headline-md text-headline-md mb-2 uppercase">Ready to elevate your inventory?</h2>
              <p className="font-body-lg">Partner with the region's most trusted UK laptop importer.</p>
            </div>
            <Link href="/wholesale" className="sharp-gradient-btn text-white px-12 py-5 font-label-bold text-label-bold uppercase tracking-widest shadow-xl">
              Become a Partner
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}