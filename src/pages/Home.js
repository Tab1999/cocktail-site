import "./Home.css";
import About from './Slider'
import { Parallax } from 'react-parallax';
import {motion} from 'framer-motion';
import image1 from "./Image/1.jpeg";
import image2 from "./Image/2.jpeg";
import image3 from "./Image/3.jpg";
import image4 from "./Image/4.jpg";
import image5 from "./Image/5.jpg"

function Home(){

      return<>
      <Parallax className='image' blur={0} bgImage={image1} strength={800} bgImageStyle={{minHeight:"100vh"}}>
              
        <div className='content'>
            <motion.span className="img-txt"animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.2 }}>Keep calm and Cocktail on!</motion.span> 
          
           
        </div>
    </Parallax>

    <div className='text-box'>
            <h3>About</h3>
            <p><b>"You can’t buy happiness, but you can prepare a cocktail. And that’s kind of the same thing."</b>
              There are so many great cocktail blogs out there on the web. But we know that looking at them individually can be taxing. 
              So to save you some time, we put together a list of the best cocktail websites.Some of these cocktail blogs are well-known 
              and others are hidden treasures. We focused mainly on websites that can help you prepare cocktails at home for parties or 
              even just for yourself.
        </p>
        </div>

     <Parallax className='image' blur={0} bgImage={image2} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
             <motion.span className="img-txt"animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.2 }}>You can please your guests with a well-made cocktail.</motion.span>
        </div>
    </Parallax>

    <div className='text-box'>
           <h3> <a href="https://www.cocktailhammer.com/">Cocktail Hammer</a></h3>
            <p>Looking to get hammered? Say hello to Cocktail Hammer. Their tagline is “Stay home, get hammered,” 
              and that really says it all. Cocktail Hammer is a great website for those specifically looking to make 
              drinks from the comfort of their own home.
        </p>
        </div>

    <Parallax className='image' blur={0} bgImage={image3} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <motion.span className="img-txt"animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.2 }}>All you need is love and cocktails.</motion.span>
        </div>
    </Parallax>

     <div className='text-box'>
            <h3><a href="https://tipsybartender.com/">The Tipsy Bartender</a></h3>
            <p>The Tipsy Bartender offers great cocktail recipes all the time, but one of this cocktail blog's 
              coolest features is “My Liquor Cabinet.” Just type in the alcohol you have on hand and voilà! The 
              blog magically generates a list of great cocktails you can make.
        </p>
        </div>

         <Parallax className='image' blur={0} bgImage={image4} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
             <motion.span className="img-txt"animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.2 }}>When Life Gives You Lemons, Make a Lemon Cocktail.</motion.span>
        </div>
    </Parallax>

     <div className='text-box'>
            <h3><a href="https://talesofthecocktail.org/">Tales of the Cocktail</a></h3>
            <p>Tales of the Cocktail is a bit different from other blogs. This isn’t just about drink reviews 
              or recipes, but the Tales of the Cocktail event and other great liquor gatherings around the world. 
              They tell the stories of bartenders, talk about the history of spirits, and present news from around the industry.
        </p>
        </div>
       
       <Parallax className='image' blur={0} bgImage={image5} strength={800} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <motion.span className="img-txt"animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ scale: 1.2 }}>Thank You for Visiting!</motion.span>
        </div>
    </Parallax>
    
      
    </>


}

export default Home;