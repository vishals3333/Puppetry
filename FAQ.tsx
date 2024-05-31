import React from 'react'

const FAQ = () => {
  return (
    <section>
      <h1 style={{fontSize: '30px', textAlign:'center', paddingTop: '40px',
                  fontWeight:'bold'}}>
        Frequently Asked Questions
      </h1>
      <h2 style={{textAlign: 'center', fontSize: '18px', color: 'grey',
                  paddingTop: '10px'}}>
      Have a different question 
      and can’t find the answer you’re looking for? 
      Reach out to our
      </h2>
      <h3 style={{textAlign: 'center', fontSize: '18px', color: 'grey',
                  paddingTop: '10px'}}>
      support team by sending us an email 
      and we’ll get back to you as soon as we can.
      </h3>
      <h4 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      General FAQs
      </h4>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
              What is Puppetry?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Puppetry is a comprehensive toolset designed to simplify the
            complex task of face animation. By leveraging advanced technology, 
            Puppetry allows users to create lifelike, animated faces through 
            a simple script, eliminating the need for intricate manual adjustments.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            What is the Puppetry App for?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            The Puppetry App is the easiest way to Animate a face. 
            Creators use it to create animation videos, game assets, 
            instagram posts, mock storyboards and so much more. 
            The App helps us test our technology and bring it in front of 
            our users.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            How does Puppetry App generate</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            animated videos?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            The Puppetry App uses our API to generate videos using text or video. 
            You provide (or generate) a face and we'll make 
            it talk using the text you specify or a video you record of yourself.
            </p>
        </div>
    </div>
    </div>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Are there any tips on recording the</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            videos in Puppetry App?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Try to start with a neutral face. It's better to start with 
            the same kind of facial expression that the image you are driving 
            is in. 
            That way our models can figure out how to move the image correctly.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Is Puppetry free for personal use?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            After you sign up, you can use Puppetry free for 2 videos every day.
             You can use it to create 
            videos for your personal projects, social media, or just for fun.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Is there a commercial license for</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Puppetry Content?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes, please reach out to us at hi@puppetry.com 
            and we will get back to you with details.',
            </p>
        </div>
    </div>
    </div>
    <h5 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      Audio FAQs
      </h5>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Can I upload my own voiceover?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Absolutely! You can upload your own audio
             file by clicking “Animate with Audio” in the Animator tab.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            What is the Puppetry App for?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            The Puppetry App is the easiest way to Animate a face. 
            Creators use it to create animation videos, game assets, 
            instagram posts, mock storyboards and so much more. 
            The App helps us test our technology and bring it in front of 
            our users.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Can I animate with text?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes! You can animate your avatar by typing your text prompt
            if you click the “Animate with text” in the Animator tab.
            </p>
        </div>
    </div>
    </div>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        Can I use an AI voice?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Absolutely! Puppetry has a 
            lot of AI voice options you can choose for your avatar.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Is English the only language</p>
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            available?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Puppetry supports over 30 languages. Simply type the prompt in your language, and Puppetry will 
            do the work of animating your avatar talking in your 
            preferred language.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
          What voice style can I use?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Puppetry has a lot of voice styles to choose from in the Animator tab. Simply click “More voices” and select the voice style you want to use for your avatar. 
            There are over 30 voice styles in Puppetry, so 
            feel free to get creative!
            </p>
        </div>
        
    </div>
    </div>
    <h5 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      Video FAQs
      </h5>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            What is the output resolution of the generated videos?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Puppetry generates the best videos with 512 x 512px resolution.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Can I do a 9:16 aspect ratio for video shorts?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes! Puppetry supports a 9:16 aspect ratio if you want a generated image. You can also upload 
            your own photo in a 9:16 format ratio, then animate it with Puppetry.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        How long does it take to generate videos?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            It will take around 10 minutes to generate your videos properly and even longer, depending on the script length. However, please expect that generating your videos may take significantly longer 
            if a high volume of videos are being generated simultaneously.
            </p>
        </div>
    </div>
    </div>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        Can I export my video with a transparent background?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Unfortunately, Puppetry does not yet support exporting transparent generated videos. 
            Rest assured, you can look forward to it in the future!
            </p>
        </div>
        <div className="FAQbox">
            
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        </div>
        
    </div>
    </div>
    <h5 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      Avatar FAQs
      </h5>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Is there a limit to how many images I can generate?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            None! You can create as many images as you want. It’s unlimited.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Can I upload my own image to animate it?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes! You can upload your own photo to animate it. However, please note that Puppetry is 
            designed to animate avatars and non-real-life pictures the best.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Are all available voices included within the AppSumo deal?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes! You can animate your avatar by typing your text prompt
            if you click the “Animate with text” in the Animator tab.
            </p>
        </div>
    </div>
    </div>
    <h5 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      Video FAQs
      </h5>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            What is the output resolution of the generated videos?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Puppetry generates the best videos with 512 x 512px resolution.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Can I do a 9:16 aspect ratio for video shorts?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Yes! Puppetry supports a 9:16 aspect ratio if you want a generated image. You can also upload 
            your own photo in a 9:16 format ratio, then animate it with Puppetry.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        How long does it take to generate videos?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            It will take around 10 minutes to generate your videos properly and even longer, depending on the script length. However, please expect that generating your videos may take significantly longer 
            if a high volume of videos are being generated simultaneously.
            </p>
        </div>
    </div>
    </div>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        Can I export my video with a transparent background?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Unfortunately, Puppetry does not yet support exporting transparent generated videos. 
            Rest assured, you can look forward to it in the future!
            </p>
        </div>
        <div className="FAQbox">
            
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        </div>
        
    </div>
    </div>
    <h5 style={{textAlign: 'left', fontSize: '24px', fontWeight: 'bold',
                  paddingTop:'30px', paddingLeft: '20px'}}>
      AppSumo FAQs
      </h5>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            What’s the difference between the AppSumo deal and the one on Canva?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            If you purchase Puppetry Pro on Appsumo, you can also use the Pro on Canva. The Puppetry on the Canva app is limited and only a subset of the studio. In other words, Canva supports what you can do using Puppetry Studio but is
            limited in the number of avatars you can generate.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Does the AppSumo deal also come with the phone application?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Unfortunately, the Lifetime deal on Appsumo is 
            only for the web application of Puppetry. The iOS application is not included.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        How is this different from your phone application?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            The Puppetry app has a video-to-video feature and is currently inaccessible in the Puppetry LTD. Other than that, the lifetime deal on AppSumo offers more features like the ChatGPT and Image generation that you can’t find on the iOS app.
             Note that the web application will also have the video-to-video feature soon.
            </p>
        </div>
    </div>
    </div>
    <div className="FAQcontainer">
    <div className="FAQrow">
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        How many devices can I use?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            There’s no limit! Feel free to use Puppetry on as many devices as you want as long as you use the web version. Please note that Puppetry LTD 
            is only for the web version and does not apply to the Puppetry app.
            </p>
        </div>
        <div className="FAQbox">
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
            Will we be grandfathered into future incoming plans?</p>
    
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Of course! All our early adopters on AppSumo will enjoy the future features of Puppetry.
            </p>
        </div>
        <div className="FAQdivider"></div> 
        <div className="FAQbox">
        <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'left'}}>
        Can I see Puppetry’s Roadmap?</p>
            <p style={{fontSize: '16px', fontWeight: 'medium', textAlign: 'left', paddingTop:'15px'}}>
            Absolutely! You can see our Puppetry roadmap and our plans to serve
            </p>
        </div>
    </div>
    </div>
    <h1 style={{fontSize: '16px', color: 'gray', textAlign: 'center', paddingTop: '30px'}}>
    Feel free to reach out if you have any more concerns, questions, 
    suggestions, or clarifications! Please send us an email at hi@puppetry.com.
    </h1>
    </section>
  )
}

export default FAQ