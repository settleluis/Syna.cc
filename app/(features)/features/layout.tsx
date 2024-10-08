export const metadata = {
  title: "Syna",
  description: "Features",
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