export const metadata = {
  title: "Syna.cc",
  description: "Best Free Discord Bot",
  openGraph: {
    type: 'website',
    url: 'https://www.syna.cc/',
    title: 'Syna.cc',
    description: 'Best Free Discord Bot',
    images: [
      {
        url: 'https://hichnefu.sirv.com/Screenshot%202024-10-08%20144509.png',
        width: 1920,
        height: 1080,
        alt: 'Syna.cc Discord Bot'
      },
    ],
  },
  // no x
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
