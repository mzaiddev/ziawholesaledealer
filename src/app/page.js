"use client";
import { useEffect } from "react";
import Link from "next/link";
import MaterialIcon from "../components/MaterialIcon";

export default function Home() {
  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute("data-target"));
          let current = 0;
          const increment = target / 50;
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.innerText = Math.ceil(current) + (target > 50 ? "+" : "");
              setTimeout(updateCounter, 30);
            } else {
              counter.innerText = target + (target > 50 ? "+" : "");
            }
          };
          updateCounter();
          observer.unobserve(counter);
        }
      });
    }, observerOptions);
    document
      .querySelectorAll(".counter")
      .forEach((c) => counterObserver.observe(c));
  }, []);

  return (
    <>
      {/* ============ MOBILE ============ */}
      <div className="md:hidden pb-20">
        {/* Hero */}
        <section className="relative h-[751px] flex items-center justify-center overflow-hidden bg-inverse-surface">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqEfDynjFMBE3nSIyleLSBMXDjQyEdY2SBaWK1RFTObAaRnek0cL9C_vwisQpHQ4KGdR8sykmtNQ9vp5LX-MEl4Y3bbyHV253FIOWDfbDpmPgIZYronQlrUeZRoKXsvKi-xIpkUZiy8ECXAtA8-ygs-LcNVsVOsLW40xnRO3fo3X0RF8Y9MUr8JCHl1O5p9RkzemapbQ0SXLx5a1dQu0UTNNYHDLNznBw6DYx-VtjRdSomVoKDN0AR5w')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" />
          <div className="relative z-10 px-4 text-center">
            <div className="inline-block bg-primary text-white px-3 py-1 font-label-bold text-[12px] tracking-widest uppercase mb-4">
              Est. 1996
            </div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-white mb-6 uppercase tracking-tight">
              Legacy Tech. <br />
              <span className="text-primary-container">Wholesale</span> Power.
            </h2>
            <p className="font-body-md text-surface-variant mb-8 max-w-sm mx-auto">
              The UK's premier source for imported enterprise hardware. Direct
              wholesale pricing for high-performance computing.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/products"
                className="sharp-gradient-btn text-white py-4 font-label-bold uppercase tracking-widest shadow-lg inline-block"
              >
                Browse Inventory
              </Link>
              <Link
                href="/wholesale"
                className="border border-white text-white py-4 font-label-bold uppercase tracking-widest hover:bg-white hover:text-on-background transition-colors inline-block text-center"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="bg-surface py-12 px-4 border-b border-outline-variant">
          <div className="grid grid-cols-1 gap-8">
            <div className="flex items-start gap-4">
              <MaterialIcon
                name="history_edu"
                className="text-primary text-[32px]"
              />
              <div>
                <h4 className="font-label-bold text-on-surface uppercase text-[16px]">
                  Since 1996
                </h4>
                <p className="text-on-surface-variant text-[14px]">
                  Nearly three decades of excellence in the wholesale market.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MaterialIcon
                name="flight_takeoff"
                className="text-primary text-[32px]"
              />
              <div>
                <h4 className="font-label-bold text-on-surface uppercase text-[16px]">
                  UK Imported
                </h4>
                <p className="text-on-surface-variant text-[14px]">
                  Directly sourced premium inventory from UK enterprise hubs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MaterialIcon name="sell" className="text-primary text-[32px]" />
              <div>
                <h4 className="font-label-bold text-on-surface uppercase text-[16px]">
                  Wholesale Prices
                </h4>
                <p className="text-on-surface-variant text-[14px]">
                  Unbeatable bulk pricing for retailers and corporate clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-inverse-surface py-16 px-4 text-white">
          <div className="grid grid-cols-2 gap-y-12 gap-x-4 text-center">
            <div>
              <div className="text-[40px] font-bold text-primary-container mb-1">
                28+
              </div>
              <div className="font-label-bold text-surface-variant text-[12px] uppercase tracking-widest">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-primary-container mb-1">
                50k+
              </div>
              <div className="font-label-bold text-surface-variant text-[12px] uppercase tracking-widest">
                Units Sold
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-primary-container mb-1">
                1.2k
              </div>
              <div className="font-label-bold text-surface-variant text-[12px] uppercase tracking-widest">
                Global Partners
              </div>
            </div>
            <div>
              <div className="text-[40px] font-bold text-primary-container mb-1">
                100%
              </div>
              <div className="font-label-bold text-surface-variant text-[12px] uppercase tracking-widest">
                Verified QC
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 px-4 bg-background">
          <div className="mb-12">
            <div className="w-12 h-1 bg-primary mb-4" />
            <h3 className="font-headline-sm text-on-surface uppercase mb-4">
              Why Choose Zia
            </h3>
            <p className="text-on-surface-variant font-body-md">
              Precision wholesale infrastructure built for modern enterprises.
            </p>
          </div>
          <div className="space-y-6">
            <div className="bg-surface-container-lowest border border-outline-variant p-8 box-shadow-hover transition-all">
              <div className="mb-6">
                <MaterialIcon
                  name="verified"
                  className="text-primary text-[40px]"
                />
              </div>
              <h5 className="font-headline-sm text-[20px] mb-3 uppercase">
                Rigorous QC
              </h5>
              <p className="text-on-surface-variant">
                Every unit undergoes a 40-point technical inspection before
                being listed for wholesale.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-8 box-shadow-hover transition-all">
              <div className="mb-6">
                <MaterialIcon
                  name="local_shipping"
                  className="text-primary text-[40px]"
                />
              </div>
              <h5 className="font-headline-sm text-[20px] mb-3 uppercase">
                Global Logistics
              </h5>
              <p className="text-on-surface-variant">
                Secured international shipping lanes ensuring your inventory
                arrives on schedule, every time.
              </p>
            </div>
            <div className="bg-surface-container-lowest border border-outline-variant p-8 box-shadow-hover transition-all">
              <div className="mb-6">
                <MaterialIcon
                  name="support_agent"
                  className="text-primary text-[40px]"
                />
              </div>
              <h5 className="font-headline-sm text-[20px] mb-3 uppercase">
                Dealer Support
              </h5>
              <p className="text-on-surface-variant">
                Dedicated account managers for high-volume partners to
                streamline your procurement.
              </p>
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-20 bg-surface-container">
          <div className="px-4">
            <div className="relative mb-8">
              <div className="aspect-square overflow-hidden border-8 border-white shadow-xl">
                <img
                  className="w-full h-full object-cover  transition-all duration-500"
                  src="/ower-image.png"
                  alt="Founder & CEO"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary px-6 py-4 text-white">
                <span className="font-label-bold text-[12px] uppercase block tracking-tighter">
                  Founder & CEO
                </span>
              </div>
            </div>
            <div className="pt-6">
              <h3 className="font-headline-sm text-on-surface uppercase mb-4">
                Meet Our Founder
              </h3>
              <p className="font-body-md text-on-surface-variant italic mb-6 leading-relaxed">
                &ldquo;For over 28 years, Zia Wholesale has been built on a
                single principle: providing businesses with the hardware they
                need to succeed without the unnecessary markups of
                retail.&rdquo;
              </p>
              <p className="text-on-surface font-label-bold uppercase text-[14px]">
                Zia Ullah
              </p>
              <p className="text-on-surface-variant text-[12px]">
                Chief Executive Officer
              </p>
            </div>
          </div>
        </section>

        {/* Brand Carousel */}
        <section className="py-16 bg-white overflow-hidden border-t border-b border-outline-variant">
          <div className="px-4 mb-8 text-center">
            <h4 className="font-label-bold text-[12px] uppercase text-on-surface-variant tracking-[0.2em]">
              Authorized Brand Inventory
            </h4>
          </div>
          <div className="logo-carousel">
            <div className="logo-track space-x-12 items-center">
              {[
                "DELL",
                "HP",
                "LENOVO",
                "APPLE",
                "ASUS",
                "MSI",
                "DELL",
                "HP",
                "LENOVO",
                "APPLE",
                "ASUS",
                "MSI",
              ].map((b, i) => (
                <div
                  key={i}
                  className="w-32 h-12 bg-gray-100 flex items-center justify-center font-bold text-gray-400"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-white text-center">
          <h3 className="font-headline-sm uppercase mb-6">
            Ready to scale your inventory?
          </h3>
          <p className="mb-10 opacity-90">
            Access our exclusive price list and seasonal wholesale offers.
          </p>
          <Link
            href="/wholesale"
            className="sharp-gradient-btn text-white py-4 font-label-bold uppercase tracking-widest shadow-lg inline-block"
          >
            Get Wholesale Price List
          </Link>
        </section>
      </div>

      {/* ============ DESKTOP ============ */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCODfuOoYs-swWxW-9xlXfQ6MBji-ysNm-shD73NnkKxRUHikxE_cmdC0ulx_qWLnW2pO5aV1FBChSLIGNuaxpvrcmWCzA2WmlQfw1VNqHKtP0i07f0BTi8Mdso2eaChNIrLlafDsygztTr73-qdodsc3rZvZEBfCyXCuWBygXjUoRAM_czDGj6T7JvBcNdGJh16xTGUdldDvgkIUHrfcOYo_K552kYwdDS_k_jsh4fPPPZHwvRShoFXw')",
              }}
            />
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          </div>
          <div className="relative z-10 w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary-container text-white px-4 py-1 text-label-bold font-label-bold mb-6 rounded-sm">
                ESTABLISHED 1996
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-6 leading-tight uppercase tracking-tight">
                Pakistan's Trusted <br />
                <span className="text-primary-container">
                  Wholesale Laptop
                </span>{" "}
                Dealer
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-10 opacity-90 max-w-2xl">
                Importing Premium UK Laptops and Supplying Retailers, Computer
                Shops, Educational Institutions, and Businesses Across Pakistan
                at Competitive Wholesale Prices.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/products"
                  className="sharp-gradient-btn text-white font-label-bold px-10 py-4 uppercase tracking-wider shadow-lg"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white font-label-bold px-10 py-4 uppercase tracking-wider hover:bg-white hover:text-on-background transition-all"
                >
                  Contact Us
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                {[
                  ["workspace_premium", "Since 1996"],
                  ["public", "UK Imported"],
                  ["sell", "Wholesale Prices"],
                  ["inventory_2", "Bulk Orders"],
                  ["verified", "Quality Tested"],
                  ["shield_with_heart", "Trusted Dealer"],
                ].map(([icon, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-white"
                  >
                    <MaterialIcon
                      name={icon}
                      className="text-primary-container"
                      fill={1}
                    />
                    <span className="font-label-bold text-label-bold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-inverse-surface py-12 border-b border-outline">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                ["30", "Years Experience"],
                ["5000", "Laptops Sold"],
                ["1000", "Happy Customers"],
                ["100", "Retail Partners"],
              ].map(([t, l]) => (
                <div
                  key={l}
                  className="text-center p-6 border-r border-outline-variant/20 last:border-0"
                >
                  <div
                    className="font-display-lg text-primary-fixed-dim mb-2 counter"
                    data-target={t}
                  >
                    0
                  </div>
                  <div className="font-label-bold text-label-bold text-outline-variant uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className="py-24 bg-white">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2 aspect-square relative group">
                <div className="absolute -inset-4 border-2 border-primary-container/20 group-hover:border-primary-container transition-colors" />
                <img
                  alt="Founder of Zia Wholesale"
                  className="w-full h-full object-cover rounded-none relative z-10 shadow-xl   transition-all duration-500"
                  src="/ower-image.png"
                />
                <div className="absolute bottom-0 right-0 bg-primary-container p-8 z-20">
                  <span className="text-white font-display-lg leading-none">
                    ZIA
                  </span>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="text-primary font-label-bold uppercase tracking-widest mb-4 block">
                  Our Leadership
                </span>
                <h2 className="font-headline-md text-headline-md mb-2 text-on-surface">
                  Meet the Founder
                </h2>
                <h3 className="font-headline-sm text-headline-sm text-primary-container mb-8">
                  Leading with Trust Since 1996
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6 leading-relaxed">
                  For more than three decades, the founder of Zia Laptop
                  Wholesale Dealer has built a reputation for honesty, quality,
                  and customer satisfaction. What started as a small venture in
                  1996 has evolved into one of Pakistan's most reliable
                  wholesale hubs for premium UK imported hardware.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
                  Our philosophy is simple: supply the best technology at prices
                  that allow our retail partners to thrive. We understand the
                  technical nuances of professional-grade laptops and personally
                  oversee the quality inspection of every batch that arrives
                  from the UK.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-px bg-outline" />
                  <span className="font-label-bold italic text-on-surface-variant">
                    Built on Integrity, Driven by Quality
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/30">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tight mb-4">
                Why Industry Leaders Choose Zia
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                [
                  "flight_takeoff",
                  "Direct UK Imports",
                  "Sourced directly from premium UK corporate sources, ensuring authentic hardware and superior grade quality.",
                ],
                [
                  "rule_folder",
                  "Strict Testing",
                  "Every laptop undergoes a rigorous 25-point technical inspection before being dispatched to our partners.",
                ],
                [
                  "bolt",
                  "Fast Response",
                  "Dedicated account managers providing real-time inventory updates and rapid shipment processing across Pakistan.",
                ],
                [
                  "account_balance",
                  "Volume Pricing",
                  "Highly competitive tiered wholesale pricing models designed to maximize profit margins for our retailers.",
                ],
              ].map(([icon, title, desc]) => (
                <div
                  key={title}
                  className="bg-white p-8 border border-outline-variant card-hover transition-all duration-300"
                >
                  <MaterialIcon
                    name={icon}
                    className="text-primary-container text-4xl mb-6"
                  />
                  <h4 className="font-headline-sm text-xl mb-4 uppercase">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-24 bg-white">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-label-bold uppercase tracking-widest mb-2 block">
                Global Partners
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Premium Brands We Deal In
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
              {["DELL", "HP", "LENOVO", "APPLE", "ACER", "MICROSOFT"].map(
                (b) => (
                  <div
                    key={b}
                    className="grayscale hover:grayscale-0 transition-all p-8 border border-outline-variant/30 flex justify-center"
                  >
                    <span className="font-headline-md text-on-surface-variant">
                      {b}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary-container">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h2 className="font-headline-md text-white mb-2 uppercase">
                Ready to elevate your inventory?
              </h2>
              <p className="text-white/90 font-body-lg">
                Get access to our latest UK imported stock list today.
              </p>
            </div>
            <Link
              href="/wholesale"
              className="sharp-gradient-btn text-white font-label-bold px-12 py-5 uppercase tracking-widest shadow-lg"
            >
              DOWNLOAD STOCK LIST
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
