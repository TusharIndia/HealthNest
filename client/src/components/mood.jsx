// export default Mood
import React, { useState } from 'react';
import Footer from "./child_components/footer";
import Header from "./child_components/header";

function Mood() {
    // State variables
    const [selectedMood, setSelectedMood] = useState(null);
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState({})


    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if a mood has been selected
        if (!selectedMood) {
            alert("Please select a mood before submitting.");
            return;
        }
        console.log(selectedMood)
        // API request
        const response = await fetch("https://0cd2-103-77-186-58.ngrok-free.app/api/mood_todo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mood: selectedMood
            }),
        });

        // Handle the response (you can do something with the response data here if needed)
        if (response.ok) {
            const data = await response.json();
            console.log("API response:", data);
            setList(data.output);
            console.log(list)
        } else {
            console.error("API error:", response.statusText);
        }
    };

    // Event handler to handle emoji selection
    const handleEmojiClick = (mood) => {
        setSelectedMood(mood);
    };

    return (
        <div>
            <Header />
            <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Mood selection images */}
                <div className="flex justify-center space-x-4 mb-8">
                    <div >
                        <img
                            src="https://www.shutterstock.com/image-vector/pensive-emoticon-600nw-387291874.jpg"
                            width="80"
                            height="80"
                            alt="Depression Mood"
                            className="rounded-full hover:animate-ping"
                            style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            onClick={() => handleEmojiClick("Depression")}
                        />
                        <p>Depression</p>
                    </div>

                    <div>
                        <img
                            src="https://static-00.iconduck.com/assets.00/anxious-face-with-sweat-emoji-emoji-2048x2048-u671u5vh.png"
                            width="80"
                            height="80"
                            alt="Anxiety Mood"
                            className="rounded-full hover:animate-ping"
                            style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            onClick={() => handleEmojiClick("Anxiety")}
                        />
                        <p style={{ textAlign: 'center' }}>Anxiety</p>
                    </div>

                    <div >
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_y9AUEe7R6MwmMfV61mvG4uPgfq40g6CKW3sT5DuBA&s"
                            width="80"
                            height="80"
                            alt="Sad Mood"
                            className="rounded-full hover:animate-ping"
                            style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            onClick={() => handleEmojiClick("Sad")}
                        />
                        <p style={{ textAlign: 'center' }}>Sad</p>
                    </div>

                    <div >
                        <img
                            src="https://emojiisland.com/cdn/shop/products/Fearful_Emoji_Icon_02da8f68-7252-4647-bc2a-97761073120f_grande.png?v=1571606089"
                            width="80"
                            height="80"
                            alt="Fear Mood"
                            className="rounded-full hover:animate-ping"
                            style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            onClick={() => handleEmojiClick("Fear")}
                        />
                        <p style={{ textAlign: 'center' }}>Fear</p>
                    </div>

                    <div >
                        <img
                            src="https://i.pinimg.com/736x/b0/f7/f8/b0f7f8165f2dda408cde0730a2f08c23.jpg"
                            width="80"
                            height="80"
                            alt="Anger Mood"
                            className="rounded-full hover:animate-ping"
                            style={{ aspectRatio: "80/80", objectFit: "cover" }}
                            onClick={() => handleEmojiClick("Anger")}
                        />
                        <p style={{ textAlign: 'center' }}>Anger</p>
                    </div>
                </div>

                {/* Form for text area and submit button */}
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    {/* Text area for user input */}
                    <div className="mb-8">
                        <textarea
                            className="flex min-h-[80px] bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                            placeholder="How are you feeling today?"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        />
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="inline-flex text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                        Submit
                    </button>
                </form>
            </div>

            {/* Task list (you can modify this part as needed) */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" style={{ width: '80vw', margin: 'auto' }}>
                {/* This is an example, you can replace it with your dynamic content */}
                {Object.entries(list).map(([key, value]) => (
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col justify-between" key={key}>
                    <div >
                        <h3 className="text-lg font-bold mb-2">{key}</h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-4">{value}</p>
                    </div>
                    <button
                        className="inline-flex items-center text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    >
                        Mark as Complete
                    </button>
                </div>
              ))}
            </div>

            <Footer />
        </div>
    );
}

export default Mood