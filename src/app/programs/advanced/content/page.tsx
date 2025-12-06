'use client';

import React, { useState, useEffect } from 'react';
const days = [
    {
        id: 'day-1',
        title: 'Day 1',
        subtitle: 'Advanced Machine Learning',
        content: {
            sections: [
                {
                    title: 'Beyond Linear Models',
                    items: [
                        'Limitations of simple regression/classification',
                        'Ensemble Learning: Random Forests',
                        'Gradient Boosting concepts (XGBoost/LightGBM)'
                    ]
                },
                {
                    title: 'Feature Engineering',
                    items: [
                        'Encoding categorical variables (One-Hot vs Label)',
                        'Normalization and Standardization',
                        'Handling imbalanced datasets'
                    ]
                },
                {
                    title: 'Advanced Evaluation',
                    items: [
                        'Confusion Matrices',
                        'Precision, Recall, and F1-Score',
                        'Cross-validation techniques'
                    ]
                },
                {
                    title: 'Hands-on project: Customer Churn Predictor',
                    description: 'Build a robust model to predict which customers are likely to cancel a subscription service using Random Forests and analyzing feature importance.'
                }
            ]
        }
    },
    {
        id: 'day-2',
        title: 'Day 2',
        subtitle: 'Neural Networks & Deep Learning',
        content: {
            sections: [
                {
                    title: 'Introduction to TensorFlow/Keras',
                    items: [
                        'The architecture of a Neural Network',
                        'Input, Hidden, and Output layers',
                        'Activation functions (ReLU, Sigmoid, Softmax)'
                    ]
                },
                {
                    title: 'Training a Neural Net',
                    items: [
                        'Loss functions and Optimizers (Adam, SGD)',
                        'Epochs and Batch sizing',
                        'Visualizing the training history (Loss/Accuracy curves)'
                    ]
                },
                {
                    title: 'Hands-on project: Handwritten Digit Recognition',
                    description: 'The "Hello World" of Deep Learning. Build a multi-layer network trained on the MNIST dataset to identify handwritten numbers (0-9) with high accuracy.'
                }
            ]
        }
    },
    {
        id: 'day-3',
        title: 'Day 3',
        subtitle: 'Computer Vision (CNNs)',
        content: {
            sections: [
                {
                    title: 'Convolutional Neural Networks',
                    items: [
                        'How computers "see" images (Pixel arrays)',
                        'Convolutions and Filters',
                        'MaxPooling and Flattening'
                    ]
                },
                {
                    title: 'Image Data Processing',
                    items: [
                        'Resizing and normalizing images',
                        'Data Augmentation (rotating, flipping images to increase data)'
                    ]
                },
                {
                    title: 'Hands-on project: Image Classifier',
                    description: 'Build an AI that can distinguish between two distinct image categories (e.g., "Cat vs Dog" or "Pizza vs Burger") using a Convolutional Neural Network.'
                }
            ]
        }
    },
    {
        id: 'day-4',
        title: 'Day 4',
        subtitle: 'Natural Language Processing (NLP)',
        content: {
            sections: [
                {
                    title: 'Processing Text Data',
                    items: [
                        'Tokenization and removing Stop Words',
                        'Stemming and Lemmatization',
                        'Converting words to numbers (Bag of Words / TF-IDF)'
                    ]
                },
                {
                    title: 'Sentiment Analysis',
                    items: [
                        'Understanding context in text',
                        'Using pre-trained models vs training your own'
                    ]
                },
                {
                    title: 'Hands-on project: Spam Message Detector',
                    description: 'Create an NLP model that reads SMS or Email text and classifies it as "Spam" or "Ham" (safe) based on keyword patterns and text structure.'
                }
            ]
        }
    },
    {
        id: 'day-5',
        title: 'Day 5',
        subtitle: 'Deployment and AI Apps',
        content: {
            intro: 'You have built models in notebooks, but now it is time to share them with the world. Today focuses on model persistence and creating web apps.',
            sections: [
                {
                    title: 'Model Persistence',
                    items: [
                        'Saving trained models (Pickle, H5 format)',
                        'Loading models for inference in a new script'
                    ]
                },
                {
                    title: 'Building AI Web Apps',
                    items: [
                        'Introduction to Streamlit (Python UI library)',
                        'Creating input fields for users',
                        'Displaying model predictions dynamically'
                    ]
                },
                {
                    title: 'Capstone Project: The AI Dashboard',
                    description: 'Build a functional web application where a user can upload an image or type text, and your backend model (from Day 3 or 4) processes it and displays the prediction in real-time.'
                },
                {
                    title: 'Next Steps',
                    description: 'The journey continues! Future topics to explore include Large Language Models (LLMs), Transformers, Cloud Deployment (AWS/Azure), and Reinforcement Learning.'
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
                    Advanced<br />
                    Deep Learning & AI
                </h1>
                <p className="text-base text-gray-600 max-w-xl font-normal">
                    An intensive 5-day bootcamp covering neural networks, CNNs for computer vision, NLP, and production AI deployment with TensorFlow and Keras.
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
