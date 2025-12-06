import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Python & AI Bootcamp for Kids",
  description: "Join our free 5-day Python and AI bootcamp for ages 8-14. Learn programming fundamentals, AI concepts, and build real projects. 100% free, online format.",
  keywords: ["python bootcamp for kids", "free coding camp", "AI bootcamp", "learn python free", "kids programming course", "summer coding bootcamp"],
  alternates: {
    canonical: "https://cognitiolearning.org/programs/python",
  },
  openGraph: {
    title: "Free Python & AI Bootcamp | Cognitio Learning",
    description: "5-day free bootcamp teaching Python programming and AI to kids ages 8-14. Online format, beginner-friendly, project-based learning.",
    url: "https://cognitiolearning.org/programs/python",
  },
};

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
