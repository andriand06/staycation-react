import React from 'react'
import ReactHtmlParser from 'react-html-parser'
export default function DetailPageDescription({data}) {
    return (
        <main>
            <h4 className="font-weight-bold">About The Page</h4>
                {ReactHtmlParser(data.description)}  
                    <div className="row mt-3">
                        {data.features.map((item,index)=> {
                            return (
                                <div key={`features-${index}`} className="col-3">
                                    <img src={item.imageUrl} alt={item.name} width="38" className="d-block mb-2" />
                                    <span>{item.qty}</span> {" "}
                                    <span className="font-weight-light text-gray-500">{item.name}</span>
                        
                                </div>
                            )
                        })}
                    </div>
        </main>
    )
}
