import React from "react";
import "./Product.css";
import image from "../image/product.jpg";
import GetAppIcon from '@material-ui/icons/GetApp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Product = () => {
  return (
    <div className="container">
      <div className="row product_contain">
        <div className="col-lg image_contain">
            <div className="box_blue">
              <div className="image">
                <img className="img" src={image} alt="" />
              </div>
            </div>
            <hr />
            <button className="love_icon"><FavoriteBorderIcon/></button>
        </div>
        <div className="col-lg product_details">
            <div className="detail">
              <p>Single Domain License</p>
              <h1>$10.00</h1>
              <button className="buy">Buy Now</button>
              <div className="cart_button">
              <input type="number" id="quantity" name="quantity" min="1" max="5"/>
              <button>Add to cart</button>
              </div>
              <div>
              <button className="demo">Demo</button>
              </div>
              <div>
              <button className="demo">Free Download</button>
              </div>
              <div className="sale">
                <GetAppIcon className="sale_icon"/>
                <span className="num">1</span>
                <span className="sale_icon">sale</span>
              </div>
              <div className="option">
               <p>Last update</p>
               <span>December 4, 2020</span>
              </div>
              <hr />
              <div  className="option">
               <p>Released</p>
               <span>January 28, 2019</span>
              </div>
              <hr />
              <div  className="option">
               <p>Category</p>
               <span>eCommerce</span>
              </div>
              <hr />
              <div  className="option">
               <p>Tags</p>
               <span>amazon, argos, Bootstrap, Bootstrap Templates, Business, eCommerce, Flat, Flat Style, Flat UI, Flipkart, Online sales, Online Shopping, Responsive, Responsive Templates</span>
              </div>
              <hr />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
