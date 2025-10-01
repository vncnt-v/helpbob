'use client';

import Image from "next/image";
import { useState } from "react";

export default function ControlPanel() {
    const [loaded, setLoaded] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            "title": "Fully customizable",
            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        },
        {
            "title": "Fully customizable",
            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        },
        {
            "title": "Fully customizable",
            "text": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        }
    ];

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-[85vw] mx-auto overflow-hidden`}>
            <div className={`flex flex-col content-center justify-content mb-[5vw]`}>
                <p className={`uppercase text-center mb-3`}>Bob's control panel</p>
                <h2 className={`text-headline text-center max-w-[840px] mx-auto`}>Push, click, done – compliance made playful.</h2>
            </div>
            <div className={`grid grid-cols-2 content-center mx-auto overflow-hidden`}>
                <div className={`col-span-1 flex items-center`}>
                    <Image
                        src="/images/controlpanel.png"
                        alt=""
                        width={614}
                        height={685}
                        priority
                        onLoad={() => setLoaded(true)}
                        className={`w-full h-auto transition-opacity duration-1000 ease-in-out ${
                            loaded ? "opacity-100" : "opacity-0"
                        }`}
                    />
                </div>
                <div className={`col-span-1 flex flex-col gap-[1.7vw] py-5 pl-20 pr-4`}>
                    {faqs.map((faq, index) => (
                        <div
                        key={index}
                        className=""
                        >
                        <button
                            onClick={() => toggle(index)}
                            className="w-full flex justify-between items-center p-4 text-left font-medium uppercase border border-primary overflow-hidden bg-[#FCD536]"
                        >
                            {faq.title}
                            <span className={`transition-transform ${openIndex === index ? "rotate-45" : "rotate-0"}`}>
                            +
                            </span>
                        </button>
                        <div
                            className={`transition-all duration-500 ease-in-out border border-t-0 border-primary bg-[#FCD01C] ${
                            openIndex === index ? "max-h-96 opacity-100 px-[10%] py-[5%] mb-3" : "max-h-0 opacity-0 px-[10%] py-[0]"
                            } overflow-hidden`}
                        >
                            <p className="">{faq.text}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
