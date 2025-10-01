'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

export default function WhyItMatters() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div id="why" className={`grid grid-cols-2 content-center w-[70vw] mx-auto overflow-hidden`}>
        <div className={`col-span-1 flex items-center`}>
            <Image
                src="/images/whyitmatters.png"
                alt=""
                width={614}
                height={685}
                priority
                onLoad={() => setLoaded(true)}
                className={`ms-[10%] w-[62%] h-auto transition-opacity duration-1000 ease-in-out ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
        <div className={`col-span-1 flex flex-col gap-[1vw] py-5`}>
            <p className={`uppercase`}>Why it matters</p>
            <h2 className={`text-headline`}>Accessibility isn't<br/>optional anymore.</h2>
            <div className={`pl-1 flex flex-col gap-[2vw] mt-[3vw]`}>
                <p className={`mb-1 max-w-[28vw]`}>Accessibility became EU and US law in summer 2025.<br/>The risk? $75,000 per violation and 1.5 billion customers lost. The fix? One plugin.</p>
                <Link
                    href="/"
                    className={`primary-btn mr-auto`}
                >
                    Protect me from fines
                </Link>
            </div>
        </div>
    </div>
  );
}
