import React from 'react'
import Fade from 'react-reveal/Fade'
export default function FeaturedImage({data}) {
    return (
        <section className="container">
            <div className="container-grid">
                {data.map((item,index)=>{
                    return (
                        <div key={`FeaturedImage-${index}`} className={`item ${index > 0 ? 'row-1' : 'row-2'} ${index > 0 ? 'column-5' : 'column-7'}`}>
                            <Fade bottom delay={index*300}>
                                <div className="card">
                                    <figure className="img-wrapper">
                                        <img src={item.url} alt={item._id} className="img-cover" />
                                    </figure>
                                </div>
                            </Fade>

                        </div>
                    );
                })}
            </div>
        </section>
    )
}
