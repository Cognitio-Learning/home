import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python & AI Curriculum",
  description: "Explore our 5-day Python and AI curriculum. Day-by-day lessons covering Python basics, control structures, functions, AI concepts, and hands-on projects for kids.",
  alternates: {
    canonical: "https://cognitiolearning.org/programs/python/content",
  },
  openGraph: {
    title: "Python & AI Curriculum | Cognitio Learning",
    description: "Complete 5-day curriculum: Python basics, control structures, functions, AI concepts, and project building for young learners.",
    url: "https://cognitiolearning.org/programs/python/content",
  },
};

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
