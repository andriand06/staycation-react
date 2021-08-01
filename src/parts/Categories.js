import React from 'react'
import Fade from 'react-reveal/Fade'
import Button from 'components/Button'
export default function Categories({ data }) {
    return data.map(( category,index) => {
        return <section className="container mt-5" key={`category-${index}`}>
            <Fade bottom>
                <h4 className="mb-3">{category.name}</h4>
                <div className="container-grid">
                    {category.items.length === 0 ? 
                    <div className="row">
                        <div className="col-auto align-items-center">
                            There is no property here
                        </div>
                    </div>    
                : category.items.map((item,index2)=> {
                    return (
                    <div className="item row-1 column-3" key={`category-${index}-item-${index2}`}>
                        <Fade bottom delay={300 * index2}>
                            <div className="card">
                                { item.isPopular && (
                                    <div className="tag">
                                        Popular{" "}
                                        <span className="font-light-weight">Choice</span>
                                    </div>
                                )}
                                <figure className="img-wrapper">
                                    <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                                </figure>
                                
                            </div>
                            <div className="meta-wrapper mt-3">
                                    <Button type="link" className="streched-link d-block text-gray-800" href={`/properties/${item._id}`}>
                                        <h5 className="h4">{item.name}</h5>
                                    </Button>
                                    <span className="text-gray-500">{item.city}, {item.country}</span>
                                </div>
                        </Fade>
                    </div>
                    );
                })}
                </div>
            </Fade>
        </section>
    })
}
