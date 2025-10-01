import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Preview from "@/components/layout/Preview";

const inriaSans = localFont({
  src: [
    {
      path: "../../public/fonts/InriaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/InriaSans-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/InriaSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    }
  ],
  variable: "--inria-sans",
});

const dinBlack = localFont({
  src: [
    {
      path: "../../public/fonts/DIN-Black.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--din-black",
});


export const metadata: Metadata = {
  title: "Help Bob",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inriaSans.variable} ${dinBlack.variable} antialiased`}>
        <Header/>
        {/* <Preview/> */}
          {children}
        <Footer />
      </body>
    </html>
  );
}
