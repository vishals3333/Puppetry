import React from 'react'

const GetApp = () => {
  return (
    <section className='max-container padding-container flex flex-col
    gap-20 py-10 pb-10 md: gap-28 lg: pd-20 xl:flex-row'>
      <div className='testimonial-container'>
        <div className='testimonial-box'>
          <h1 style={{textAlign: 'center', fontSize: '40px', fontWeight: 'bold', 
                      paddingTop: '45px'}}>
            Animate faces using your own face
          </h1>
          <div className='image-container' style={{paddingTop: '40px'}}>
          <img src="Test1.webp"/>
          <img src="Test2.webp"/>
          <img src="Test3.webp"/>
          <img src="Test4.webp"/>
          <img src="Test5.png"/>
          </div>
          <h2 style={{textAlign: 'center', fontSize: '25px', paddingTop:'30px'}}>
          Using your video or your text. No more rigging or head gear required.
          </h2>
          <button style={{display: 'flex', justifyContent: 'center', paddingTop: '30px', border: 'none', background: 'none'}}>
          <img src="TestApp.svg"/>
          </button>
         
        </div>


      </div>
    </section>
  )
}

export default GetApp