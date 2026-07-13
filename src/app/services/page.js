"use client";
import Link from "next/link";
import MaterialIcon from "../../components/MaterialIcon";

export default function Services() {
  return (
    <>
      {/* =========== MOBILE =========== */}
      <main className="md:hidden bg-background text-on-surface font-body-md overflow-x-hidden">
        {/* Hero */}
        <section className="relative h-[530px] flex items-center overflow-hidden bg-inverse-surface">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="w-full h-full opacity-60 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBezN6c8ubjBiCMx8nm-qtL5VkDYirPYidZhwSfDmp9qnUnespPIH9-IbFo44CaP8iv0U5Xdg-dwC0HIX2gEHWTY0YP9JfdepEk20tz1daRkgSxS5CSiLQjbmiSvp3XJknmlKwkVrkj7EtutiDNk8OnEAM8-tfE9OWZlDH_WZ-aIi-vUxkt4b7ps5mg2hYnjSd9VX8sNJ0ZXaC6JQoF8OZHhqXcnxcLSRAINrIaELAojE1TetcYSomxuw')" }} />
          </div>
          <div className="relative z-10 px-margin-mobile w-full">
            <div className="max-w-xl">
              <span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-label-bold text-[10px] tracking-widest mb-4">ENGINEERING EXCELLENCE</span>
              <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-6 uppercase">Technical Services & Support</h1>
              <p className="font-body-md text-white/90 mb-8 max-w-md">Beyond distribution: We provide professional-grade testing, procurement strategy, and technical infrastructure for enterprise hardware solutions.</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-surface-container-lowest py-12 px-margin-mobile border-b border-outline-variant">
          <div className="grid grid-cols-2 gap-8">
            {[["100%", "Quality Tested"], ["24h", "Procurement Lead"], ["28+", "Years Experience"], ["50k+", "Units Serviced"]].map(([val, label]) => (
              <div key={label} className="border-l-4 border-primary pl-4">
                <div className="font-headline-md text-headline-md text-primary">{val}</div>
                <p className="font-label-bold text-[12px] text-on-surface-variant uppercase">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 px-margin-mobile space-y-8">
          <div className="mb-12">
            <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase mb-2">Our Core Capabilities</h2>
            <div className="h-1 w-12 bg-primary" />
          </div>
          {[
            ["inventory_2", "Wholesale Supply", "Bulk distribution of high-performance laptop hardware and components, optimized for resellers and large enterprises.", ["Competitive Tiered Pricing", "Global Logistics Network"]],
            ["business", "Corporate Procurement", "Customized hardware sourcing strategies tailored to corporate infrastructure requirements and budget cycles.", ["Dedicated Account Managers", "Tech Lifecycle Planning"]],
            ["fact_check", "Quality Testing", "Rigorous multi-point diagnostic testing in our certified lab ensures 0% failure rates on all shipped wholesale units.", ["Stress & Thermal Benchmarking", "Individual Certification Tags"]],
          ].map(([icon, title, desc, items]) => (
            <div key={title} className="bg-white border border-outline-variant p-8 box-shadow-hover transition-all">
              <MaterialIcon name={icon} className="text-primary text-4xl mb-6" />
              <h3 className="font-headline-sm text-headline-sm mb-4 uppercase">{title}</h3>
              <p className="font-body-md text-on-surface-variant mb-6">{desc}</p>
              <ul className="space-y-3 mb-8">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-3 font-body-md text-[14px]">
                    <MaterialIcon name="check_circle" className="text-primary text-sm" />{it}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-primary font-label-bold text-label-bold flex items-center gap-2">LEARN MORE <MaterialIcon name="arrow_forward" /></Link>
            </div>
          ))}
        </section>

        {/* Workflow */}
        <section className="py-20 bg-inverse-surface text-white px-margin-mobile overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"><MaterialIcon name="settings" className="text-[200px]" /></div>
          <div className="mb-12 relative z-10">
            <h2 className="font-headline-sm text-headline-sm uppercase mb-2">Operational Workflow</h2>
            <div className="h-1 w-12 bg-primary" />
          </div>
          <div className="space-y-12 relative z-10">
            {[
              ["01", "Strategic Consultation", "Analysis of your technical requirements and volume needs by our senior consultants."],
              ["02", "Precision Sourcing", "Inventory selection from our global wholesale network and direct brand partnerships."],
              ["03", "Rigorous Lab Testing", "Every unit undergoes technical verification and performance stress testing."],
              ["04", "Rapid Logistics", "Secure, tracked shipping to your facility with integrated customs clearance support."],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 border border-primary flex items-center justify-center font-headline-sm text-primary">{num}</div>
                <div>
                  <h4 className="font-label-bold text-label-bold uppercase mb-2">{title}</h4>
                  <p className="font-body-md text-white/70">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-margin-mobile text-center bg-surface-container">
          <h2 className="font-display-lg-mobile text-display-lg-mobile uppercase mb-6">Ready to Optimize?</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-md mx-auto">Scale your operations with the industry's most reliable wholesale partner. Established 1996.</p>
          <div className="flex flex-col gap-4">
            <Link href="/contact" className="sharp-gradient-btn text-white py-5 px-10 font-label-bold text-label-bold tracking-[0.2em] uppercase shadow-xl inline-block">REQUEST CONSULTATION</Link>
            <Link href="/products" className="border border-white text-white py-5 px-10 font-label-bold text-label-bold tracking-[0.2em] uppercase hover:bg-white hover:text-on-background transition-colors inline-block text-center">VIEW ALL SERVICES</Link>
          </div>
        </section>
      </main>

      {/* =========== DESKTOP =========== */}
      <div className="hidden md:block bg-surface text-on-surface font-body-md overflow-x-hidden">
        {/* Hero */}
        <section className="relative h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-inverse-surface/70 z-10" />
            <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPX-5-MVKdIow2U8fxLsYLm4fcmq-pi8SVxuD0Qaaxv76lTunyEKJTz-6y9DNGkK_O9YSs8XxtlAtmVfVVQWeN6eee_iFekADmr8wgmYHUMVBciYMArpQEUKsv6aTHGHzuQiWxAlN5bnatz1e56aJSAImXIdKAVxoRrV9vDv-fdB8w5M5gmL9GU4R43y3JiPg-SuFPLTM7gzx99LHzMTFJMeUBf_C6uaLnLfdO74ugUFG8iClXgxgdJw')" }} />
          </div>
          <div className="relative z-20 px-margin-desktop max-w-max-width mx-auto w-full">
            <div className="max-w-3xl">
              <span className="inline-block bg-primary text-white text-[12px] font-bold tracking-[0.2em] px-3 py-1 mb-6 uppercase">ESTABLISHED 1996</span>
              <h1 className="font-display-lg text-display-lg text-white mb-6 uppercase leading-tight">PROFESSIONAL WHOLESALE SERVICES</h1>
              <p className="font-body-lg text-body-lg text-surface-variant mb-10 max-w-2xl">Beyond distribution: providing end-to-end support, quality assurance, and technical expertise for Pakistan's hardware ecosystem.</p>
              <div className="flex gap-4">
                <Link href="/products" className="sharp-gradient-btn text-white font-label-bold text-label-bold px-8 py-4 uppercase tracking-widest shadow-lg">OUR CAPABILITIES</Link>
                <Link href="/contact" className="border border-white text-white font-label-bold text-label-bold px-8 py-4 uppercase tracking-widest hover:bg-white hover:text-on-background transition-all">CONTACT EXPERTS</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Grid */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto">
          <div className="mb-16 border-l-4 border-primary pl-6">
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">Service Portfolio</h2>
            <p className="text-on-surface-variant font-body-md">Precision-engineered solutions for retailers, corporations, and government entities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {[
              ["inventory_2", "Wholesale Supply & Distribution", "Reliable bulk inventory management for hardware retailers. We maintain consistent stock levels of premium UK-sourced electronics."],
              ["business", "Corporate Procurement", "Custom hardware configurations tailored to business requirements. Scale your IT infrastructure with reliable, tested hardware."],
              ["fact_check", "Multi-Stage Quality Testing", "Every unit undergoes our rigorous 25-point inspection protocol in our ISO-aligned laboratory before dispatch."],
              ["local_shipping", "Logistics & Nationwide Delivery", "Secure, insured shipping across Pakistan. Our specialized logistics network ensures safe arrival of sensitive components."],
              ["support_agent", "Technical Support", "Comprehensive after-sales warranty and direct consultation with our hardware engineering team."],
              ["account_balance", "Educational & Government Tenders", "Specialized procurement solutions for large-scale institutional projects with full compliance documentation."],
            ].map(([icon, title, desc]) => (
              <div key={title} className="service-card border border-outline-variant bg-white p-8 transition-all duration-300 group flex flex-col h-full">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center mb-8 border border-outline-variant">
                  <MaterialIcon name={icon} className="text-primary" />
                </div>
                <h3 className="font-headline-sm text-headline-sm mb-4 uppercase">{title}</h3>
                <p className="text-on-surface-variant font-body-md mb-8 flex-grow">{desc}</p>
                <Link href="/contact" className="mt-auto flex items-center text-primary font-label-bold text-label-bold uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                  LEARN MORE <MaterialIcon name="arrow_forward" className="ml-2 text-sm" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-inverse-surface py-24">
          <div className="px-margin-desktop max-w-max-width mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-md text-headline-md text-white uppercase mb-4">Operational Workflow</h2>
                <p className="text-surface-variant font-body-md">A transparent look into our rigorous end-to-end operational pipeline that ensures zero-defect delivery.</p>
              </div>
              <div className="text-primary font-label-bold text-display-lg opacity-10 leading-none">PROCESS</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border border-outline/30 relative">
              {[
                ["01 / SOURCE", "UK Sourcing", "Direct acquisition from premium technology hubs in the United Kingdom ensuring genuine component lineage."],
                ["02 / VALIDATE", "Quality Lab", "Stress testing, component verification, and aesthetic grading in our temperature-controlled facility."],
                ["03 / PREPARE", "Secure Packing", "Industrial-grade anti-static packaging and custom reinforcement for maximum transit protection."],
                ["04 / DEPLOY", "Nationwide Shipping", "Real-time tracked delivery across major urban hubs and remote regions via our logistics fleet."],
              ].map(([step, title, desc]) => (
                <div key={step} className="p-8 border-b md:border-b-0 md:border-r border-outline/30 hover:bg-on-surface transition-colors">
                  <div className="text-primary font-bold mb-4 opacity-50">{step}</div>
                  <h4 className="text-white font-headline-sm text-xl mb-4 uppercase tracking-tighter">{title}</h4>
                  <p className="text-surface-variant text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {[["28+", "Years Expertise"], ["15K+", "Active Retailers"], ["100%", "Tested Units"], ["24H", "Avg Dispatch"]].map(([val, label]) => (
              <div key={label} className="p-10 border border-outline-variant hover:border-primary transition-colors">
                <div className="font-display-lg text-display-lg text-on-surface leading-none mb-2">{val}</div>
                <div className="font-label-bold text-label-bold text-primary uppercase">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-margin-desktop max-w-max-width mx-auto mb-24">
          <div className="bg-surface-container-high border border-primary p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">Ready to optimize your supply chain?</h2>
              <p className="text-on-surface-variant font-body-lg">Partner with Pakistan's most trusted hardware wholesaler for enterprise-grade service and reliability.</p>
            </div>
            <Link href="/contact" className="sharp-gradient-btn text-white font-label-bold text-label-bold px-12 py-5 uppercase tracking-[0.2em] shadow-lg">START PROCUREMENT</Link>
          </div>
        </section>
      </div>
    </>
  );
}