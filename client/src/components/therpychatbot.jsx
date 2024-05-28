import { useNavigate } from "react-router-dom"
import Header from "./child_components/header"
import { useEffect, useState } from "react"
let count = 0
let count1 = 0

function TherpyChatbot() {
    const navigator = useNavigate()

    const [firstdata , setfirstdata] = useState("")
    const [model, setmodel] = useState(false)
    const [userdata, setuserdata] = useState({ name: '', age: '', gender: '', description: '' })
    const [message, setmessage] = useState([])
    const [messageInput, setmessageInput] = useState([])
    const [inputdata, setinputdata] = useState("")

    useEffect(() => {
        if (count == 0) {
            setmodel(true)
            count = count + 1

        }
        console.log(inputdata)
    }, [inputdata , firstdata , messageInput , message])

    const handleClick = async () => {
      if(inputdata){
        setmessageInput([ ...messageInput, inputdata]);
      }
        const data1 = { "patient_info": userdata };
        const data2 = { "input_text": inputdata };
        let final_data = {};
    
        if (count1 === 0) {
            final_data = data1;
        } else {
            final_data = data2;
        }
    
        const res = await fetch(`https://0cd2-103-77-186-58.ngrok-free.app/api/process_input`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(final_data),
        });
    
        const result = await res.json();
        console.log(result);
    
        if (count1 === 0) {
           const  v = result.output;
            setfirstdata(v)
            count1 = count1 + 1;
        } else {
            console.log(result.output)
            setmessage([ ...message, result.output]);
            
            
            
        }
    
        
        setinputdata("");
    };
    

    function handlechange(e) {
        const val = e.target.value
        setinputdata(val)
    }


    function handlechange1(e) {
        setuserdata({ ...userdata, [e.target.name]: e.target.value });
    }

    function handleform(e) {
        e.preventDefault()
        
        setmodel(false)
        handleClick()

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
                            Diagonsis
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
                            <h1 class=" text-center text-3xl font-bold" style={{ color: 'black', marginBottom: '2rem' }}>Therpy Assistant     <button type="button" class="btn btn-primary" style={{ position: 'relative', left: '20rem', width: '6rem', borderRadius: '1rem' }}> Login</button></h1>

                            <div style={{ width: '100%', borderBottom: '1px solid #ccc' }}></div>
                        </div>
                        <div class="flex-grow p-6 overflow-y-auto">
                            {firstdata?<div class="flex items-end space-x-2">
                                <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                    <span class="text-sm">{firstdata&&firstdata}</span>
                                </div>
                            </div>:<div class="flex items-end space-x-2">
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                                <span class="text-sm"><div class="chat-bubble-loader">
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                </div></span>
                                            </div>
                                        </div>}

                            {messageInput  &&messageInput?.map((item, index) => {
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
                                       { message[index]?<div class="flex items-end space-x-2">
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                                <span class="text-sm">{message[index]}</span>
                                            </div>
                                        </div>:<div class="flex items-end space-x-2">
                                            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"></span>
                                            <div class="max-w-xs p-2 rounded-lg bg-white shadow">
                                                <span class="text-sm"><div class="chat-bubble-loader">
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                    <div class="bubble"></div>
                                                </div></span>
                                            </div>
                                        </div>}</>
                                )
                            })}

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
            {model && <form method='Post' onSubmit={handleform} className="shadow-lg" style={{ width: '60vw', position: 'absolute', top: '7rem', left: '20rem', backgroundColor: 'white', borderRadius: '1rem', padding: '2rem', boxShadow: 'black 2rem 2rem 2rem' }}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input onChange={handlechange1} type='text' name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userdata?.name} />

                </div>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Age</label>
                    <input onChange={handlechange1} type='text' name="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userdata?.age} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Gender</label>
                    <input onChange={handlechange1} type='text' name="gender" class="form-control" id="exampleInputPassword1" value={userdata?.gender} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input onChange={handlechange1} type='text' name="description" class="form-control" id="exampleInputPassword1" value={userdata?.description} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>}


        </>



    )
}

export default TherpyChatbot