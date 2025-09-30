'use client';

import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    return (
      <footer className={``}>
        <div className={`max-width`}>

        </div>
      </footer>
  );
};

export default Footer;