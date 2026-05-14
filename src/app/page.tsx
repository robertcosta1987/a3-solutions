import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Industries } from "@/components/sections/Industries";
import { Solutions } from "@/components/sections/Solutions";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Process />
      <Services />
      <BeforeAfter />
      <Industries />
      <Solutions />
      <FinalCTA />
    </>
  );
}
