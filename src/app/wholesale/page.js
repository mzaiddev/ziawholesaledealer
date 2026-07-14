"use client";
import Link from "next/link";
import MaterialIcon from "../../components/MaterialIcon";

export default function Wholesale() {
  return (
    <>
      {/* =========== MOBILE =========== */}
      <main className="md:hidden bg-background text-on-surface font-body-md overflow-x-hidden">
        {/* Hero */}
        <section className="relative h-[530px] flex items-center overflow-hidden bg-inverse-surface">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full opacity-40 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqEfDynjFMBE3nSIyleLSBMXDjQyEdY2SBaWK1RFTObAaRnek0cL9C_vwisQpHQ4KGdR8sykmtNQ9vp5LX-MEl4Y3bbyHV253FIOWDfbDpmPgIZYronQlrUeZRoKXsvKi-xIpkUZiy8ECXAtA8-ygs-LcNVsVOsLW40xnRO3fo3X0RF8Y9MUr8JCHl1O5p9RkzemapbQ0SXLx5a1dQu0UTNNYHDLNznBw6DYx-VtjRdSomVoKDN0AR5w')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" />
          </div>
          <div className="relative z-10 px-margin-mobile w-full">
            <div className="max-w-xl">
              <div className="inline-block bg-primary text-white px-3 py-1 font-label-bold text-[12px] tracking-widest uppercase mb-4">
                BULK PRICING
              </div>
              <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-6 uppercase tracking-tight">
                Wholesale &<br />
                Bulk Orders
              </h1>
              <p className="font-body-md text-white/80 mb-8 max-w-md">
                Powering computer shops, educational institutions, and
                government departments across Pakistan with premium UK-imported
                laptops since 1996.
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="sharp-gradient-btn text-white py-4 font-label-bold text-center uppercase tracking-widest shadow-lg inline-block"
                >
                  Start Your Inquiry
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white py-4 font-label-bold uppercase tracking-widest hover:bg-white hover:text-on-background text-center transition-colors inline-block "
                >
                  View Benefits
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-inverse-surface py-12 px-4 border-t border-outline/20">
          <div className="grid grid-cols-2 gap-y-10 gap-x-4 text-center">
            <div>
              <div className="text-[36px] font-bold text-primary-container">
                28+
              </div>
              <div className="font-label-bold text-[11px] text-surface-variant uppercase tracking-widest">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-[36px] font-bold text-primary-container">
                500+
              </div>
              <div className="font-label-bold text-[11px] text-surface-variant uppercase tracking-widest">
                Active Retailers
              </div>
            </div>
            <div>
              <div className="text-[36px] font-bold text-primary-container">
                15k+
              </div>
              <div className="font-label-bold text-[11px] text-surface-variant uppercase tracking-widest">
                Units Monthly
              </div>
            </div>
            <div>
              <div className="text-[36px] font-bold text-primary-container">
                100%
              </div>
              <div className="font-label-bold text-[11px] text-surface-variant uppercase tracking-widest">
                Quality Tested
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 px-margin-mobile space-y-6">
          <div className="mb-8">
            <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-2">
              Wholesale Tiers
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="bg-white border border-outline-variant p-8 box-shadow-hover transition-all">
            <MaterialIcon
              name="inventory_2"
              className="text-primary text-4xl mb-6"
            />
            <h3 className="font-headline-sm text-xl mb-3 uppercase">
              Bulk Order Discounts
            </h3>
            <p className="text-on-surface-variant font-body-md mb-4">
              Minimum 50+ units. Tier-1 pricing with dedicated account
              management.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Volume-based discount brackets
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Free consolidated shipping
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Custom branding options
              </li>
            </ul>
          </div>

          <div className="bg-white border-2 border-primary p-8 box-shadow-hover transition-all">
            <div className="bg-primary text-white text-[10px] font-bold px-3 py-1 inline-block mb-4 uppercase tracking-widest">
              Most Popular
            </div>
            <MaterialIcon
              name="business"
              className="text-primary text-4xl mb-6"
            />
            <h3 className="font-headline-sm text-xl mb-3 uppercase">
              Corporate Supply
            </h3>
            <p className="text-on-surface-variant font-body-md mb-4">
              Asset tagging, imaging, and priority SLA for enterprise clients.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Wholesale pricing at 20+ units
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Pre-installed software imaging
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                On-site drop & asset tagging
              </li>
            </ul>
          </div>

          <div className="bg-white border border-outline-variant p-8 box-shadow-hover transition-all">
            <MaterialIcon
              name="school"
              className="text-primary text-4xl mb-6"
            />
            <h3 className="font-headline-sm text-xl mb-3 uppercase">
              Educational Packages
            </h3>
            <p className="text-on-surface-variant font-body-md mb-4">
              Special pricing for schools, colleges, and training institutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Educational discount tiers
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Extended warranty options
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MaterialIcon
                  name="check_circle"
                  className="text-primary text-sm"
                />
                Bulk licensing support
              </li>
            </ul>
          </div>
        </section>
        <section className="py-24 bg-inverse-surface text-white">
          <div className="w-full px-margin-mobile max-w-max-width mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img
                    className="w-full aspect-video object-cover border-4 border-primary"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC2NmNFcZJ_TW8NFlk0T6sWq3SCw1G5s7uLHMIfE3p6aXONt6BgDAaNZJeSrW7ohf5Zaee1IR-Apah0sQ-iMieq0GuzxNuFil0Z0JS5_R-OpXA2_5YWG3f69LWr5-rTCqx1Om7sCXMO1HHOPRV3vewSvboFWI3vE0ydvY09yfXjd-Qoc0ZLn9mrstATWxl0erIyZUzJeQNu6cJyrNX0EwgQuf6OPkH4oy_CRPX4vjnEoCK-VoQVf0WNQ"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
                    <span className="font-display-lg text-white block leading-none">
                      UK
                    </span>
                    <span className="font-label-bold uppercase tracking-widest">
                      Imported
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-headline-md text-headline-md mb-8 uppercase">
                  Why Partner With Us?
                </h2>
                <div className="space-y-8">
                  {[
                    [
                      "flight_takeoff",
                      "Direct UK Imports",
                      "We source directly from UK corporate channels, eliminating middlemen and passing the savings to you.",
                    ],
                    [
                      "fact_check",
                      "Rigorous Testing",
                      "Every laptop undergoes 25-point quality inspection. We guarantee Grade-A hardware for all wholesale orders.",
                    ],
                    [
                      "bolt",
                      "Fast Fulfillment",
                      "Orders processed within 24 hours. Nationwide delivery network ensures your inventory arrives on schedule.",
                    ],
                    [
                      "account_balance",
                      "Competitive Margins",
                      "Our tiered pricing model maximizes your profit margins. The more you buy, the more you save.",
                    ],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="flex items-start gap-6">
                      <MaterialIcon
                        name={icon}
                        className="text-primary text-3xl flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-headline-sm text-xl mb-2 uppercase">
                          {title}
                        </h4>
                        <p className="text-surface-variant font-body-md">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-surface-container-low">
          <div className="w-full px-margin-mobile max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tight mb-4">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto" />
            </div>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto text-center mb-12">
              From inquiry to delivery in four simple steps. Our streamlined
              wholesale process ensures you get what you need, when you need it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
              <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant -translate-y-1/2 z-0" />
              {[
                [
                  "01",
                  "Submit Inquiry",
                  "Tell us your requirements and target quantity through our simple quote request form.",
                ],
                [
                  "02",
                  "Get a Quote",
                  "Our team responds within 24 hours with competitive wholesale pricing and stock availability.",
                ],
                [
                  "03",
                  "Place Order",
                  "Confirm your order and choose from flexible payment options tailored to your business.",
                ],
                [
                  "04",
                  "Receive Delivery",
                  "Securely packed and shipped via our logistics network with real-time tracking.",
                ],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="relative z-10 bg-white border border-outline-variant p-8 text-center group hover:border-primary transition-all"
                >
                  <div className="w-14 h-14 bg-primary-container text-white flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    {num}
                  </div>
                  <h4 className="font-label-bold text-label-bold uppercase mb-4">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-white text-center">
          <h3 className="font-headline-sm uppercase mb-6">
            Ready to Scale Your Inventory?
          </h3>
          <p className="mb-10 opacity-90">
            Get access to our exclusive wholesale price list.
          </p>
          <Link
            href="/contact"
            className="bg-white text-primary px-8 py-4 font-label-bold uppercase tracking-widest inline-block"
          >
            Download Wholesale Catalog
          </Link>
        </section>
      </main>

      {/* =========== DESKTOP =========== */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCODfuOoYs-swWxW-9xlXfQ6MBji-ysNm-shD73NnkKxRUHikxE_cmdC0ulx_qWLnW2pO5aV1FBChSLIGNuaxpvrcmWCzA2WmlQfw1VNqHKtP0i07f0BTi8Mdso2eaChNIrLlafDsygztTr73-qdodsc3rZvZEBfCyXCuWBygXjUoRAM_czDGj6T7JvBcNdGJh16xTGUdldDvgkIUHrfcOYo_K552kYwdDS_k_jsh4fPPPZHwvRShoFXw')",
              }}
            />
            <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
          </div>
          <div className="relative z-10 w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary-container text-white px-4 py-1 font-label-bold mb-6 rounded-sm uppercase text-[12px]">
                ESTABLISHED 1996
              </span>
              <h1 className="font-display-lg text-display-lg text-white mb-6 leading-tight uppercase tracking-tight">
                Bulk Orders &<br />
                <span className="text-primary-container">Retailer Supply</span>
              </h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-10 opacity-90 max-w-2xl">
                Powering computer shops, educational institutions, and
                government departments across Pakistan with premium UK-imported
                laptops since 1996. We make wholesale simple, transparent, and
                profitable.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  href="/contact"
                  className="sharp-gradient-btn text-white font-label-bold px-10 py-4 uppercase tracking-wider shadow-lg"
                >
                  Start Your Inquiry
                </Link>
                <Link
                  href="/about"
                  className="border border-white text-white font-label-bold px-10 py-4 uppercase tracking-wider hover:bg-white hover:text-on-background transition-all"
                >
                  View Benefits
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {[
                  ["verified", "Bulk Discounts"],
                  ["local_shipping", "Free Shipping"],
                  ["support_agent", "Dedicated Support"],
                  ["inventory_2", "Large Inventory"],
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
                ["28+", "Years Experience"],
                ["500+", "Active Retailers"],
                ["15k+", "Units Monthly"],
                ["100%", "Quality Tested"],
              ].map(([t, l]) => (
                <div
                  key={l}
                  className="text-center p-6 border-r border-outline-variant/20 last:border-0"
                >
                  <div className="font-display-lg text-primary-fixed-dim mb-2">
                    {t}
                  </div>
                  <div className="font-label-bold text-label-bold text-outline-variant uppercase">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-24 bg-white">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tight mb-4">
                Wholesale Service Tiers
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {[
                [
                  "inventory_2",
                  "Bulk Order Discounts",
                  "Minimum 50+ units. Tiered pricing based on volume with dedicated account management and priority allocation of high-demand models.",
                  [
                    "Volume-based discount brackets",
                    "Free consolidated shipping",
                    "Custom branding options",
                    "Priority stock allocation",
                  ],
                ],
                [
                  "business",
                  "Corporate Supply",
                  "Featured tier with premium benefits for enterprise clients. Asset tagging, custom imaging, and expedited SLA.",
                  [
                    "Wholesale pricing at 20+ units",
                    "Pre-installed software imaging",
                    "On-site drop & asset tagging",
                    "Priority technical support",
                  ],
                  true,
                ],
                [
                  "school",
                  "Educational Packages",
                  "Special pricing for schools, colleges, and training institutions. Extended warranties and bulk licensing support.",
                  [
                    "Educational discount tiers",
                    "Extended warranty options",
                    "Bulk licensing support",
                    "Flexible payment terms",
                  ],
                ],
              ].map(([icon, title, desc, features, featured]) => (
                <div
                  key={title}
                  className={`p-10 border ${featured ? "border-primary" : "border-outline-variant"} ${featured ? "bg-surface-container-low" : "bg-white"} card-hover transition-all duration-300 relative`}
                >
                  {featured && (
                    <div className="bg-primary text-white text-xs font-bold px-4 py-1 inline-block absolute -top-3 left-8 uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <MaterialIcon
                    name={icon}
                    className="text-primary-container text-5xl mb-8"
                  />
                  <h3 className="font-headline-sm text-xl mb-4 uppercase">
                    {title}
                  </h3>
                  <p className="text-on-surface-variant font-body-md mb-8">
                    {desc}
                  </p>
                  <ul className="space-y-4">
                    {features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 font-body-md"
                      >
                        <MaterialIcon
                          name="check_circle"
                          className="text-primary text-sm"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-inverse-surface text-white">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img
                    className="w-full aspect-video object-cover border-4 border-primary"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC2NmNFcZJ_TW8NFlk0T6sWq3SCw1G5s7uLHMIfE3p6aXONt6BgDAaNZJeSrW7ohf5Zaee1IR-Apah0sQ-iMieq0GuzxNuFil0Z0JS5_R-OpXA2_5YWG3f69LWr5-rTCqx1Om7sCXMO1HHOPRV3vewSvboFWI3vE0ydvY09yfXjd-Qoc0ZLn9mrstATWxl0erIyZUzJeQNu6cJyrNX0EwgQuf6OPkH4oy_CRPX4vjnEoCK-VoQVf0WNQ"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden md:block">
                    <span className="font-display-lg text-white block leading-none">
                      UK
                    </span>
                    <span className="font-label-bold uppercase tracking-widest">
                      Imported
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="font-headline-md text-headline-md mb-8 uppercase">
                  Why Partner With Us?
                </h2>
                <div className="space-y-8">
                  {[
                    [
                      "flight_takeoff",
                      "Direct UK Imports",
                      "We source directly from UK corporate channels, eliminating middlemen and passing the savings to you.",
                    ],
                    [
                      "fact_check",
                      "Rigorous Testing",
                      "Every laptop undergoes 25-point quality inspection. We guarantee Grade-A hardware for all wholesale orders.",
                    ],
                    [
                      "bolt",
                      "Fast Fulfillment",
                      "Orders processed within 24 hours. Nationwide delivery network ensures your inventory arrives on schedule.",
                    ],
                    [
                      "account_balance",
                      "Competitive Margins",
                      "Our tiered pricing model maximizes your profit margins. The more you buy, the more you save.",
                    ],
                  ].map(([icon, title, desc]) => (
                    <div key={title} className="flex items-start gap-6">
                      <MaterialIcon
                        name={icon}
                        className="text-primary text-3xl flex-shrink-0"
                      />
                      <div>
                        <h4 className="font-headline-sm text-xl mb-2 uppercase">
                          {title}
                        </h4>
                        <p className="text-surface-variant font-body-md">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-surface-container-low">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-md text-headline-md uppercase tracking-tight mb-4">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-primary-container mx-auto" />
            </div>
            <p className="text-on-surface-variant font-body-md max-w-2xl mx-auto text-center mb-12">
              From inquiry to delivery in four simple steps. Our streamlined
              wholesale process ensures you get what you need, when you need it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
              <div className="hidden md:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-outline-variant -translate-y-1/2 z-0" />
              {[
                [
                  "01",
                  "Submit Inquiry",
                  "Tell us your requirements and target quantity through our simple quote request form.",
                ],
                [
                  "02",
                  "Get a Quote",
                  "Our team responds within 24 hours with competitive wholesale pricing and stock availability.",
                ],
                [
                  "03",
                  "Place Order",
                  "Confirm your order and choose from flexible payment options tailored to your business.",
                ],
                [
                  "04",
                  "Receive Delivery",
                  "Securely packed and shipped via our logistics network with real-time tracking.",
                ],
              ].map(([num, title, desc]) => (
                <div
                  key={num}
                  className="relative z-10 bg-white border border-outline-variant p-8 text-center group hover:border-primary transition-all"
                >
                  <div className="w-14 h-14 bg-primary-container text-white flex items-center justify-center mx-auto mb-6 font-bold text-xl">
                    {num}
                  </div>
                  <h4 className="font-label-bold text-label-bold uppercase mb-4">
                    {title}
                  </h4>
                  <p className="text-on-surface-variant font-body-md text-sm">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-container">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
            <div>
              <h2 className="font-headline-md text-white mb-2 uppercase">
                Ready to grow your business?
              </h2>
              <p className="text-white/90 font-body-lg">
                Get access to our latest wholesale inventory and pricing.
              </p>
            </div>
            <Link
              href="/contact"
              className="sharp-gradient-btn text-white font-label-bold px-12 py-5 uppercase tracking-widest shadow-lg"
            >
              Request Wholesale Access
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
