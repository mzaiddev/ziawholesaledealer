import MaterialIcon from "../../components/MaterialIcon";
import WhatsAppButton from "../../components/WhatsAppButton";

export default function Contact() {
  return (
    <>
      {/* Mobile */}
      <main className="md:hidden bg-background text-on-surface font-body-md">
        {/* Hero */}
        <section className="relative h-[400px] flex items-center bg-primary-container overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318478-fd82226a00f6?w=1200')" }} />
          </div>
          <div className="relative z-10 px-margin-mobile w-full text-center">
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-white mb-4 uppercase">Contact Us</h1>
            <p className="text-on-primary-container font-body-md max-w-md mx-auto">Get in touch with Pakistan's premier wholesale laptop dealer</p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-margin-mobile bg-surface">
          <div className="max-w-max-width mx-auto">
            <div className="space-y-8">
              {/* WhatsApp */}
              <a href="https://wa.me/923169648707" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-white border border-outline-variant hover:border-primary transition-all">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M12.04 2.41c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.08 0 4.1-.57 5.81-1.59l3.12 1.05-.99-2.91c1.27-1.6 2.09-3.53 2.09-5.6 0-5.52-4.48-10-10-10zM12.04 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M16.59 15.61c-.39-.19-2.18-1.05-2.53-1.18-.35-.13-.6-.19-.85.19-.25.38-.94 1.18-.94 1.18s-.09.19-.09.48c0 .48.58.68.58.68s.35 0 .58-.09c.22-.09.51-.35.6-.58.09-.22.09-.48.09-.73 0-.25-.09-.58-.25-.73-.16-.19-.35-.19-.58-.19H9.5c-.48 0-.58 0-.58.58v5.8c0 .48.58.58.58.58h5.8c.48 0 .58 0 .58-.58v-1.15c0-.48-.09-.58-.58-.58z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface uppercase">WhatsApp</h3>
                  <p className="text-primary font-body-md">+92 316 9648707</p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+923005866725" className="flex items-center gap-4 p-6 bg-white border border-outline-variant hover:border-primary transition-all">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <MaterialIcon name="phone" className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface uppercase">Call Us</h3>
                  <p className="text-primary font-body-md">+92 300 5866725</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-6 bg-white border border-outline-variant">
                <div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0">
                  <MaterialIcon name="location_on" className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="font-label-bold text-label-bold text-on-surface uppercase">Location</h3>
                  <p className="text-on-surface-variant font-body-md">CHARSADDA KPK SARDHERI RAILWAY STATION DISTRICT AND TEHSAIL CHARSADDA, Peshawar, Pakistan, 25000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8 px-margin-mobile bg-white">
          <div className="max-w-max-width mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.268608963096!2d71.8399697!3d34.165049499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9351c43507eff%3A0x70e12db5dd170df9!2sZia%20computer!5e0!3m2!1sen!2s!4v1783967707191!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Zia Computer Location"
            />
          </div>
        </section>
      </main>

      {/* Desktop */}
      <div className="hidden md:block">
        {/* Hero */}
        <section className="relative h-[500px] flex items-center bg-primary-container overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318478-fd82226a00f6?w=1200')" }} />
          </div>
          <div className="relative z-10 w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="max-w-2xl">
              <h1 className="font-display-lg text-display-lg text-white mb-6 uppercase">Contact Our Team</h1>
              <p className="text-on-primary-container font-body-lg">We're here to help with your wholesale laptop needs. Reach out via WhatsApp, phone, or visit our location in Charsadda, KPK.</p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-24 bg-surface">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* WhatsApp Card */}
              <a href="https://wa.me/923169648707" target="_blank" rel="noopener noreferrer" className="bg-white p-12 border border-outline-variant hover:border-primary transition-all text-center group">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
                    <path d="M12.04 2.41c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.08 0 4.1-.57 5.81-1.59l3.12 1.05-.99-2.91c1.27-1.6 2.09-3.53 2.09-5.6 0-5.52-4.48-10-10-10zM12.04 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M16.59 15.61c-.39-.19-2.18-1.05-2.53-1.18-.35-.13-.6-.19-.85.19-.25.38-.94 1.18-.94 1.18s-.09.19-.09.48c0 .48.58.68.58.68s.35 0 .58-.09c.22-.09.51-.35.6-.58.09-.22.09-.48.09-.73 0-.25-.09-.58-.25-.73-.16-.19-.35-.19-.58-.19H9.5c-.48 0-.58 0-.58.58v5.8c0 .48.58.58.58.58h5.8c.48 0 .58 0 .58-.58v-1.15c0-.48-.09-.58-.58-.58z" />
                  </svg>
                </div>
                <h3 className="font-label-bold text-label-bold text-on-surface uppercase mb-2">WhatsApp</h3>
                <p className="text-primary font-body-lg">+92 316 9648707</p>
              </a>

              {/* Phone Card */}
              <a href="tel:+923005866725" className="bg-white p-12 border border-outline-variant hover:border-primary transition-all text-center group">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MaterialIcon name="phone" className="text-white text-4xl" />
                </div>
                <h3 className="font-label-bold text-label-bold text-on-surface uppercase mb-2">Call Us</h3>
                <p className="text-primary font-body-lg">+92 300 5866725</p>
              </a>

              {/* Location Card */}
              <div className="bg-white p-12 border border-outline-variant text-center">
                <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto mb-6">
                  <MaterialIcon name="location_on" className="text-white text-4xl" />
                </div>
                <h3 className="font-label-bold text-label-bold text-on-surface uppercase mb-2">Address</h3>
                <p className="text-on-surface-variant font-body-md">CHARSADDA KPK SARDHERI RAILWAY STATION DISTRICT AND TEHSAIL CHARSADDA, Peshawar, Pakistan, 25000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-white">
          <div className="w-full px-margin-desktop max-w-max-width mx-auto">
            <div className="mb-8">
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase mb-2">Find Us</h2>
              <div className="w-16 h-1 bg-primary" />
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.268608963096!2d71.8399697!3d34.165049499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d9351c43507eff%3A0x70e12db5dd170df9!2sZia%20computer!5e0!3m2!1sen!2s!4v1783967707191!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Zia Computer Location"
              className="shadow-lg"
            />
          </div>
        </section>
      </div>
    </>
  );
}