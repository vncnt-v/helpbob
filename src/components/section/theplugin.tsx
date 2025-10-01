'use client';

import Link from 'next/link';
import Image from "next/image";
import { useState } from "react";

export default function ThePlugin() {
  const [loaded, setLoaded] = useState(false);
  const [loadedShopify, setLoadedShopify] = useState(false);
  const [loadedWordpress, setLoadedWordpress] = useState(false);

  return (
    <div id="theplugin" className={`flex flex-col items-center gap-[1vw] w-[70vw] mx-auto overflow-hidden`}>
        <p className={`uppercase`}>The plugin</p>
        <h2 className={`text-headline mb-4`}>One click. That's it.</h2>
        <Image
            src="/images/theplugin.png"
            alt=""
            width={614}
            height={685}
            priority
            onLoad={() => setLoaded(true)}
            className={`w-[48%] h-auto transition-opacity duration-1000 ease-in-out ${
                loaded ? "opacity-100" : "opacity-0"
            }`}
        />
        <p className={`mb-1 max-w-[39vw] text-center`}>Install our plugin and your site becomes instantly compliant. No coding, no hassle. It also automatically matches your websites style, so that it looks perfect. This way you and Bob can sit back and relax.</p>
        <div className={`flex items-center w-[14vw] gap-[8%] my-5`}>
            <Image
                src="/images/shopify.png"
                alt=""
                width={91}
                height={26}
                priority
                onLoad={() => setLoadedShopify(true)}
                className={`w-[41%] h-auto transition-opacity duration-1000 ease-in-out ${
                    loadedShopify ? "opacity-100" : "opacity-0"
                }`}
            />
            <Image
                src="/images/wordpress.png"
                alt=""
                width={91}
                height={26}
                priority
                onLoad={() => setLoadedShopify(true)}
                className={`w-[51%] h-auto transition-opacity duration-1000 ease-in-out ${
                    loadedShopify ? "opacity-100" : "opacity-0"
                }`}
            />
        </div>
        <Link
            href="/"
            className={`primary-btn mx-auto`}
        >
            Download now
        </Link>
    </div>
  );
}
