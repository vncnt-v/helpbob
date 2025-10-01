'use client';

import Image from "next/image";
import { useState } from "react";

const Footer = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="absolute inset-0 -z-10">
      <Image
        src="/images/preview.png"
        alt="Background"
        width={1200}
        height={5665}
        priority
        onLoad={() => setLoaded(true)}
        className={`w-full h-auto transition-opacity duration-1000 ease-in-out ${
          loaded ? "opacity-50" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Footer;
