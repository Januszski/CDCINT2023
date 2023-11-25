import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ISEtricity Energy",
  description:
    "Web application for management of the Isetricity midwestern infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
