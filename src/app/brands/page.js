"use client";
import Link from "next/link";
import MaterialIcon from "../../components/MaterialIcon";

export default function Brands() {
  return (
    <>
      {/* ============ MOBILE ============ */}
      <div className="md:hidden pb-20">
        {/* Hero */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-inverse-surface">
          <div
            className="absolute inset-0 opacity-40 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBUmL_KsFP97ZV-O8NEIGBziEoosEkeLMBkrl9YXd9Vbc67Rt7Lu4TlPlmWzfcIz-0RH655ig-K3DgarqlKtIomVcFMuO0dNJsrCLGPNbrUeB2TiHueq1DJEA201UMDIkbL-icO8Av_MkjROUlSFO7CIQT2kHWg2QhyA98D6RimMxPIWK_l3WBK0jKs540fjdXe6udjP5NCsBvn1lKQ1BX9NOOP9MvGFOvfP8Rq3Jvy3Ly5oA34rf1kA')",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent" />
          <div className="relative z-10 px-4 text-center">
            <div className="inline-block bg-primary text-white px-3 py-1 font-label-bold text-[12px] tracking-widest uppercase mb-4">
              PREMIUM BRANDS
            </div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-white mb-6 uppercase tracking-tight">
              Global Brand Portfolio
            </h2>
            <p className="font-body-md text-surface-variant mb-8 max-w-sm mx-auto">
              Supplying the world's most reliable technology to retailers and businesses across Pakistan.
            </p>
            <Link href="/wholesale" className="sharp-gradient-btn px-8 py-3 text-white font-label-bold text-label-bold uppercase tracking-wider shadow-lg inline-block">
              REQUEST QUOTE
            </Link>
          </div>
        </section>

        {/* Brand Grid */}
        <section className="py-16 px-4 bg-surface">
          <div className="max-w-max-width mx-auto">
            <div className="mb-12 text-center">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">Our Brands</h2>
              <div className="w-16 h-1 bg-primary mx-auto" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["DELL", "HP", "LENOVO", "APPLE", "ASUS", "MSI", "MICROSOFT", "ACER", "TOSHIBA", "FUJITSU"].map((b, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white border border-outline-variant flex items-center justify-center font-bold text-on-surface-variant hover:border-primary transition-all"
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Brands */}
        <section className="py-16 bg-inverse-surface text-inverse-on-surface">
          <div className="max-w-max-width mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-headline-md text-headline-md uppercase mb-4">Why Our Brands?</h2>
              <p className="text-surface-variant font-body-md">Zia Wholesale bridges the gap between global manufacturers and the Pakistani market.</p>
            </div>
            <div className="flex flex-col gap-8">
              {[
                ["inventory_2", "UK PROCUREMENT", "Direct sourcing from premium UK vendors ensures all inventory meets European quality standards."],
                ["verified_user", "AUTHENTICITY", "Guaranteed genuine parts and systems. We maintain a zero-tolerance policy for counterfeit hardware."],
                ["warehouse", "LARGE INVENTORY", "Unparalleled stock availability across multiple tech categories."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="border-t border-outline/30 pt-6">
                  <div className="text-primary mb-4"><MaterialIcon name={icon} className="text-4xl" /></div>
                  <h4 className="font-headline-sm text-headline-sm mb-3">{title}</h4>
                  <p className="text-surface-variant font-body-md">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 px-4 text-center">
          <h2 className="font-headline-md text-white mb-4 uppercase">Ready to upgrade your inventory?</h2>
          <Link href="/contact" className="sharp-gradient-btn text-white font-label-bold text-label-bold px-8 py-3 uppercase tracking-widest shadow-lg inline-block">
            CONTACT SALES
          </Link>
        </section>
      </div>

      {/* ============ DESKTOP ============ */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[600px] w-full overflow-hidden flex items-center">
          <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBUmL_KsFP97ZV-O8NEIGBziEoosEkeLMBkrl9YXd9Vbc67Rt7Lu4TlPlmWzfcIz-0RH655ig-K3DgarqlKtIomVcFMuO0dNJsrCLGPNbrUeB2TiHueq1DJEA201UMDIkbL-icO8Av_MkjROUlSFO7CIQT2kHWg2QhyA98D6RimMxPIWK_l3WBK0jKs540fjdXe6udjP5NCsBvn1lKQ1BX9NOOP9MvGFOvfP8Rq3Jvy3Ly5oA34rf1kA')" }} />
          <div className="absolute inset-0 bg-inverse-surface/70 z-10" />
          <div className="relative z-20 max-w-max-width mx-auto px-margin-desktop w-full">
            <div className="max-w-2xl border-l-4 border-primary pl-8">
              <h1 className="font-display-lg text-display-lg text-inverse-on-surface mb-6 uppercase tracking-tight">PREMIUM GLOBAL BRANDS</h1>
              <p className="font-body-lg text-body-lg text-surface-variant max-w-xl">Supplying the world's most reliable technology to retailers and businesses across Pakistan. Our legacy of excellence ensures your inventory is powered by industry leaders.</p>
            </div>
          </div>
        </section>

        {/* Brand Grid */}
        <section className="py-24 bg-surface">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-4">Our Brand Portfolio</h2>
                <div className="w-24 h-1 bg-primary" />
              </div>
              <p className="text-on-surface-variant max-w-md font-body-md">Explore our curated selection of tier-1 global manufacturers. We provide direct access to factory-grade inventory and enterprise solutions.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {[
                ["DELL", "Enterprise Reliability", "https://lh3.googleusercontent.com/aida-public/AB6AXuDusZ6uRZ3QVrXsVC5--YJoLYJhnZI2X6WdOzJCgEze8_E_sAYVVhNQZh_PK1T4KpHTyvNIErjKbbM2JzmeWDJG7T2cMr4QMZ8m1ah9G0MUHGixRTYQ_tV9dL013qJgOFWGIPsn2-3zS7Nl2-xkUXRPwH0dG7__7buPydEbMg0OTEZZbZ-_GeIzkqgmQ2GbShsxZYBBStk0SwYNQomRf_5vl8oVwPRd4Sa3Bs3cwFswtzbNdxL2a-H1YQ"],
                ["HP", "Professional Innovation", "https://lh3.googleusercontent.com/aida-public/AB6AXuAnrFZiq8IGwvgKIHYrEn0xu1Stlu5WVsqlejPF0vjPBKngLc2G99_kFDGU_LS5-c2NqvEj8c0yLW8HqSzVvtD_tdWyKiHzC3tsRAB_Ewd2ylPZJpgUSEkzsvE3U7hh6aOazq2izyL1Pz9VVpbKdqado91J6xjmaQjQOCTR8DLABQVLXo-V7dFICy9AX0UPs0uNGcLBy4DbkXTOj5Q2rSvQmj_3c63HKf9LG0BnmO5dsEU9YBfaxXqy0g"],
                ["LENOVO", "Industry-Standard Productivity", "https://lh3.googleusercontent.com/aida-public/AB6AXuDzysgUttsmxIBqn6SDa8BtLFfEKLbLfzUF4jfBZauzcTrLMWONVt5aFyNUWA7708zkfusqVOKNvV21zX89ZUSrROdB27PQZNtKn2t_bHcpGSJnXCUWvVb5Hk3KLCifhx_A3y7VJm2UbvY2lBmKoEkXYSGB8lfwjWhLaIyHgqmHO4HTGi8_oQlmAtoEYnRni9Cqs3xndYNQZbaiF2XmNI-AlfdYIDNxAagPQtCEBIjEmipHUuzbd5TWXg"],
                ["APPLE", "Premium Ecosystems", "https://lh3.googleusercontent.com/aida-public/AB6AXuCw05hP_npvbbrWwt8sxqljKlb-eDZ0w7xzhjZbFJdiZOexEtYkteJmg5cmc1hRoQQKXxZPv3fRiRJN7rwXIOE2lEwDOX6_v9MI3OWuf2Kb0Yd1EhNTe0Xc2cBoE46Lt8N1w91yDdwMrHb2u09eZ_3FpIZ1hP9Pv_g0Fp71dyKU7oEz5moSP3n5Dmg-ha2IG8gCoETp5AzFURThXAxIgZ100mXIXUvHAHnRU00z8as0ZAxm21DqCYAOGA"],
                ["MICROSOFT", "Business Solutions", "https://lh3.googleusercontent.com/aida-public/AB6AXuC42E0EFWv3-7c4JiA8Y_pILQtCWMPol2iy180oO9btbL_wNTnEKyzcGy35zsVqSr2m23mlB0DwFPey4eAxoodrsLnvopjc9auIXt1PnX_gBBANwnM5JbvGo6qYZr3Gbp6lm6f1eXrZmE9OPlf7oLw1Njwj3sIqwghtmsL1c1PeDPPwzs2UniOya8G5qOfx0OPJv0CCaZXNYjPGd72gnR7z89PdNV2AojvrZETla5GiKk6-FrkrVNk8xA"],
                ["ASUS", "Advanced Engineering", "https://lh3.googleusercontent.com/aida-public/AB6AXuBJywkFO9oxQI_Ubi8TA63aHJ0weq7GGbM2BquNkPRIwv52oYUSndPor02T6cOs4VN3b4kLySPUZTLsy96jTcVtcVUo8daL5aLwr9iE9tBC9fKpdCJKRMgk_IrSTwILR7pVZxbxAsbYQN5DCu0rjilG8OzIg6tc7HVqdidCaQB-bkXepK1EDeOnNZUaoT1JVmdPW2s82KbVKYv1U3dr-TUArlYh0gxkR5J1aIWdY5FCP7bZI_pheoO6lg"],
                ["ACER", "Performance Value", "https://lh3.googleusercontent.com/aida-public/AB6AXuB0dvo-NQjGVhjnIl45y4dS1E9uMHU6uN6-J0owBXgfeAAID6IkyCs90r6Y4VzfAbvg81B5GytS2GlIgE4xizuII9mNhqeGdLleN6uuBJV2aKI9g1741AtW6t1vMZeM3Z5i7RPpDdjXRV0QlF1HFJZvkri66ENnMTjpM-Af3jbe35v5KibdHsEe18q2BGE9mNb255hrfVE3BW-RQ6_bxVXMGVom9hInULcYJPL6d3-_W9LZ3juTrbPgnA"],
                ["TOSHIBA", "Legacy Durability", "https://lh3.googleusercontent.com/aida-public/AB6AXuDD35JNhlni7tkHu1azLyQuhJiXaiW5eP3VGmlAyRZRDHqQDP6D9CRdaAE5AaCgxwAzkOpWa1OJbVdihfreopz6llBq_8yqLF_hFCZ8KrUav7ZN7uK784OjS8gM1tF6a1n_moxJqAtT-T0HTHIrSmcY3wEuLReURJ_jtPgwijm_qTjTWXWROSgyAR9wXz70eAa-vd9loaP_xHfcvYO1uVZCvRqaiDBex0B7jzeRqO5AWnWHdtbY-xC0EQ"],
                ["FUJITSU", "Enterprise Infrastructure", "https://lh3.googleusercontent.com/aida-public/AB6AXuB21j51GltMBGwKkiMoLQGoJkvrihCxCaRiA-_kjMCPF5640o-aL9bENBUDtUpMZ3u-r1yhHKkBmGLBPf2DvkKnX7WaYCC8HaS0OON7-UwPdlDfyfnJjjS7JuqfN4Yz6V7Jil-lpW--WgqsfXXfd2xA_MgkgmPvIAGNMpRigIddBa8_O7Q53fCOupEw8PeN20eyP1k2v4JcTAf8up9YJSlHiKGiE13D728uf2SRup5jbTFyMUXdwM0aNA"],
              ].map(([name, tag, img]) => (
                <div key={name} className="brand-card group bg-surface-container-lowest border border-outline-variant p-10 flex flex-col items-center justify-center aspect-square text-center hover:border-primary transition-all duration-300">
                  <div className="brand-logo w-32 h-32 mb-8 flex items-center justify-center">
                    <img className="max-w-full h-auto" src={img} />
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-2">{name}</h3>
                  <p className="text-on-surface-variant font-body-md">{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Our Brands */}
        <section className="py-24 bg-inverse-surface text-inverse-on-surface">
          <div className="max-w-max-width mx-auto px-margin-desktop">
            <div className="text-center mb-16">
              <h2 className="font-display-lg text-headline-md uppercase mb-4 tracking-tight">Why Our Brands?</h2>
              <p className="text-surface-variant max-w-2xl mx-auto font-body-md">Zia Wholesale bridges the gap between global manufacturers and the Pakistani market through rigid quality control and direct procurement pipelines.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                ["inventory_2", "UK PROCUREMENT", "Direct sourcing from premium UK vendors ensures all inventory meets European quality standards and regional compliance protocols."],
                ["verified_user", "AUTHENTICITY", "Guaranteed genuine parts and systems. We maintain a zero-tolerance policy for counterfeit hardware, backed by serial-trackable provenance."],
                ["warehouse", "LARGE INVENTORY", "Unparalleled stock availability across multiple tech categories. Our logistics network ensures consistent supply for high-volume retailers."],
              ].map(([icon, title, desc]) => (
                <div key={title} className="border-t border-outline/30 pt-8">
                  <div className="text-primary mb-6"><MaterialIcon name={icon} className="text-5xl" /></div>
                  <h4 className="font-headline-sm text-headline-sm mb-4">{title}</h4>
                  <p className="text-surface-variant font-body-md">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="max-w-max-width mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-8">
            <h2 className="font-headline-md text-headline-sm text-on-primary text-center md:text-left">READY TO UPGRADE YOUR INVENTORY WITH GLOBAL BRANDS?</h2>
            <Link href="/contact" className="sharp-gradient-btn text-white font-label-bold text-label-bold px-10 py-4 uppercase tracking-widest shadow-lg">
              CONTACT SALES
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}