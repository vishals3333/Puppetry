import React from 'react'

const Canva = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-10 md: gap-28 lg: pd-20 xl:flex-row'>
      <div className='bluebox-container'>
          <div className='blue-box' style={{paddingTop: '40px', textAlign: 'center'}}>
          <span className='bold-52'> 
          Puppetry is now on 
          </span>
          <span style={{backgroundImage: 'linear-gradient(to right, blue, purple)',
           WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontFamily: 'cursive',
          fontSize: '52px',
          marginLeft: '10px',
          whiteSpace: 'nowrap',
          fontWeight: 'bold' }}>Canva</span>
          <h1 style = {{paddingTop: '20px', color: 'grey', fontSize: '17px', textAlign: 'center'}}>
          Turn images into talking spokesperson in Canva! 
          Create a face, type a script, pick a voice, and
          </h1>
          <h2 style={{textAlign: 'center', color: 'grey', fontSize: '17px'}}>
          Puppetry animates it. It’s as easy as typing a sentence!
          </h2>
          <img src="puppetry_canva2.png" style={{paddingTop: '60px', width: '600px', margin: '0', padding: '0', justifyContent: 'center'}} />
          <div className='button-container mt-10' style={{display: 'flex', justifyContent: 'center'}}>
            <button className="blue-button">Go to Canva</button>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Canva