import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface dark:bg-black border-t border-outline text-surface-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16">
        <div className="col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="Zia Wholesale Logo" className="h-10 w-auto" />
            <span className="font-headline-sm text-headline-sm font-bold text-primary-fixed">ZIA WHOLESALE</span>
          </div>
          <p className="font-body-md text-body-md opacity-80 mb-8">Pakistan's premier destination for high-quality UK imported laptops. Partnering with businesses for over 25 years.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-lg bg-outline/20 flex items-center justify-center hover:bg-primary-container transition-colors">
              <MaterialIcon name="share" className="text-white" />
            </a>
<a href="mailto:chdkhanzia@gmail.com" className="w-10 h-10 rounded-lg bg-outline/20 flex items-center justify-center hover:bg-primary-container transition-colors">
              <MaterialIcon name="alternate_email" className="text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-outline/20 flex items-center justify-center hover:bg-primary-container transition-colors">
              <MaterialIcon name="call" className="text-white" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6 uppercase tracking-widest">Navigation</h4>
<ul className="space-y-3">
            <li><Link href="/" className="font-body-md text-body-md hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="font-body-md text-body-md hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/brands" className="font-body-md text-body-md hover:text-white transition-colors">Brands</Link></li>
            <li><Link href="/wholesale" className="font-body-md text-body-md hover:text-white transition-colors">Wholesale</Link></li>
            <li><Link href="/services" className="font-body-md text-body-md hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/contact" className="font-body-md text-body-md hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6 uppercase tracking-widest">Support</h4>
          <ul className="space-y-3">
            <li><a className="font-body-md text-body-md hover:text-white transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="font-body-md text-body-md hover:text-white transition-colors" href="#">Terms of Service</a></li>
            <li><a className="font-body-md text-body-md hover:text-white transition-colors" href="#">Shipping Info</a></li>
            <li><a className="font-body-md text-body-md hover:text-white transition-colors" href="#">Warranty Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-label-bold mb-6 uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MaterialIcon name="location_on" className="text-primary-fixed text-sm mt-1" />
              <span className="font-body-md text-body-md">CHARSADDA KPK SARDHERI RAILWAY STATION</span>
            </li>
            <li className="flex items-start gap-3">
              <MaterialIcon name="phone" className="text-primary-fixed text-sm mt-1" />
              <a href="tel:+923005866725" className="font-body-md text-body-md hover:text-white transition-colors">+92 300 5866725</a>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-primary-fixed text-sm mt-1 w-4 h-4">
                <path d="M12.04 2.41c-5.52 0-10 4.48-10 10s4.48 10 10 10c2.08 0 4.1-.57 5.81-1.59l3.12 1.05-.99-2.91c1.27-1.6 2.09-3.53 2.09-5.6 0-5.52-4.48-10-10-10zM12.04 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M16.59 15.61c-.39-.19-2.18-1.05-2.53-1.18-.35-.13-.6-.19-.85.19-.25.38-.94 1.18-.94 1.18s-.09.19-.09.48c0 .48.58.68.58.68s.35 0 .58-.09c.22-.09.51-.35.6-.58.09-.22.09-.48.09-.73 0-.25-.09-.58-.25-.73-.16-.19-.35-.19-.58-.19H9.5c-.48 0-.58 0-.58.58v5.8c0 .48.58.58.58.58h5.8c.48 0 .58 0 .58-.58v-1.15c0-.48-.09-.58-.58-.58z"/>
              </svg>
              <a href="https://wa.me/923169648707" target="_blank" rel="noopener noreferrer" className="font-body-md text-body-md hover:text-white transition-colors">+92 316 9648707</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline/20 py-8">
        <div className="w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-secondary-fixed text-body-md opacity-60">© 1996-2024 Zia Laptop Wholesale Dealer. All rights reserved.</div>
          <div className="flex gap-6">
            <span className="text-surface-variant opacity-60 font-label-bold text-label-bold uppercase tracking-widest">Made in UK</span>
            <span className="text-surface-variant opacity-60 font-label-bold text-label-bold uppercase tracking-widest">ISO 9001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}