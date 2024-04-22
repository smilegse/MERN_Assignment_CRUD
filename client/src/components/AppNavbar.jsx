import {Link} from "react-router-dom";
//import { useRef } from 'react';

const AppNavbar = () => {

    // const menuRef = useRef(null);

    // alert(menuRef.current)

    // $('ul.nav.nav-pills li a').click(function() {           
    //     $(this).parent().addClass('active').siblings().removeClass('active');           
    // });

    return (
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
            <li className="nav-item menu-item mt-2 w-100 ">
                <Link to="/create" className="nav-link  align-middle">
                    <i className="bi-cart-dash-fill"></i> 
                    <span className="ms-1 d-none d-sm-inline">Create Food</span>
                </Link>
            </li>
            <li className="nav-item menu-item mt-2 w-100  ">
                <Link to="/" className="nav-link align-middle active">
                    <i className="bi-grid-fill"></i> 
                    <span className="ms-1 d-none d-sm-inline">All Foods</span>
                </Link>
            </li>                  
        </ul> 
    )
};

export default AppNavbar;


