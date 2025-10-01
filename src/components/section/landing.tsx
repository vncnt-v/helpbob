'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`min-h-[60vw] grid grid-cols-6 pt-30 content-center w-[77vw] mx-auto translate-x-[6vw] overflow-hidden`}>
        <div className={`col-span-4 flex flex-col gap-[2vw] mb-2 py-5`}>
            <h1 className={`text-white text-main-headline leading-28 text-shadow-[6px_6px_0_rgba(0,0,0,0.1)] mb-[3vw]`}>This is Bob.<br/>He is blind.</h1>
            <div className={`pl-2 flex flex-col gap-[2vw]`}>
            <p className={`mb-1`}>Bob isn’t alone — 1.5 billion people browse the web with a disability.</p>
            <p className={`leading-7 mb-6`}>Make your site accessible with just one plugin.<br/>This way you don’t just open doors for Bob — you open your business to billions.</p>
            <Link
                href="/"
                className={`primary-btn mr-auto`}
            >
                Get the plugin
            </Link>
            </div>
        </div>
        <div className={`col-span-2`}>
            <Image
            src="/images/bob_main.png"
            alt=""
            width={614}
            height={685}
            priority
            onLoad={() => setLoaded(true)}
            className={`scale-169 -translate-x-[10%] translate-y-[36%] w-full h-auto transition-opacity duration-1000 ease-in-out ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
            />
        </div>
    </div>
  );
}
