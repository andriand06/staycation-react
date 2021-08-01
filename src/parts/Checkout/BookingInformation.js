import React from 'react'
import Fade from 'react-reveal/Fade'
import InputText from 'components/InputText'
export default function BookingInformation(props) {
    const { data, itemDetails, checkout } = props;
    return (
        <Fade>
            <section className="container"  style={{marginBottom: 30}}>
                <div className="row justify-content-center align-items-center">
                    <div className="col-5 border-right py-5"style={{marginRight:"1rem"}}>
                        <Fade delay={300}>
                            <div className="card noborder"style={{marginRight:"1rem"}}>
                                <figure className="img-wrapper" style={{heigth:270}}>
                                    <img src={itemDetails.imageUrls[0].url} alt={itemDetails.name} className="img-cover" />
                                </figure>
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="meta-wrapper">
                                            <h5>
                                                {itemDetails.name}
                                            </h5>
                                            <span className="text-gray-500">
                                                {itemDetails.city}, {itemDetails.country}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <span>
                                            ${checkout.duration * itemDetails.price}
                                            <span className="text-gray-500">
                                                {" "}per{" "}
                                            </span>
                                             {checkout.duration} {itemDetails.unit}{checkout.duration > 1 ? "s" : " "}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-5 py-5">
                        <Fade delay={600}>
                            <label htmlFor="firstName">First Name</label>
                            <InputText name="firstName" id="firstName" onChange={props.onChange} value={data.firstName} />

                            <label htmlFor="lastName">Last Name</label>
                            <InputText name="lastName" id="lastName" onChange={props.onChange} value={data.lastName} />

                            <label htmlFor="email">Email</label>
                            <InputText name="email" id="email" onChange={props.onChange} value={data.email} />

                            <label htmlFor="phone">Phone Number</label>
                            <InputText name="phone" id="phone" type="tel" onChange={props.onChange} value={data.phone} />

                        </Fade>
                    </div>
                </div>
            </section>
        </Fade>
    )
}
