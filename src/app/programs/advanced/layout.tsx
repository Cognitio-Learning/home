import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Advanced Deep Learning & AI Bootcamp",
  description: "Join our free 5-day advanced bootcamp covering neural networks, computer vision with CNNs, NLP, and AI deployment. Build and deploy production AI applications. 100% free, online format.",
  keywords: ["advanced AI bootcamp", "deep learning for students", "neural networks bootcamp", "tensorflow keras tutorial", "computer vision course", "NLP bootcamp", "free AI course"],
  alternates: {
    canonical: "https://cognitiolearning.org/programs/advanced",
  },
  openGraph: {
    title: "Free Advanced Deep Learning & AI Bootcamp | Cognitio Learning",
    description: "5-day free bootcamp teaching neural networks, CNNs, NLP, and production AI deployment. Advanced level, hands-on projects with TensorFlow.",
    url: "https://cognitiolearning.org/programs/advanced",
  },
};

export default function PythonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
