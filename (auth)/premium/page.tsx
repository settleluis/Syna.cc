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

"use client"; 

export default function PremiumPage() {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center" data-aos="fade-up">
        <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl">Coming Soon...</h1>
        <p
          className="mb-8 text-xl text-indigo-200/65"
          data-aos="fade-up"
          data-aos-delay={200}
          >
          $ $ $
        </p>
      </main>
    );
  }