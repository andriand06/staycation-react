import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from 'components/Button'
import ImageHero from 'assets/images/picture.jpg'
import FrameHero from 'assets/images/frame.jpg'
import IconCities from 'assets/icons/ic_cities.svg'
import IconTraveler from 'assets/icons/ic_traveler.svg'
import IconTreasure from 'assets/icons/ic_treasure.svg'
import FormatNumber from 'utils/FormatNumber'
export default function Hero(props) {
    function showMostPicked() {
        window.scrollTo({
            top : props.refMostPicked.current.offsetTop -30,
            behavior : "smooth"
        })
    }
    return (
        <Fade>
        <section className="container" style={{marginTop:70}}>
            <div className="row mt-3 align-items-center">
                <div className="col-6 mr-3" style={{width:"422px",height:458, marginRight:"20rem"}}>
                    <h1 className="hero-title mt-5">
                        Forget Busy Work,
                        Start Next Vacation
                    </h1>
                    <p className="hero-description mt-5">
                        We provide what you need to enjoy your
                        holiday with family.Time to make another
                        memorable moments.
                    </p>
                    <Button hasShadow isPrimary isBlock  className="btn px-5 mt-5" type="link" onClick={showMostPicked} style={{width:210,height:40}}>Show Me Now</Button>
                    <div className="row" style={{marginTop:82}}>
                        <div className="col-auto">
                            <img src={IconTraveler} alt="icon-traveler" width="36" height="36" />
                            <p className="font-weight-bold">{FormatNumber(props.data.travelers)}<span className="font-weight-light"> Travelers</span></p>
                        </div>
                        <div className="col-auto">
                            <img src={IconTreasure} alt="icon-treasure" width="36" height="36" />
                            <p className="font-weight-bold">{FormatNumber(props.data.treasures)}<span className="font-weight-light"> Treasures</span></p>
                        </div>
                        <div className="col-auto">
                            <img src={IconCities} alt="icon-cities" width="36" height="36" />
                            <p className="font-weight-bold">{FormatNumber(props.data.cities)}<span className="font-weight-light"> Cities</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-auto">
                    <div className="image-hero">
                        <img src={ImageHero} alt="room with couches" className="" style={{zIndex:2}}/>
                        <img src={FrameHero} alt="room with couches" className="frame"/>
                    </div>
                </div>
            </div>
        </section>
        </Fade>
    )
}
