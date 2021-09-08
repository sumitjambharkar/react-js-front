import React from 'react';
import './Productpage.css';
import product from './game.json'

const Productpage = () => {

    return (
        <>
        <section>
        <div className="container">
        <h2>NEW ARRIVALS</h2>
            <div className="row">
                
                {product.map((currEle)=>{
                    return(
                        <>
                        <div className="col-6 col-md-4">
                        <div className="product">
                        <div className='product_image'>
                       <div>
                       <img width={350} height={350} src={currEle.image} alt="img" />
                       </div>
                        </div>
                        <div className="button">
                        <button>NEW</button>
                        </div>
                        <div className="title">
                        <h3>{currEle.name}</h3>
                        </div>
                       <div className="price">
                       <span>{currEle.price}</span>
                       </div>
                        <div className="rating">
                        {Array(currEle.rating).fill().map((_,i)=>(
                            <span className="rating">*</span>
                        ))}
                       </div>

                        </div>
                       </div>
                </>
                    )
                })

            }
            </div>
        </div>
        </section>
        </>
    )
}

export default Productpage
