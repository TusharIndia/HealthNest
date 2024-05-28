import React from 'react'
import { useNavigate } from 'react-router-dom'

function Chatroom() {
    const navigator = useNavigate()
    return (
        <>

            <div className="newheader" style={{ width: '20vw', backgroundColor: 'white', position: 'absolute', top: '0rem', paddingTop: '1rem' }}>
                <img src="https://w7.pngwing.com/pngs/313/516/png-transparent-stethoscope-icon-stethoscope-icon-medical-icons-medical-icon-medicine-doctor-diagnosis-diagnose-clinic-thumbnail.png" alt="" />
                <p onClick={() => { navigator('/') }} >Health<span style={{ color: 'blue', cursor: 'pointer' }}>Logo</span></p>
            </div>
            <div class="flex h-screen w-full">

                <div class="bg-[#1E40AF] text-white w-64 p-6 flex flex-col gap-6">

                    <div class="text-2xl "><span><i class="fa-solid fa-link" style={{ marginTop: '6rem', color: "#ffffff;", marginRight: '1rem' }}></i></span>Groups</div>
                    <nav class="flex flex-col gap-2">
                        <a class="text-lg font-medium hover:underline" href="/chatroom" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Depression
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/chatroom" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Anxiety
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/chatroom" style={{ color: 'white', fontSize: "0.8rem" }}>
                            OCD
                        </a>
                    </nav>

                </div>
                <div className="chatbotContainer" style={{ width: '85vw' }}>
                    {/* <div className='sidemenubar'>
            <h2>Therpy ChatBot</h2>
            <ul>
                <li>Home</li>
                <li>Servive</li>
            </ul>
        </div>
      */}

                    <div class="flex flex-col h-screen" style={{ borderRadius: '3rem' }}>
                        <div class=" from-blue-400 via-purple-500 to-pink-500 p-4" style={{ backgroundColor: 'white' }}>
                            <h1 class=" text-center text-3xl font-bold" style={{ color: 'black', marginBottom: '2rem' }}>Room To Chat<button type="button" class="btn btn-primary" style={{ position: 'relative', left: '20rem', width: '6rem', borderRadius: '1rem' }}> Login</button></h1>

                            <div style={{ width: '100%', borderBottom: '1px solid #ccc' }}></div>
                        </div>
                        <div class="flex-grow p-6 overflow-y-auto">
                            <div class="flex items-end space-x-2">
                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                    <span class="text-sm">Hello! How can I assist you today?</span>
                                </div>
                            </div>
                            <div class="flex items-end justify-end space-x-2 mt-4">
                                <div class="max-w-xs p-2 rounded-lg bg-blue-700 text-white shadow">
                                    <span class="text-sm">Can you help me understand my dreams?</span>
                                </div>
                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                    <span class="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">U</span>
                                </span>
                            </div>
                            <div class="flex items-end space-x-2 mt-4">
                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                    <span class="text-sm">Sure! Dreams can be a window into your subconscious.</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 bg-white">
                            <div class="flex space-x-3">
                                <input
                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                                    placeholder="Type a message..."
                                />
                                <button id="sendBtn" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>



    )
}

export default Chatroom