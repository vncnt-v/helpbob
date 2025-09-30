import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inriaSans = localFont({
  src: [
    {
      path: "../../public/fonts/InriaSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSansLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSansBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/InriaSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/InriaSansLightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/InriaSansBoldItalic.otf",
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
  themeColor: "#FBCB03",
  appleWebApp: {
    capable: true,
    title: "Help Bob",
    statusBarStyle: "default",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
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
          {children}
        <Footer />
      </body>
    </html>
  );
}
