'use client';

import React, { useState, useEffect } from 'react';

const days = [
    {
        id: 'day-1',
        title: 'Day 1',
        subtitle: 'Introduction to Python',
        content: {
            sections: [
                {
                    title: 'Welcome and course overview',
                    items: [
                        'Introduction to the bootcamp structure',
                        'Setting expectations and goals',
                        'Brief history of Python and its applications'
                    ]
                },
                {
                    title: 'Basic Python concepts',
                    items: [
                        'Variables and data types (integers, floats, strings, booleans)',
                        'Print statements and string formatting',
                        'Basic math operations in Python',
                        'Using the input() function for user interaction'
                    ]
                },
                {
                    title: 'Interactive exercises',
                    items: [
                        'Writing and running simple Python scripts'
                    ]
                },
                {
                    title: 'Hands-on project: Get to Know Someone',
                    description: 'Development of a simple Python script that asks the user for their name, age, and whether they like ice cream or not. The script will then print out a message with this information.'
                }
            ]
        }
    },
    {
        id: 'day-2',
        title: 'Day 2',
        subtitle: 'Python Control Structures',
        content: {
            sections: [
                {
                    title: 'Conditional statements',
                    items: [
                        'If, elif, and else statements',
                        'Comparison operators',
                        'Logical operators (and, or, not)'
                    ]
                },
                {
                    title: 'Loops',
                    items: [
                        'For loops and their applications',
                        'While loops and when to use them',
                        'Loop control statements (break, continue)'
                    ]
                },
                {
                    title: 'Lists and basic list operations',
                    items: [
                        'Creating and accessing list elements',
                        'List methods (append, remove, len, etc.)',
                        'Iterating through lists'
                    ]
                },
                {
                    title: 'Hands-on project: Number Guessing Game',
                    description: 'Students will develop a simple number guessing game using conditional statements and loops. The game will generate a random number between 1 and 100, and the user will have to guess it.'
                }
            ]
        }
    },
    {
        id: 'day-3',
        title: 'Day 3',
        subtitle: 'Functions and Modules',
        content: {
            sections: [
                {
                    title: 'Functions in Python',
                    items: [
                        'Defining and calling functions',
                        'Function parameters and return values',
                        'Scope of variables (local vs. global)'
                    ]
                },
                {
                    title: 'Built-in Python modules',
                    items: [
                        'Importing and using modules',
                        'Overview of common built-in modules (math, random, time)'
                    ]
                },
                {
                    title: 'Introduction to external libraries',
                    items: [
                        'Pip and package management (basic introduction)',
                        'Importing and using external libraries'
                    ]
                },
                {
                    title: 'Hands-on project: Personal Library Organizer',
                    description: 'Students will develop a Python script that organizes their personal library. The script will allow users to add, remove, search, list, and recommend books in their collection.'
                }
            ]
        }
    },
    {
        id: 'day-4',
        title: 'Day 4',
        subtitle: 'Introduction to AI Concepts',
        content: {
            sections: [
                {
                    title: 'What is AI?',
                    items: [
                        'Definition and brief history of AI',
                        'Types of AI (narrow vs. general)',
                        'AI vs Human Intelligence',
                        'Applications of AI in real-world scenarios'
                    ]
                },
                {
                    title: 'Key Components of AI',
                    items: [
                        'Main components needed for AI systems'
                    ]
                },
                {
                    title: 'Introduction to machine learning',
                    items: [
                        'Definition and types of machine learning',
                        'Supervised vs. unsupervised learning',
                        'Reinforcement learning'
                    ]
                },
                {
                    title: 'Neural Networks and Deep Learning',
                    items: [
                        'Introduction to neural networks',
                        'How neural networks work at a basic level',
                        'Overview of deep learning',
                        'Applications of deep learning in real-world scenarios'
                    ]
                },
                {
                    title: 'Common Misconceptions about AI',
                    items: [
                        'Debunking common myths and misconceptions about AI',
                        'Ethical considerations in AI development'
                    ]
                },
                {
                    title: 'Game: AI or Human?',
                    description: 'Interactive game to test the audience\'s ability to distinguish between AI-generated and human-generated images'
                }
            ]
        }
    },
    {
        id: 'day-5',
        title: 'Day 5',
        subtitle: 'Building AI Projects',
        content: {
            intro: 'Congratulations on making it to the final day! Today, we will bring everything we\'ve learned together to build real-world AI projects.',
            sections: [
                {
                    title: 'Objectives',
                    items: [
                        'Combine Python basics with AI concepts',
                        'Build a simple Chatbot or Prediction model',
                        'Understand the project lifecycle'
                    ]
                },
                {
                    title: 'Project 1: Simple Rule-Based Chatbot',
                    description: 'Build an interactive chatbot that responds to user input using conditional logic and pattern matching.'
                },
                {
                    title: 'Project 2: Text Sentiment Analyzer',
                    description: 'Create a program that analyzes text and determines whether it has positive, negative, or neutral sentiment.'
                },
                {
                    title: 'Next Steps',
                    description: 'This is just the beginning! To continue your journey: explore libraries like pandas and scikit-learn, practice coding on platforms like LeetCode or HackerRank, and build your own small projects to solve problems you care about.'
                }
            ]
        }
    }
];

