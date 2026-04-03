import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-opensans",
});

export const metadata = {
  title: "LifeCare — Fast & Reliable Emergency Services",
  description: "24/7 ambulance services — ICU, basic, air ambulance available.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} font-opensans bg-white`}>
        {children}
      </body>
    </html>
  );
}