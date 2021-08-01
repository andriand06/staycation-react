import React from 'react'
import Fade from 'react-reveal/Fade'
import InputFile from 'components/InputFile'
import InputText from 'components/InputText'
import LogoBCA from 'assets/images/logo-bca.svg';
import LogoMandiri from 'assets/images/logo-mandiri.svg';   
export default function Payment(props) {
    const { data, itemDetails, checkout} = props;
    const tax = 10;
    const subTotal = checkout.duration * itemDetails.price;
    const grandTotal = (subTotal * 10/100) + subTotal;
    return (
        <Fade>
        <section className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-5 border-right py-5">
                    <Fade delay={300}>
                        <p className="mb-3">Transfer Pembayaran :  </p>
                        <p className="mb-3">Tax : {tax}% </p>
                        <p className="mb-3">Sub Total : {subTotal} USD </p>
                        <p className="mb-3">Grand Total : {grandTotal} USD </p>
                        <div className="row mt-4">
                            <div className="col-3">
                                <img src={LogoBCA} alt="Bank Bca" width="60" />
                            </div>
                            <div className="col">
                                <p>Bank Central Asia</p>
                                <p>2208 1996</p>
                                <p>Andrian Davinta</p>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-3">
                                <img src={LogoMandiri} alt="Bank Mandiri" width="60" />
                            </div>
                            <div className="col">
                                <p>Bank Mandiri</p>
                                <p>2208 1996</p>
                                <p>Andrian Davinta</p>
                            </div>
                        </div>
                    </Fade>
                    
                </div>
                <div className="col-5 py-5" style={{paddingLeft:70}}>
                    <label htmlFor="proofPayment">Upload Bukti Transfer</label>
                    <InputFile name="proofPayment" accept="image/*" id="proofPayment" onChange={props.onChange} value={data.proofPayment} />

                    <label htmlFor="bankName">Asal Bank</label>
                    <InputText name="bankName" id="bankName" onChange={props.onChange} value={data.bankName} />

                    <label htmlFor="bankHolder">Nama Pengirim</label>
                    <InputText name="bankHolder" id="bankHolder" onChange={props.onChange} value={data.bankHolder} />


                </div>
            </div>
        </section>
        </Fade>
    )
}
