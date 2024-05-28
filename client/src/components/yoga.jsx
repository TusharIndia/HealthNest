import React, { useState, useEffect } from 'react';
import Footer from './child_components/footer';
import Header from './child_components/header';

function Yoga() {
    const [yogaStyles, setYogaStyles] = useState([]);
    const [images, setimages] = useState([]);
    const [yogadata, setyogadata] = useState([]);
    const [data, setdata] = useState("");

    const handlechng = (e) => {
        const val = e.target.value;
        setdata(val);
    }
    useEffect(() => {
        console.log(images)
    }, [images, yogadata])

    const handlesbmt = async (e) => {
        e.preventDefault();
        const res = await fetch(`https://0cd2-103-77-186-58.ngrok-free.app/api/yoga`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ "input_text": data }),
        });

        const result = await res.json();
        // setYogaStyles(data.images);
        console.log(result.images)
        setimages(result.images)
        setyogadata(result.output)
    }




    return (
        <>
            <Header />
            <main>
                <section className='flex flex-col space-y-4 items-center m-4'>
                    <div>
                        <h1 className='text-4xl'>Yoga is Life</h1></div>
                    <p>
                        Yoga fosters physical, mental, and spiritual well-being through movement, breath control, and meditation, promoting holistic health and inner balance.</p>
                    <form method='post' className='flex flex-col space-y-2 items-center'>
                        <input type="text" name='problem' onChange={(e) => handlechng(e)} value={data} placeholder='Enter your problem' className='w-[80vw] text-center p-1 border border-black rounded-xl border-2' />
                        <button type='submit' onClick={handlesbmt} className='bg-blue-400 p-2 w-fit text-white rounded-xl'>Submit</button>
                    </form>

                </section>
                <section className=" px-4 md:px-6 py-12 md:py-24">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* <h1 className='text-center'>Images</h1> */}
                        {images && images?.map((style, index) => (
                            <div className="group relative rounded-lg overflow-hidden" key={index}>
                                <div className='flex flex-col border border-2 p-2 w-full'>
                                    <div>

                                        <img
                                            src={style} // Use image URL from the data
                                            alt={"Yoga Image ${style.name}"} // Use the name from the data
                                            width="300"
                                            height="200"
                                            className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-80"
                                            style={{ aspectRatio: '300/200', objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div>
                                        <p>{yogadata[index]}</p>
                                    </div>
                                </div>

                            </div>
                        ))}
                        
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};
export default Yoga;