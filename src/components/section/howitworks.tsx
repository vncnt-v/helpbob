'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

export default function HowItWorks() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="how" className={`grid grid-cols-7 content-center w-[65.5vw] mx-auto overflow-hidden`}>
        <div className={`col-span-4 flex flex-col gap-[1vw] py-10`}>
            <p className={`uppercase`}>Powered by AI and magic</p>
            <h2 className={`text-headline`}>Our AI makes accessibility effortless.</h2>
            <div className={`pl-1 flex flex-col gap-[2vw] mt-[3vw]`}>
                <p className={`mb-1`}>It automatically adapts colors and styles so the plugin looks perfect on your website. It also helps optimize your site step by step — making sure your website is accessible.</p>
                <Link
                    href="/"
                    className={`primary-btn mr-auto`}
                >
                    Start the magic
                </Link>
            </div>
        </div>
        <div className={`col-span-3 flex items-center`}>
            <Image
                src="/images/howitworks.png"
                alt=""
                width={614}
                height={685}
                priority
                onLoad={() => setLoaded(true)}
                className={`scale-155 translate-x-[15%] w-full h-auto transition-opacity duration-1000 ease-in-out ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
    </div>
  );
}
