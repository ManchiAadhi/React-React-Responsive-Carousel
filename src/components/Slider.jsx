import "./Slider.css"
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Slider() {
    return (
        <div>
            <Carousel id="car" >
                <div className="imageholder" >
                    <img  className="image" src="https://th.bing.com/th/id/OIP.U0YRRLWBZ4gwAAWeHWqDWAHaEK?pid=ImgDet&rs=1" alt="Thailandbeach"/>
                    <h1 className="title" > Thailandbeach</h1>
                </div>

                <div  className="imageholder"  >
                    <img  className="image" src="https://th.bing.com/th/id/OIP.uF3q7bIezL_q7bPtaQ8tJwHaE8?pid=ImgDet&rs=1" alt="maldeevs"/>
                    <h1 className="title" > Maldeevs beach</h1>
                </div>

                <div  className="imageholder">
                    <img  className="image" src="https://www.hotholidays.co.uk/image/original/destination/1512397611.9148_Canary%20Islands.jpg" alt="canary islands"  />
                    <h1 className="title"  > Canary beach</h1>
                </div>

                <div  className="imageholder">
                    <img   className="image"  src="https://cdn.architecturendesign.net/wp-content/uploads/2014/07/Kuramathi-37.jpg" alt="kusumathi beach" />
                    <h1  className="title" > Kusumathi beach</h1>
                </div>

                <div  className="imageholder">
                    <img className="image"   src="https://th.bing.com/th/id/OIP.J1cPl44zwkfoTKLPH82xFgHaEo?pid=ImgDet&rs=1" alt="fishiselandbeach" />
                    <h1 className="title" > Finland beach</h1>
                </div>

            </Carousel>
        </div>
    );
}

export default Slider;
