import { useEffect, useState } from 'react';
import "./Home.css"
import Componente1 from "../../components/Componente1.jsx";


import { Fade, Zoom } from "react-awesome-reveal";
import Componente2 from '../../components/Componente2.jsx';
import Componente3 from '../../components/Componente3.jsx';
import Componente4 from '../../components/Componente4.jsx';
import Componente5 from '../../components/Componente5.jsx';
import Componente6 from '../../components/Componente6.jsx';
import Componente7 from '../../components/Componente7.jsx';
import Componente9 from '../../components/Componente9.jsx';
import Componente10 from '../../components/Componente10.jsx';
import Componente11 from '../../components/Componente11.jsx';
import Componente12 from '../../components/Componente12.jsx';
import FaqSection from '../../components/Componente13.jsx';
import FinalReflection from '../../components/Componente14.jsx';
import TestimonialsCarousel from '../../components/Componente8.jsx';
import Footer from '../../components/Footer.jsx';
import Testimonials from '../../components/Testimonials/Testimonials.jsx';
import Componente11_2 from '../../components/Componente11_2.jsx';


function Home() {
    

    return (
        <div className='home-container'>
                
               
               
                <Componente1 />
                <Fade>
                <Componente2 />
                </Fade>
            
                {/* <Fade>
                <Componente3 />
                </Fade> */}

                <Componente4 />

                <Fade>
                <Componente5 />
                </Fade>

                <Testimonials/>

                <Fade>
                           
                <Componente6 />
                </Fade>

                <TestimonialsCarousel/>
                <Componente7 />


                <Fade>
               
                <Componente9/>
                 </Fade>

                <div className='interior'>

                <Fade>
                <Componente10 />
                </Fade>

                <Fade>
                {/* <Componente11 /> */}
                <Componente11_2/>
                </Fade>


                <Componente12/>
                </div>
                
                <Fade>
                <FaqSection/>
                </Fade>
                

            <Fade>
            <FinalReflection/>
            </Fade>

            <Footer />
        </div>
    )
}

export default Home