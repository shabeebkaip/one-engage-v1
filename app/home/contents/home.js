import About from "../components/About";
import Description from "../components/Description";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Unlock from "../components/Unlock";
import WhatWeOffer from "../components/WhatWeOffer ";
import WhoWeServe from "../components/WhoWeServe";
import Experience from "../components/Experience";
import OurClients from "../components/OurClients";
import SuccesStories from "../components/SuccesStories ";

const MainHome = () => {
    return ( 
        <div className="bg-white">
           <Hero/>
           <About/>
           <Description/>
           <WhatWeOffer/>
           <Explore/>
           <Unlock/>
           <WhoWeServe/>
           <Experience/>
           <OurClients/>
           <SuccesStories/>
        </div>
     );
}
 
export default MainHome;