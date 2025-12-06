import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Cognitio Learning's mission to provide free computer science education for kids. Founded by high schoolers, we teach Python and AI to middle schoolers. Contact us to get involved.",
  alternates: {
    canonical: "https://cognitiolearning.org/about",
  },
  openGraph: {
    title: "About Cognitio Learning | Our Mission ",
    description: "Empowering the next generation with free coding education. Learn about our mission and get in touch with our team.",
    url: "https://cognitiolearning.org/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
