import Image from 'next/image'

const Hero = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-10 md: gap-28 lg: pd-20 xl:flex-row ' >
      <div className='hero-map'/>
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2 justify-center items-center'>
          <h1 className='bold-52'> 
          Puppetry is the easiest way to
          </h1>
          <h2 className='bold-52'> 
            <span className="rainbow-text">create videos</span> 
            <span> with talking faces</span>
          </h2>

          <p className='regular-20 mt-6 dark-gray-text xl:max-w-[520px]'>
          Puppetry helps teachers, creators, and marketers 
          create engaging short video content for classrooms
          </p>
          <p className='regular-20 mt-0.5 text-gray-30 xl:max-w-[520px]'>
           and social media
          </p>
          <div className="button-container mt-30">
            <button className="blue-button">Use Puppetry Now</button>
          </div>
        <button className="App-container mt-0">
          <img src="AppStore.svg" alt="AppStore" className="App-button" />
        </button>
      </div>
    </section>
  )
}

export default Hero