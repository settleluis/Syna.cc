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
import Footer from "@/components/ui/footer";

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <> 
      <div className="custom-features-layout">{children}</div>
      <Footer />
    </>
  );
}