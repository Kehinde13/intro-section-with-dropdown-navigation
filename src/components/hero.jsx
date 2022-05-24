import React from "react";
import mobileHero from '../assets/image-hero-mobile.png';
import desktopHero from '../assets/image-hero-desktop.png';
import audio from '../assets/client-audiophile.svg';
import data from '../assets/client-databiz.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';

const Hero = () => {


    return ( 
        <div className="w-full max-w-[1240px] mx-auto">
           <div className="md:mr-16">
                <div className="md:hidden">
                    <img src={mobileHero} alt="hero" />
                </div>
                <div className="hidden md:block float-right w-[380px] ">
                    <img src={desktopHero} alt="hero" />
                </div>
           </div> 
           <div className="w-full text-center pt-12 md:text-left md:w-[450px] md:ml-32">
                
               <div className="md:mb-28 mb-16 ">
                    <h1 className="text-4xl font-bold mb-5 md:text-6xl"><span className="md:block">Make </span>remote work </h1> 

                    <p className="text-xl mb-5 px-3 md:p-0 text-gray-400 md:my-10"> 
                        Get your team in sync, no matter your location. Streamline processes, 
                        create team rituals, and watch productivity soar.
                    </p>

                    <button className="bg-black text-white rounded-xl py-3 px-4 text-xl 
                    hover:bg-white hover:text-black border-black border">Learn more</button> 
               </div>
               <div className="grid grid-cols-4 gap-4 mx-3 md:mx-0">
                   <img src={data} alt="data"/>
                   <img src={audio} alt="audio" />
                   <img src={meet} alt="meet" />
                   <img src={maker} alt="maker" />
               </div>
               
           </div>
        </div>
        
     );
}
 
export default Hero;