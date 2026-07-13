import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "ZIA WHOLESALE | Premium Laptop Distribution",
  description:
    "The UK's premier source for imported enterprise hardware. Direct wholesale pricing for high-performance computing.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-on-background">
        <Navbar />
        <main className="flex-grow  md:pt-0">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}