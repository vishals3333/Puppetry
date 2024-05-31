import React from 'react'

const Discover = () => {
  return (
    <section>
      <h1 style={{color: 'purple', fontSize: '28px', fontWeight: 'bold', 
      textAlign: 'center'}}>
      Testimonials
      </h1>
      <h2 style={{fontSize: '35px', textAlign: 'center', paddingTop: '30px',
                  fontWeight: 'bold'}}>
      Our users love Puppetry
      </h2>
      <div className="g-container">
        <div className="g-box">
        <p>“Puppetry was exactly what I needed for the product 
          I'm working on and with all the new features they've added, 
          it's going to make my job that much easier... all I can say is that hand animation 
          on these faces would be a huge undertaking .. months of work”
        </p>
        <p>
          <img src='Trammel.webp' style={{width: '75px', height: '75px',
                    paddingTop:'10px'}}></img>
        </p>
        <p style={{paddingTop:'15px', fontWeight:'bold', textAlign: 'right'}}>
          Tramell Ray Issac
        </p>
        <p style={{color: 'gray', textAlign: 'right'}}>
        Chief Art Officer, Stealth
        </p>
        </div>
        <div className="g-box">
        <p>
        “I love Puppetry. 
        It’s a great way to tell stories and build characters. 
        In fact, I'm able to quickly put together engaging 
        "character explorations" for clients to review and help me sell creative vision. 
        The interface of the app is so easy (and fun) to use.”
        </p>
        <p>
          <img src='Lee.webp' style={{width: '75px', height: '75px',
                    paddingTop:'10px'}}></img>
        </p>
        <p style={{paddingTop:'15px', fontWeight:'bold', textAlign: 'right'}}>
        Lee Margolis
        </p>
        <p style={{color: 'gray', textAlign: 'right'}}>
        Global Executive Creative
        </p>
        <p style={{color: 'gray', textAlign: 'right'}}>
        Director, MOFILM
        </p>
        </div>
        <div className="g-box">
        <p>“Puppetry has allowed my creative imagination to run wild, allowing me to breathe life into characters with astonishing results. It has created a new storytelling workflow for me I never 
          thought imaginable, all with speed and ease. 
          It is a lot of fun!”
        </p>
        <p>
          <img src='tyronne.webp' style={{width: '75px', height: '75px',
                    paddingTop:'10px'}}></img>
        </p>
        <p style={{paddingTop:'15px', fontWeight:'bold', textAlign: 'right'}}>
        Tyronne Schaffer
        </p>
        <p style={{color: 'gray', textAlign: 'right'}}>
        Creative Director, Havas
        </p>
    </div>

</div>
<div className='g-container'>
  <div className='g-box'>
      <p>
      “I’ve used Puppetry to exemplify AI developments in several
       presentations but the use is a small part of the overall presentation. The more significant use is in promoting the upcoming class topics on NextDoor and Facebook. Those promos have been reaching 500-1000 of the 4-5000 active seniors in our community in the week leading up to the presentation. Our club membership has really taken off because of the promos. In the last 6 weeks we've doubled from
       around 16 attendees to a consistent 32 or more for each 
       presentation.”
      </p>
      <p>
          <img src='dan.webp' style={{width: '75px', height: '75px',
                    paddingTop:'10px'}}></img>
      </p>
      <p style={{paddingTop:'15px', fontWeight:'bold', textAlign: 'right'}}>
        Dan Mayer
      </p>
      <p style={{color: 'gray', textAlign: 'right'}}>
          President, PC Computer
      </p>
      <p style={{color: 'gray', textAlign: 'right'}}>
          Club
      </p>
      
  </div>
  <div className='g-box'>
      <p>
     “Easy to use. Great results. Using Puppetry to give voice 
      to the characters I use in videos. Does that one thing very well, 
      and that is exactly what I wanted. A solid app. 
      Currently, it is an indispensible part of my video production tool kit.”
      </p>
      <p>
          <img src='richard.webp' style={{width: '75px', height: '75px',
                    paddingTop:'10px'}}></img>
      </p>
      <p style={{paddingTop:'15px', fontWeight:'bold', textAlign: 'right'}}>
      Richard
      </p>
      <p style={{color: 'gray', textAlign: 'right'}}>
      Creator, Maldigar
      </p>
      
  </div>
</div>
</section>
  )
}

export default Discover