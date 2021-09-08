import React from "react";
import './Container.css'
import Product from "./Product";
import HomeIcon from '@material-ui/icons/Home';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Container = () => {
  return (
    <>
      <div className="section">
          <div className="container header">
              <div className="row">
                  <div className="col-lg header_f">
                      <h3>Bootie E commerce Bootstrap Responsive Web Template</h3>
                  </div>
                  <div className="col-lg header_s">
                      <div className="d-flex">
                      <HomeIcon className="small_icon"/> <span>Home</span> < ArrowForwardIosIcon className="small_icon"/> <span>eCommerce</span>
                      </div>
                      <div>
                      < ArrowForwardIosIcon/> 
                      <span>Bootie E commerce Bootstrap Responsive Web Template</span>
                      </div>
                  </div>
              </div>

          </div>
          <div className="container">
              <Product/>
          </div>
      </div>
    </>
  );
};

export default Container;
