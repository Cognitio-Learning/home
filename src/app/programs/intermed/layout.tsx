import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Intermediate Data Science & ML Bootcamp",
  description: "Join our free 5-day intermediate bootcamp covering Pandas, data visualization, and machine learning. Build real ML models and analyze datasets. 100% free, online format.",
  keywords: ["intermediate python bootcamp", "data science for kids", "machine learning bootcamp", "pandas tutorial", "free ML course", "scikit-learn bootcamp"],
  alternates: {
    canonical: "https://cognitiolearning.org/programs/intermed",
  },
  openGraph: {
    title: "Free Intermediate Data Science & ML Bootcamp | Cognitio Learning",
    description: "5-day free bootcamp teaching data analysis with Pandas, visualization, and machine learning. Intermediate level, project-based learning.",
    url: "https://cognitiolearning.org/programs/intermed",
  },
};

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
