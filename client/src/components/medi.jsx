import { useEffect, useState } from "react"
function Medi() {

  const depression = [{ title: 'Whispers of Hope', content: 'A gentle, piano-driven melody evoking a sense of comfort and reassurance, guiding listeners through moments of despair towards a glimmer of light and hope.', path: './depression/10-Minute Meditation For Depression [xRxT9cOKiM8].m4a' }, { title: 'Echoes of Healing', content: 'A soothing blend of strings and subtle percussion, offering solace and encouragement as it echoes the journey towards self-discovery and emotional restoration.', path: './depression/20 Min Guided Meditation For Depression, Anxiety & Overthinking (Powerful Script) [dO25rBgcapc].m4a' }, { title: 'Serenade for the Soul', content: 'A melodic embrace of acoustic guitar and ethereal vocals, tenderly nurturing the spirit through its journey of introspection and resilience against the shadows of depression. ', path: './depression/RISING ABOVE THE DEPRESSION DEPTHS ｜ Free 5-Minute guided meditation (beginners friendly) [LR8cgsRwKwI].m4a' }]
  const [usedata, setUsedata] = useState(depression);
  const anxiety = [{ title: 'Calm Waters', content: 'A soothing melody with gentle waves of sound, designed to ease tension and promote relaxation during anxiety therapy sessions. ', path: './anxiety/5 Minute Meditation for Anxiety [uqGTphrGHi4].m4a' }, { title: 'Tranquil Serenade', content: 'A soft, melodic composition to guide listeners towards inner peace and tranquility, fostering a sense of comfort and security during therapy.', path: './anxiety/10-Minute Meditation For Anxiety [O-6f5wQXSu8].m4a' }, { title: 'Mystic Breeze', content: 'An ethereal arrangement evoking a sense of serenity and clarity, enveloping the listener in a soothing atmosphere conducive to anxiety relief and emotional healing.', path: './anxiety/Calm Your Mind, 20 Minute Guided Meditation for Stress & Anxiety [mK-kGgypeI0].m4a' }]
  const sleep = [{ title: 'Dreamscape Serenade', content: 'A tranquil composition featuring gentle piano and ethereal strings, guiding listeners into a serene dreamscape, fostering deep relaxation and peaceful slumber.', path: './sleep/5 Minute Meditation Before Sleep [2K4T9HmEhWE].m4a' }, { title: 'Lullaby of Tranquility', content: 'A soothing blend of soft guitar melodies and ambient sounds, designed to calm the mind and invite restful sleep with its gentle, hypnotic rhythm.', path: './sleep/10-Minute Meditation For Sleep [aEqlQvczMJQ].m4a' }, { title: 'Nocturnal Reverie', content: ' An enchanting orchestral arrangement evoking the quiet beauty of the night, carrying listeners on a journey through moonlit landscapes, easing them into a restful and rejuvenating sleep. ', path: '/sleep/20 Minute Guided Meditation Before You Sleep! [d1_UYUT24Fo].m4a' }]
  const [audio, setaudio] = useState(null)
  const [isplaying, setisplaying] = useState(false)
  useEffect(() => {
    //  setUsedata(depression)
    let audioTag = document.getElementById('newaudio')
    setaudio(audioTag)

  }, [usedata, audio])


  const handleclk = (type) => {
    if (type == 'anxiety') {
      setUsedata(anxiety);
    } else if (type == 'depression') {
      setUsedata(depression);
    } else {
      setUsedata(sleep)
    }
  }

  const handlePlay = (path) => {

    audio.src = path;
    audio.play()


  }
  const handlePlay2 = () => {


    audio.pause()


  }
  return (
    <div>
      <div class="flex h-screen w-full">

        <div class="bg-[#1E40AF] text-white w-64 p-6 flex flex-col gap-6">
          <div class="text-2xl "><span><i class="fa-solid fa-link" style={{ marginTop: '0.8rem', color: "#ffffff;", marginRight: '1rem' }}></i></span>Menu</div>
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
          <div class="text-2xl " style={{ widows: '20vw' }}><span><i class="fa-solid fa-layer-group" style={{ marginTop: '0.8rem', color: "#ffffff;", marginRight: '1rem' }}></i></span>Categories</div>
          <nav class="flex flex-col gap-2">
            <a class="text-lg font-medium hover:underline" onClick={() => handleclk('depression')} href="#" style={{ color: 'white', fontSize: "0.8rem" }}>
              Depression
            </a>
            <a class="text-lg font-medium hover:underline" href="#" onClick={() => handleclk('anxiety')} style={{ color: 'white', fontSize: "0.8rem" }}>
              Anxiety
            </a>
            <a class="text-lg font-medium hover:underline" href="#" onClick={() => handleclk('sleep')} style={{ color: 'white', fontSize: "0.8rem" }}>
              Sleep
            </a>
          </nav>
        </div>
        <div class="flex-1 bg-white p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usedata && usedata?.map((item) => {
            return (


              <div class="bg-[#F3F4F6] rounded-lg p-4 flex flex-col gap-4 h-60">
                <div class="flex items-center justify-between">
                  <div class="text-lg font-medium">{item.title}</div>
                  <div class="flex gap-2">
                    <audio
                      id="newaudio"
                      src="path_to_your_audio_file.mp3"


                    />
                    <button onClick={() => { handlePlay(item.path) }} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                        class="h-6 w-6"
                      >
                        <polygon points="6 3 20 12 6 21 6 3"></polygon>
                      </svg>
                    </button>
                    <button onClick={() => { handlePlay2() }} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                        class="h-6 w-6"
                      >
                        <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                        <rect x="6" y="4" width="4" height="16" rx="1"></rect>
                      </svg>
                    </button>
                  </div>
                </div>
                <p class="text-gray-500">{item.content}</p>
              </div>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Medi