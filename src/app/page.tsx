'use client';

import Landing from "@/components/section/landing";
import WhyItMatters from "@/components/section/whyitmatters";
import ThePlugin from "@/components/section/theplugin";
import HowItWorks from "@/components/section/howitworks";
import ControlPanel from "@/components/section/controlpanel";

export default function Home() {

  return (
    <main className={`flex flex-col gap-67`}>
      <Landing/>
      <WhyItMatters/>
      <ThePlugin/>
      <HowItWorks/>
      <ControlPanel/>
    </main>
  );
}
