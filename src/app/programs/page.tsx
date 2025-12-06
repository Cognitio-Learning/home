import Link from "next/link";

const programs = [
    {
        slug: "beginner",
        badgeColor: "bg-green-600",
        title: "Beginner Python & AI",
        level: "Beginner",
        summary:
            "Start from zero with Python fundamentals, logic, and AI basics. Perfect for first-time coders.",
        days: "5 days",
        focus: ["Python basics", "Problem solving", "AI concepts"],
    },
    {
        slug: "intermed",
        badgeColor: "bg-blue-600",
        title: "Intermediate Data Science & ML",
        level: "Intermediate",
        summary:
            "Work with real datasets, analyze with Pandas, visualize with Seaborn, and train ML models.",
        days: "5 days",
        focus: ["Pandas", "Data viz", "Scikit-Learn"],
    },
    {
        slug: "advanced",
        badgeColor: "bg-purple-600",
        title: "Advanced Deep Learning & AI",
        level: "Advanced",
        summary:
            "Build neural networks, train CNNs and NLP models, and ship production-ready AI apps.",
        days: "5 days",
        focus: ["TensorFlow/Keras", "CNNs & NLP", "Deployment"],
    },
];

export default function Programs() {
    return (
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            {/* Header */}
            <div className="border-b border-black p-12 lg:p-24 bg-gray-50">
                <div className="inline-block px-3 py-1 border border-black text-xs font-bold uppercase tracking-widest mb-6 bg-purple-600 text-white">
                    Programs
                </div>
                <h1 className="text-5xl lg:text-7xl font-medium leading-[0.9] tracking-tighter mb-6 uppercase">
                    Choose Your Path
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl font-normal">
                    Three free bootcamps designed to meet you where you are—whether
                    you&apos;re writing your first line of code or building advanced AI.
                </p>
            </div>

            {/* Programs grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border-b border-black">
                {programs.map((program, index) => (
                    <div
                        key={program.slug}
                        className={`border-b border-black p-8 lg:p-10 flex flex-col justify-between gap-8 ${index % 3 !== 2 ? "xl:border-r" : ""
                            } ${index % 2 === 0 && index !== programs.length - 1 ? "md:border-r" : ""}`}
                    >
                        <div className={`px-3 py-1 border border-black text-[11px] font-bold uppercase tracking-widest ${program.badgeColor} text-white self-start`}>
                            {program.level}
                        </div>
                        <h2 className="text-3xl font-bold uppercase tracking-tight leading-tight mb-4">
                            {program.title}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">{program.summary}</p>

                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                                <span className="w-2 h-2 bg-purple-600 rounded-full" />
                                {program.days} · 100% Free · Online
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {program.focus.map((item) => (
                                    <div
                                        key={item}
                                        className="border border-black px-3 py-2 text-xs font-bold uppercase tracking-wide bg-white"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <Link href={`/programs/${program.slug}`}>
                                <button className="w-full sm:w-auto bg-black text-white px-6 py-3 font-bold uppercase tracking-wider hover:bg-purple-600 transition-colors">
                                    View Program
                                </button>
                            </Link>
                            <Link href={`/programs/${program.slug}/content`}>
                                <button className="w-full sm:w-auto bg-white text-black px-6 py-3 font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors underline">
                                    View Curriculum
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA footer */}
            <div className="p-12 lg:p-20 bg-purple-600 text-white border-b border-black">
                <div className="max-w-3xl">
                    <h3 className="text-3xl lg:text-4xl font-medium tracking-tight uppercase mb-4">
                        Not sure where to start?
                    </h3>
                    <p className="text-white/90 text-lg mb-6">
                        Tell us your experience level and goals&#8212;our team will place you in
                        the right program and share the next cohort dates.
                    </p>
                    <Link href="/#contact">
                        <button className="bg-white text-purple-700 px-8 py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors border border-white">
                            Talk to Us
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

