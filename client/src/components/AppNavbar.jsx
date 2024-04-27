import {Link, NavLink} from "react-router-dom";
//import { useRef } from 'react';

const AppNavbar = () => {

    // const menuRef = useRef(null);

    // alert(menuRef.current)

    // $('ul.nav.nav-pills li a').click(function() {           
    //     $(this).parent().addClass('active').siblings().removeClass('active');           
    // });

    return (
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
            <li className="nav-item menu-item mt-2 w-100  ">
                <NavLink to="/" className="nav-link align-middle ">
                    <i className="bi-grid-fill"></i> 
                    <span className="ms-1">All Foods</span>
                </NavLink>
            </li>    
            <li className="nav-item menu-item mt-2 w-100 ">
                <NavLink to="/create" className="nav-link align-middle">
                    <i className="bi-cart-dash-fill"></i> 
                    <span className="ms-1">Create Food</span>
                </NavLink>
            </li>
        </ul> 
    )
};

export default AppNavbar;


