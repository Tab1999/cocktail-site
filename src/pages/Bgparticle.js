import './Bgparticle.css';
import About from './Slider';
import{motion} from "framer-motion";


function Bgparticle(){
    return<>
   <div class="background">
  
  <div class="elements">

    
      <About/>
   
    <motion.h1 whileInView={{scale:1.1}}>Enjoy Your Time!</motion.h1>

  </div> 
</div>
    </>

}
export default Bgparticle;