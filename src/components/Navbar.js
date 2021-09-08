import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Tooltip from '@material-ui/core/Tooltip';


const Navbar = () => {
    
  return (
    <>
    <section className="navbar">
        <div className="header_name">
            <div className="logo_name">
               <h2> W3Layouts</h2>
            </div>
            <div className="header_menu">
                <ul>
                    <li>
                    <a href=""><MenuRoundedIcon/></a>
                    </li>
                    <li>
                    <a href="">Web Templates</a>
                    </li>
                    <li><a href="">|</a></li>
                    <li>
                    <a href="/"> Home</a>
                    </li>
                    <li>
                       <a href=""> Blog</a>
                    </li>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Wordpress Themes</a>
                    </li>
                </ul>
            </div>

        </div>
        <div className="header_icon">
            <div className="icon">
            <Tooltip title="Search">
            <SearchIcon/>
            </Tooltip>
            </div>
            <div className="icon">
            <Tooltip title="Whishlist">
             <FavoriteBorderIcon/>
             </Tooltip>
             <span className="count">0</ span>
            </div>
            <div className="icon">
            <Tooltip title="Account">
            <PersonOutlineIcon/>
            </Tooltip>
            </div>
            <div className="cart_icon">
            <ShoppingCartRoundedIcon/>
            <span className="count">0</span>
            </div>

        </div>
    </section>
     
    </>
  );
};

export default Navbar;
