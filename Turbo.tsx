import React from 'react'

const Turbo = () => {
  return (
    <section >
         <h1 style={{fontWeight: 'bold', fontSize: '28px', textAlign: 'center', paddingTop: '50px'}}> 
         Meet Turbo, our mascot, doing stand up
          </h1>
          <h2 style={{fontWeight: 'bold', fontSize: '28px', textAlign: 'center'}}> 
          comedy 🎭
          </h2>
          <video style={{justifyContent: 'center', alignItems: 'center'}} width="500" height="400" controls>
            <source src='Turbo.mp4'/>
          Your browser does not support the video tag.
          </video>
          <h2 style={{fontWeight: 'bold', fontSize: '28px', textAlign: 'center', paddingTop: '30px'}}> 
          Completely free to start, so why wait?
          </h2>
          <div style={{justifyContent: 'center', alignItems: 'center',
                          display: 'flex'}}>
          <button style={{width: '200px', height: '200px'}}>
          <img src="AppStore.svg"/>
          </button>
          <div style={{justifyContent: 'center', alignItems: 'center',
                          display: 'flex', paddingLeft: '30px'}} >
          <button className="blue-button">Try Now</button>
          </div>
          </div>
    </section>
  )
}

export default Turbo