export default function Content() {
    const [activeDay, setActiveDay] = useState('day-1');

    useEffect(() => {
        const handleScroll = () => {
            const sections = days.map(day => document.getElementById(day.id));
            const scrollPosition = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveDay(days[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main className="min-h-screen w-full bg-white text-black flex flex-col font-sans selection:bg-purple-100 border-x border-black mx-auto max-w-[1600px]">
            {/* Header */}
            <div className="border-b border-black p-8 lg:p-16 bg-gray-50">
                <div className="inline-block px-3 py-1 border border-black text-xs font-bold uppercase tracking-widest mb-6 bg-purple-600 text-white">
                    Curriculum
                </div>
                <h1 className="text-4xl lg:text-6xl font-medium leading-[0.9] tracking-tighter mb-6 uppercase">
                    Intro to Python<br />
                    For AI
                </h1>
                <p className="text-base text-gray-600 max-w-xl font-normal">
                    A comprehensive 5-day journey from basic programming concepts to building your first Artificial Intelligence projects.
                </p>
            </div>

            {/* Main content area */}
            <div className="flex flex-col lg:flex-row">
                {/* Left sidebar navigation */}
                <nav className="lg:w-64 lg:min-w-64 border-b lg:border-b-0 lg:border-r border-black lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto bg-white">
                    <div className="p-4 lg:p-0">
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-0">
                            {days.map((day, index) => (
                                <button
                                    key={day.id}
                                    onClick={() => scrollToSection(day.id)}
                                    className={`
                                        flex-shrink-0 lg:flex-shrink text-left px-4 py-4 lg:py-6 lg:px-6
                                        border lg:border-0 lg:border-b border-black
                                        transition-all duration-200
                                        ${activeDay === day.id 
                                            ? 'bg-purple-600 text-white' 
                                            : 'bg-white hover:bg-gray-50 text-black'
                                        }
                                    `}
                                >
                                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${activeDay === day.id ? 'text-white/70' : 'text-gray-400'}`}>
                                        Day 0{index + 1}
                                    </div>
                                    <div className="text-sm font-bold uppercase tracking-wide leading-tight">
                                        {day.subtitle}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Right content area */}
                <div className="flex-1 min-w-0">
                    {days.map((day, dayIndex) => (
                        <section
                            key={day.id}
                            id={day.id}
                            className={`border-b border-black ${dayIndex === days.length - 1 ? 'border-b-0' : ''}`}
                        >
                            {/* Day header */}
                            <div className="p-8 lg:p-12 border-b border-black bg-gray-50">
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                                    Day 0{dayIndex + 1}
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                                    {day.subtitle}
                                </h2>
                                {day.content.intro && (
                                    <p className="mt-4 text-gray-600 max-w-2xl">
                                        {day.content.intro}
                                    </p>
                                )}
                            </div>

                            {/* Day content sections */}
                            <div className="divide-y divide-black">
                                {day.content.sections.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className="p-8 lg:p-12">
                                        <h3 className="text-xl font-bold uppercase tracking-wide mb-6 flex items-center gap-3">
                                            <span className="w-8 h-8 bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                                                {sectionIndex + 1}
                                            </span>
                                            {section.title}
                                        </h3>
                                        
                                        {section.items && (
                                            <ul className="space-y-3 ml-11">
                                                {section.items.map((item, itemIndex) => (
                                                    <li key={itemIndex} className="flex items-start gap-3 text-gray-700">
                                                        <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        
                                        {section.description && (
                                            <p className="text-gray-600 ml-11 leading-relaxed">
                                                {section.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
