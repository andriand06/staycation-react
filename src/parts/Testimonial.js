import React from 'react'
import Button from 'components/Button'
import Star from 'components/Star'
import Fade from 'react-reveal/Fade'
import TestimonyAccent from 'assets/images/testimonial_frame.jpg'
export default function Testimonial({data}) {
    return (
        <Fade>
            <section className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="testimonial-hero"  style={{margin : '30px 0 0 30px'}}>
                            <img src={data.imageUrl} alt={data.name} style={{position:'absolute',zIndex:2}}  />
                            <img src={TestimonyAccent} alt="frame-testimony" style={{position:'absolute',zIndex:1,margin : '-30px 0 0 -30px'}} />
                        </div>
                    </div>
                    <div className="col-6">
                        <h4 className="mb-3">{data.name}</h4>
                        <Star value={data.rate} width={35} height={35} spacing={4}/>
                        <h5 className="h2">
                            {data.content}
                        </h5>
                        <span className="text-gray-500 font-light-weight">
                            {data.familyName}, {data.familyOccupation}
                        </span>
                        <div>
                            <Button hasShadow isPrimary isBlock type="link" className="btn px-5" style={{marginTop:50}} href={`/testimonial/${data._id}`}>Read their Story</Button>
                        </div>
                        
                    </div>
                </div>
            </section>
        </Fade>
    )
}
