import { useNavigate } from "react-router-dom"
import Header from "./child_components/header"
import { useEffect, useState } from "react"


function DiagosisChatbot() {
    const navigator = useNavigate()


    const [message, setmessage] = useState([])
    const [messageInput, setmessageInput] = useState([])
    const [inputdata, setinputdata] = useState("")
    const [isloading, setisloading] = useState(true)

    useEffect(() => {

    }, [inputdata, messageInput, message, isloading])

    const handleClick = async () => {

        setmessageInput([...messageInput, inputdata]);
        const data = { "input_text": inputdata };

        const res = await fetch(`https://0cd2-103-77-186-58.ngrok-free.app/api/diagnosis`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        console.log(result);


        setmessage([...message, result.output]);

        setisloading(false)



        setinputdata("");
    };


    function handlechange(e) {
        const val = e.target.value
        setinputdata(val)
    }






    return (
        <>

            <div className="newheader" style={{ width: '20vw', backgroundColor: 'white', position: 'absolute', top: '0rem', paddingTop: '1rem' }}>
                <img src="https://w7.pngwing.com/pngs/313/516/png-transparent-stethoscope-icon-stethoscope-icon-medical-icons-medical-icon-medicine-doctor-diagnosis-diagnose-clinic-thumbnail.png" alt="" />
                <p onClick={() => { navigator('/') }} >Health<span style={{ color: 'blue', cursor: 'pointer' }}>Logo</span></p>
            </div>
            <div class="flex h-screen w-full">

                <div class="bg-[#1E40AF] text-white w-64 p-6 flex flex-col gap-6">

                    <div class="text-2xl "><span><i class="fa-solid fa-link" style={{ marginTop: '6rem', color: "#ffffff;", marginRight: '1rem' }}></i></span>Menu</div>
                    <nav class="flex flex-col gap-2">
                        <a class="text-lg font-medium hover:underline" href="/" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Home
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/diagnosis" style={{ color: 'white', fontSize: "0.8rem" }}>
                            diagnosis
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/therpy" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Therpy
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/mood" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Reflect
                        </a>
                        <a class="text-lg font-medium hover:underline" href="/medi" style={{ color: 'white', fontSize: "0.8rem" }}>
                            Meditation
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
                            <h1 class=" text-center text-3xl font-bold" style={{ color: 'black', marginBottom: '2rem' }}>Diagonis Assistant     <button type="button" class="btn btn-primary" style={{ position: 'relative', left: '20rem', width: '6rem', borderRadius: '1rem' }}> Login</button></h1>

                            <div style={{ width: '100%', borderBottom: '1px solid #ccc' }}></div>
                        </div>
                        <div class="flex-grow p-6 overflow-y-auto">
                            <div class="flex items-end space-x-2">
                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                    <span class="text-sm">Hello! How can I assist you today?</span>
                                </div>
                            </div>

                            {(messageInput && messageInput?.map((item, index) => {
                                return (
                                    <>
                                        <div class="flex items-end justify-end space-x-2 mt-4">
                                            <div class="max-w-xs p-2 rounded-lg bg-blue-700 text-white shadow">
                                                <span class="text-sm">{item}</span>
                                            </div>
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                                <span class="flex h-full w-full items-center justify-center rounded-full bg-blue-500 text-white">U</span>
                                            </span>
                                        </div>
                                        {message[index] ? <div class="flex items-end space-x-2">
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                                <span class="text-sm">{message[index]}</span>
                                            </div>
                                        </div> : <div class="flex items-end space-x-2">
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                                <span class="text-sm"><div class="chat-bubble-loader">
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                </div></span>
                                            </div>
                                        </div>}
                                    </>
                                )
                            }))
                            }

                        </div>
                        <div class="p-4 bg-white">
                            <div class="flex space-x-3">
                                <input onChange={(e) => { handlechange(e) }} class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-grow"
                                    placeholder="Type a message..."
                                    value={inputdata}

                                />
                                <button onClick={handleClick} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>



    )
}

export default DiagosisChatbot