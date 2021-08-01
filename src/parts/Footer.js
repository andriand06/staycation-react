import React from 'react'
import BrandIcon from 'components/BrandIcon'
import Button from 'components/Button'
export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-center mt-5">
                    <div className="col-4">
                        <BrandIcon />
                        <p className="text-gray-500">We kaboom your beauty holiday <br />
                        instantly and memorable</p>
                    </div>
                    <div className="col-3 mr-5">
                        <h5 className="font-weight-bold">For Beginners</h5>
                        <ul className="list-group list-group-flush">
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/register">New Account</Button>
                            </li>
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/booking">Start Bookin a Room</Button>
                            </li>
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/payments">Use Payments</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2 mr-5">
                        <h5 className="font-weight-bold">Explore Us</h5>
                        <ul className="list-group list-group-flush">
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/career">Our Careers</Button>
                            </li>
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/privacy">Privacy</Button>
                            </li>
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="/termcondition">Terms&Conditions</Button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-3 mr-5">
                        <h5 className="font-weight-bold">Connect Us</h5>
                        <ul className="list-group list-group-flush">
                            <li className="mt-2">
                                <Button type="link" isExternal className="text-gray-500" href="/register">support@staycation.id</Button>
                            </li>
                            <li className="mt-2">
                                <Button type="link" className="text-gray-500" href="tel:+6281363883325">081363883325</Button>
                            </li>
                            <li className="mt-2 text-gray-500">
                                Staycation, Kemang, Jakarta
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center text-gray-500">
                    Copyright 2019 • All rights reserved • Staycation
                    </div>
                </div>
            </div>
        </footer>
    )
}
