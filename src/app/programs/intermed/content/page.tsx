'use client';

import React, { useState, useEffect } from 'react';
const days = [
    {
        id: 'day-1',
        title: 'Day 1',
        subtitle: 'Intermediate Python Structures',
        content: {
            sections: [
                {
                    title: 'Advanced Data Types',
                    items: [
                        'Dictionaries and key-value pairs',
                        'Sets and tuples',
                        'Nested lists and dictionaries'
                    ]
                },
                {
                    title: 'File Handling',
                    items: [
                        'Reading from and writing to text files',
                        'Working with CSV files manually',
                        'Context managers (with statements)'
                    ]
                },
                {
                    title: 'Error Handling',
                    items: [
                        'Try, Except blocks',
                        'Handling user input errors gracefully'
                    ]
                },
                {
                    title: 'Hands-on project: Digital Contact Book',
                    description: 'Create a program that stores contact details (name, email, phone) in a dictionary and saves them to a file, allowing the user to retrieve them later.'
                }
            ]
        }
    },
    {
        id: 'day-2',
        title: 'Day 2',
        subtitle: 'Introduction to Data Analysis',
        content: {
            sections: [
                {
                    title: 'Getting Started with Pandas',
                    items: [
                        'Installation and setup',
                        'Understanding DataFrames and Series',
                        'Loading data from Excel or CSV'
                    ]
                },
                {
                    title: 'Data Inspection',
                    items: [
                        'Viewing top/bottom rows (head, tail)',
                        'Getting statistical summaries (describe)',
                        'Selecting specific columns and rows'
                    ]
                },
                {
                    title: 'Basic Data Cleaning',
                    items: [
                        'Handling missing values',
                        'Filtering unwanted data'
                    ]
                },
                {
                    title: 'Hands-on project: Grade Analyzer',
                    description: 'Load a dataset of student grades. The script will calculate class averages, find the highest score, and filter for students who passed.'
                }
            ]
        }
    },
    {
        id: 'day-3',
        title: 'Day 3',
        subtitle: 'Data Visualization',
        content: {
            sections: [
                {
                    title: 'Plotting with Matplotlib',
                    items: [
                        'Basic line and bar charts',
                        'Adding titles, labels, and legends',
                        'Customizing colors and styles'
                    ]
                },
                {
                    title: 'Introduction to Seaborn',
                    items: [
                        'Easier plotting for dataframes',
                        'Creating histograms and scatter plots',
                        'Visualizing relationships in data'
                    ]
                },
                {
                    title: 'Hands-on project: Weather Report Visualizer',
                    description: 'Take a dataset of daily temperatures and create a visual dashboard showing temperature trends over time and a histogram of temperature distribution.'
                }
            ]
        }
    },
    {
        id: 'day-4',
        title: 'Day 4',
        subtitle: 'Foundations of Machine Learning',
        content: {
            sections: [
                {
                    title: 'Machine Learning Workflow',
                    items: [
                        'Data preparation (Features vs Targets)',
                        'Splitting data: Training sets vs Testing sets',
                        'The concept of "fitting" a model'
                    ]
                },
                {
                    title: 'Introduction to Scikit-Learn',
                    items: [
                        'Importing standard models',
                        'Simple Classification (Decision Trees)',
                        'Simple Regression (Predicting a number)'
                    ]
                },
                {
                    title: 'Evaluating Models',
                    items: [
                        'How to tell if your model is working',
                        'Accuracy score basics'
                    ]
                },
                {
                    title: 'Hands-on project: Flower Classifier',
                    description: 'Use the classic Iris dataset to train a Decision Tree. The program will take measurements of a flower and predict which species it belongs to.'
                }
            ]
        }
    },
    {
        id: 'day-5',
        title: 'Day 5',
        subtitle: 'Applied Data Projects',
        content: {
            intro: 'Congratulations! Today we move away from theory and focus on applying our data skills to build functional tools.',
            sections: [
                {
                    title: 'Objectives',
                    items: [
                        'Integrate File I/O, Pandas, and Logic',
                        'Understand the flow of data in an application',
                        'Prepare for advanced AI topics'
                    ]
                },
                {
                    title: 'Project 1: Basic Movie Recommender',
                    description: 'Build a system that takes a genre as input and returns the top 5 highest-rated movies from a dataset using Pandas filtering.'
                },
                {
                    title: 'Project 2: House Price Estimator',
                    description: 'Create a script that uses a simple linear model to estimate the price of a house based on its square footage, training on real historical data.'
                },
                {
                    title: 'Next Steps',
                    description: 'You now have the foundation for AI! The next logical steps are Deep Learning (Neural Networks), Computer Vision, or Advanced Statistics.'
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
                    Intermediate<br />
                    Data Science & ML
                </h1>
                <p className="text-base text-gray-600 max-w-xl font-normal">
                    A comprehensive 5-day bootcamp advancing from data manipulation with Pandas to building machine learning models with real-world datasets.
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
