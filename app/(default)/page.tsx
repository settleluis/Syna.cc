export const metadata = {
  title: "Syna",
  description: "idk",
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";
import Capabilities from "@/components/capabilities";
import PageIllustration from "@/components/page-illustration";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Capabilities />
      <Cta />
    </>
  );
}
