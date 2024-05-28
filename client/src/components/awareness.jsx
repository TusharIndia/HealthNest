import React from 'react'
import Header from './child_components/header';
import Footer from './child_components/footer';

function Awareness(){
    return (
        <div>
            <Header/>
            <header className="bg-gray-100 py-8 dark:bg-gray-800">
                <div className=" mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                            Psychology Insights
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Explore the fascinating world of psychology and gain insights into the human mind.
                        </p>
                    </div>
                </div>
            </header>
            <main className="py-12 md:py-16">
                <div className=" mx-auto px-4 md:px-6">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A="
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Power of Positive Thinking</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Discover how a positive mindset can transform your life and unlock your full potential.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://www.healthcareradius.in/cloud/2021/11/15/Mental-Health-1.jpg"
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                                    Understanding Emotional Intelligence
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Explore the key components of emotional intelligence and how it can improve your relationships and
                                    personal growth.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://etimg.etb2bimg.com/photo/105395878.cms"
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Science of Happiness</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Learn about the latest research on happiness and how to cultivate a more fulfilling and joyful life.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://domf5oio6qrcr.cloudfront.net/medialibrary/14528/3f85b1b1-9dc7-4a90-855c-dc204646e889.jpg"
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Mindfulness and Mental Health</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Explore the benefits of mindfulness and how it can improve your mental well-being and overall quality of
                                    life.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://publichealth.jhu.edu/sites/default/files/styles/social_image/public/2023-10/world-mental-health-day.png?itok=XK7hlXbx"
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Decision Making</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Discover how our cognitive biases and mental processes influence the decisions we make, and learn
                                    strategies to improve your decision-making.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                        <article className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-900">
                            <img
                                src="https://i.pinimg.com/736x/54/56/60/545660e075906b91da25ea1955087664.jpg"
                                alt="Article Image"
                                width="400"
                                height="200"
                                className="w-full h-48 object-cover"
                                style={{aspectRatio:"400/200",objectFit:"cover"}}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">The Psychology of Relationships</h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    Explore the psychological factors that influence our personal relationships and learn strategies to
                                    build stronger, more fulfilling connections.
                                </p>
                                <a
                                    className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                    href="#"
                                >
                                    Read More
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="ml-1 h-4 w-4"
                                    >
                                        <path d="M5 12h14"></path>
                                        <path d="m12 5 7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Awareness