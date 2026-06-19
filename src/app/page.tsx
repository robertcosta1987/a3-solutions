import { Hero } from "@/components/sections/Hero";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Process } from "@/components/sections/Process";
import { Modular } from "@/components/sections/Modular";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Industries } from "@/components/sections/Industries";
import { Solutions } from "@/components/sections/Solutions";
import { Products360 } from "@/components/sections/Products360";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Process />
      <Modular />
      <Services />
      <BeforeAfter />
      <Industries />
      <Solutions />
      <Products360 />
      <FinalCTA />
    </>
  );
}
