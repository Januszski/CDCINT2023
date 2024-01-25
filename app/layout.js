import "./globals.css";
import Nav from "/components/Nav";


export const metadata = {
  title: "ISEtricity Energy",
  description:
    "Web application for management of the Isetricity midwestern infrastructure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {/* <nav style={{ minHeight: "8vh", maxHeight: "8vh" }}> */}
        <Nav />
        {/* </nav> */}
        {children}
      </body>
    </html>
  );
}
